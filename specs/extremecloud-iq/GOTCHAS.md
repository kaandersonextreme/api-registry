# ExtremeCloud IQ API — Integration Gotchas (BETA)

> ⚠️ **BETA / unverified.** These notes come from an in-progress integration (a network-policy migration tool between two tenants) that is still being debugged and has **not yet been fully validated end-to-end against a real tenant**. Treat the findings below as a strong lead based on the OpenAPI spec plus partial live testing — not confirmed fact — and verify independently before relying on them. Will update this file once the underlying tool is working reliably.

Empirical findings from building a real integration (a network-policy migration tool between two tenants) that aren't obvious from reading the OpenAPI spec in isolation.

## SSIDs cannot be created via this API

- `POST /network-policies` (`XiqCreateNetworkPolicyRequest`) only accepts `name`, `description`, and `type` — there is no field for embedding wireless/SSID configuration when creating a policy. Any extra fields sent in that body (e.g. an `ssids` array) are silently ignored by the server.
- `POST /network-policies/{id}/ssids/:add` links an array of **existing SSID IDs** to a policy — it does not create SSIDs, only attaches ones that already exist on the account.
- We searched the full spec for any SSID-creation operation (`POST /ssids`, `createSsid`, `XiqCreateSsid`, etc.) and found none. For comparison, sibling resources like User Profiles do have a `POST /user-profiles` create endpoint — this looks like a genuine gap, not something we missed.
- **Practical implication:** migrating a network policy's wireless config between two accounts/tenants is not fully automatable through this API. The destination account needs SSIDs with matching names created ahead of time (currently only possible via the web UI); the API can only link existing SSIDs to a policy by ID, not manufacture new ones.

## Long-lived API keys and short-lived session tokens both use `Authorization: Bearer`

- The spec's only security scheme is `BearerAuth` (`type: http, scheme: bearer`) — there's no `apiKey`/`X-API-Key` scheme anywhere in this spec. That's a different convention than some other Extreme API surfaces use elsewhere, so don't assume it carries over between products.

## Session-derived Bearer tokens expire quickly, and look identical to a wrong-scheme error

- A token obtained via `POST /login` appears to expire in roughly an hour. An expired token and an otherwise-correct-but-wrong-credential mistake both produce the exact same generic error body:
  ```json
  {"code":"UNAUTHORIZED","message":"Authentication failed","details":"Invalid access token or API key"}
  ```
- `GET /auth/apitoken/info` is a cheap way to disambiguate — it introspects the current token and returns `user_name`, `role`, `data_center`, `scopes`, `issued_at`/`expiration_time`/`expires_in`. If that call itself 401s, the token is simply bad (expired/revoked/malformed); if it succeeds, look elsewhere (permissions, resource-specific scope, etc.) for the real problem.

## Pagination param is `limit`, not `pageSize`

- List endpoints such as `GET /network-policies` use `limit` (and `page`) for pagination — not `pageSize`, which is the convention on some other API surfaces. Worth double-checking per endpoint rather than assuming one convention applies registry-wide.

## Resource IDs are numeric (`int64`), not strings

- Network policies, SSIDs, etc. all use `type: integer, format: int64` IDs per the spec. If you're proxying this API through another service, don't type those fields as strings on your side — number-only validators will reject a client that (correctly) sends the numeric ID as a JSON number rather than a string.
