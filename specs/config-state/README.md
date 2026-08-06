# Config State Service.

## Overview

This specification provides details of the API exposed by Config State service.

## Base URL

```
https://cloudapi.extremecloudiq.com/configstate/v1
```

## Key Features

- **AssetAccount**: AssetAccount
- **AssetAllOfLldpNeighborXmedInventory**: AssetAllOfLldpNeighborXmedInventory
- **AssetAuthenticationConfig**: AssetAuthenticationConfig
- **AssetAuthenticationPortSettingConfig**: AssetAuthenticationPortSettingConfig
- **AssetAuthenticationState**: AssetAuthenticationState
- **AssetAutoSenseFabricAttach**: AssetAutoSenseFabricAttach
- **AssetAutoSenseGlobal**: AssetAutoSenseGlobal
- **AssetAutoSenseIsis**: AssetAutoSenseIsis
- **AssetAutoSensePort**: AssetAutoSensePort
- **AssetCdpNeighbor**: AssetCdpNeighbor
- **AssetCdpPortsConfig**: AssetCdpPortsConfig
- **AssetDevice**: AssetDevice
- **AssetDeviceConnectionDetail**: AssetDeviceConnectionDetail
- **AssetDeviceConnectionDetailPhysicalStack**: AssetDeviceConnectionDetailPhysicalStack
- **AssetDeviceConnectionDetailStackInfo**: AssetDeviceConnectionDetailStackInfo
- **AssetDhcpRelayVlanConfig**: AssetDhcpRelayVlanConfig
- **AssetDhcpRelayVlanServerConfig**: AssetDhcpRelayVlanServerConfig
- **AssetDhcpRelayVrfConfig**: AssetDhcpRelayVrfConfig
- **AssetDhcpRelayVrfServerConfig**: AssetDhcpRelayVrfServerConfig
- **AssetDhcpRelayVrfState**: AssetDhcpRelayVrfState
- **AssetDhcpSnoopConfig**: AssetDhcpSnoopConfig
- **AssetDhcpSnoopDynamicVlansConfig**: AssetDhcpSnoopDynamicVlansConfig
- **AssetDhcpSnoopPortsConfig**: AssetDhcpSnoopPortsConfig
- **AssetDhcpSnoopVlansConfig**: AssetDhcpSnoopVlansConfig
- **AssetDnsConfig**: AssetDnsConfig
- **AssetDnsVrfServerConfig**: AssetDnsVrfServerConfig
- **AssetElrpConfig**: AssetElrpConfig
- **AssetElrpDynamicVlanConfig**: AssetElrpDynamicVlanConfig
- **AssetElrpVlanConfig**: AssetElrpVlanConfig
- **AssetFabricAttachConfig**: AssetFabricAttachConfig
- **AssetFabricAttachConfigPort**: AssetFabricAttachConfigPort
- **AssetFabricAttachConfigZeroTouchClient**: AssetFabricAttachConfigZeroTouchClient
- **AssetFabricAttachState**: AssetFabricAttachState
- **AssetFabricAttachStateDiscoveryElement**: AssetFabricAttachStateDiscoveryElement
- **AssetFabricAttachStateVlanAssignment**: AssetFabricAttachStateVlanAssignment
- **AssetFeTunnelConfig**: AssetFeTunnelConfig
- **AssetIgmpVlanConfig**: AssetIgmpVlanConfig
- **AssetIgmpVrConfig**: AssetIgmpVrConfig
- **AssetInstantPortActionConfig**: AssetInstantPortActionConfig
- **AssetInstantPortConfig**: AssetInstantPortConfig
- **AssetInstantPortDeviceTypesConfig**: AssetInstantPortDeviceTypesConfig
- **AssetInstantPortMatchConditionConfig**: AssetInstantPortMatchConditionConfig
- **AssetInstantPortProfileConfig**: AssetInstantPortProfileConfig
- **AssetInterIsisUnicastFibState**: AssetInterIsisUnicastFibState
- **AssetInterface**: AssetInterface
- **AssetInterfaceIpAddress**: AssetInterfaceIpAddress
- **AssetInterfaceVlanMap**: AssetInterfaceVlanMap
- **AssetInterfaceVlanProperties**: AssetInterfaceVlanProperties
- **AssetIpArpState**: AssetIpArpState
- **AssetIsidMacFdbState**: AssetIsidMacFdbState
- **AssetIsisAdjacency**: AssetIsisAdjacency
- **AssetIsisCircuitConfig**: AssetIsisCircuitConfig
- **AssetIsisCircuitSpbmSetting**: AssetIsisCircuitSpbmSetting
- **AssetIsisCircuitState**: AssetIsisCircuitState
- **AssetIsisGlobalConfig**: AssetIsisGlobalConfig
- **AssetIsisGlobalState**: AssetIsisGlobalState
- **AssetIsisL2MultiAreaIsidList**: AssetIsisL2MultiAreaIsidList
- **AssetIsisL2RedistributeMultiAreaSnoop**: AssetIsisL2RedistributeMultiAreaSnoop
- **AssetIsisL3AcceptPolicyConfig**: AssetIsisL3AcceptPolicyConfig
- **AssetIsisL3Redistribute**: AssetIsisL3Redistribute
- **AssetIsisL3RedistributeMultiAreaIsidRedist**: AssetIsisL3RedistributeMultiAreaIsidRedist
- **AssetIsisLspState**: AssetIsisLspState
- **AssetIsisMulticastFibState**: AssetIsisMulticastFibState
- **AssetIsisMulticastRouteState**: AssetIsisMulticastRouteState
- **AssetIsisRedistributeMultiArea**: AssetIsisRedistributeMultiArea
- **AssetIsisRedistributeMultiAreaStaticIsid**: AssetIsisRedistributeMultiAreaStaticIsid
- **AssetIsisUnicastFibState**: AssetIsisUnicastFibState
- **AssetL2VsnCvlanConfig**: AssetL2VsnCvlanConfig
- **AssetL2VsnSuniConfig**: AssetL2VsnSuniConfig
- **AssetL2VsnSuniConfigEndPoint**: AssetL2VsnSuniConfigEndPoint
- **AssetL2VsnSuniState**: AssetL2VsnSuniState
- **AssetL2VsnSuniStateMemberIntfs**: AssetL2VsnSuniStateMemberIntfs
- **AssetL2VsnTuniConfig**: AssetL2VsnTuniConfig
- **AssetL2VsnTuniConfigMemberIntf**: AssetL2VsnTuniConfigMemberIntf
- **AssetL3VsnConfig**: AssetL3VsnConfig
- **AssetL3VsnIsidListConfig**: AssetL3VsnIsidListConfig
- **AssetLagConfig**: AssetLagConfig
- **AssetLagConfigMemberPort**: AssetLagConfigMemberPort
- **AssetLagState**: AssetLagState
- **AssetLagStateMemberPort**: AssetLagStateMemberPort
- **AssetLldpConfig**: AssetLldpConfig
- **AssetLldpDot1PortProtocolVlan**: AssetLldpDot1PortProtocolVlan
- **AssetLldpDot1VlanObject**: AssetLldpDot1VlanObject
- **AssetLldpNeighborFabricAttach**: AssetLldpNeighborFabricAttach
- **AssetLldpNeighborFabricAttachVlanIsidMap**: AssetLldpNeighborFabricAttachVlanIsidMap
- **AssetLldpNeighborManagementAddressList**: AssetLldpNeighborManagementAddressList
- **AssetLldpNeighborState**: AssetLldpNeighborState
- **AssetLldpNeighborXmed**: AssetLldpNeighborXmed
- **AssetLldpNeighborXmedPoePd**: AssetLldpNeighborXmedPoePd
- **AssetLldpNeighborXmedPoePse**: AssetLldpNeighborXmedPoePse
- **AssetLldpNeighborXmedPolicy**: AssetLldpNeighborXmedPolicy
- **AssetLldpNeighborZtf**: AssetLldpNeighborZtf
- **AssetLldpNeighborZtfTunnelGroup**: AssetLldpNeighborZtfTunnelGroup
- **AssetLldpPortAdvertiseSettingsConfig**: AssetLldpPortAdvertiseSettingsConfig
- **AssetLldpPortConfig**: AssetLldpPortConfig
- **AssetLldpPortMedPolicySettingsConfig**: AssetLldpPortMedPolicySettingsConfig
- **AssetLocation**: AssetLocation
- **AssetMacLockingConfig**: AssetMacLockingConfig
- **AssetMlagPeerConfig**: AssetMlagPeerConfig
- **AssetMlagPeerCounters**: AssetMlagPeerCounters
- **AssetMlagPeerState**: AssetMlagPeerState
- **AssetMlagPortState**: AssetMlagPortState
- **AssetMulticastFibInterface**: AssetMulticastFibInterface
- **AssetNeighDiscState**: AssetNeighDiscState
- **AssetNetworkToNetworkInterface**: AssetNetworkToNetworkInterface
- **AssetNodeAliasConfig**: AssetNodeAliasConfig
- **AssetNodeAliasPortConfig**: AssetNodeAliasPortConfig
- **AssetNtpConfig**: AssetNtpConfig
- **AssetNtpServerConfig**: AssetNtpServerConfig
- **AssetPoePowerConfig**: AssetPoePowerConfig
- **AssetPoePowerPortsConfig**: AssetPoePowerPortsConfig
- **AssetPoePowerPortsState**: AssetPoePowerPortsState
- **AssetPoePowerSlotSettingsConfig**: AssetPoePowerSlotSettingsConfig
- **AssetPolicyGlobal**: AssetPolicyGlobal
- **AssetPortCapabilities**: AssetPortCapabilities
- **AssetPortConfig**: AssetPortConfig
- **AssetPortLldpLocation**: AssetPortLldpLocation
- **AssetPortMacLockingConfig**: AssetPortMacLockingConfig
- **AssetPortState**: AssetPortState
- **AssetPortsGlobalConfig**: AssetPortsGlobalConfig
- **AssetRadiusServerConfig**: AssetRadiusServerConfig
- **AssetRadiusServerHostConfig**: AssetRadiusServerHostConfig
- **AssetRadiusServerSecureProfilesConfig**: AssetRadiusServerSecureProfilesConfig
- **AssetRsmltLocalInstanceState**: AssetRsmltLocalInstanceState
- **AssetRsmltRemoteInstanceState**: AssetRsmltRemoteInstanceState
- **AssetRsmltVlanInstanceConfig**: AssetRsmltVlanInstanceConfig
- **AssetSlot**: AssetSlot
- **AssetSlppConfig**: AssetSlppConfig
- **AssetSlppPortConfig**: AssetSlppPortConfig
- **AssetSlppVlanConfig**: AssetSlppVlanConfig
- **AssetSnmpAccessConfig**: AssetSnmpAccessConfig
- **AssetSnmpGlobalConfig**: AssetSnmpGlobalConfig
- **AssetSnmpGroupConfig**: AssetSnmpGroupConfig
- **AssetSnmpTrapReceiverConfig**: AssetSnmpTrapReceiverConfig
- **AssetSnmpV1V2Config**: AssetSnmpV1V2Config
- **AssetSnmpV3AccessConfig**: AssetSnmpV3AccessConfig
- **AssetSnmpV3Config**: AssetSnmpV3Config
- **AssetSnmpV3TrapReceiverConfig**: AssetSnmpV3TrapReceiverConfig
- **AssetSnmpViewConfig**: AssetSnmpViewConfig
- **AssetSntpConfig**: AssetSntpConfig
- **AssetSntpServerConfig**: AssetSntpServerConfig
- **AssetSpbmCfmGlobal**: AssetSpbmCfmGlobal
- **AssetSpbmGlobalSettingsConfig**: AssetSpbmGlobalSettingsConfig
- **AssetSpbmInstance**: AssetSpbmInstance
- **AssetSsidConfig**: AssetSsidConfig
- **AssetSsidState**: AssetSsidState
- **AssetStormControlPortConfig**: AssetStormControlPortConfig
- **AssetStpDomainState**: AssetStpDomainState
- **AssetStpGlobalConfig**: AssetStpGlobalConfig
- **AssetStpInterfaceSettingsConfig**: AssetStpInterfaceSettingsConfig
- **AssetStpPortStateEntry**: AssetStpPortStateEntry
- **AssetStpProtocolSettingsConfig**: AssetStpProtocolSettingsConfig
- **AssetStpVlanSettingsConfig**: AssetStpVlanSettingsConfig
- **AssetSysCapabilities**: AssetSysCapabilities
- **AssetSyslogConfig**: AssetSyslogConfig
- **AssetSyslogServerConfig**: AssetSyslogServerConfig
- **AssetSystemSettings**: AssetSystemSettings
- **AssetTimeZoneConfig**: AssetTimeZoneConfig
- **AssetUrlCapabilities**: AssetUrlCapabilities
- **AssetVim**: AssetVim
- **AssetVlanConfig**: AssetVlanConfig
- **AssetVlanConfigIpArpLearnFrom**: AssetVlanConfigIpArpLearnFrom
- **AssetVlanMacFdbState**: AssetVlanMacFdbState
- **AssetVlanState**: AssetVlanState
- **AssetVlanStateMemberInterfaces**: AssetVlanStateMemberInterfaces
- **AssetVrfConfig**: AssetVrfConfig
- **AssetVrfProtectedRouteGateway**: AssetVrfProtectedRouteGateway
- **AssetVrfRouteConfig**: AssetVrfRouteConfig
- **AssetVrfRouteState**: AssetVrfRouteState
- **AssetVrfState**: AssetVrfState
- **AssetVrfVlanConfig**: AssetVrfVlanConfig
- **AssetVrrpConfig**: AssetVrrpConfig
- **AssetVrrpState**: AssetVrrpState
- **AssetVrrpVirtualIpAddressConfig**: AssetVrrpVirtualIpAddressConfig
- **AssetVrrpVirtualIpAddressState**: AssetVrrpVirtualIpAddressState
- **AssetWirelessInterface**: AssetWirelessInterface
- **AssetWirelessInterfaceState**: AssetWirelessInterfaceState
- **InferredArea**: InferredArea
- **InferredBoundaryDetails**: InferredBoundaryDetails
- **InferredCluster**: InferredCluster
- **InferredCustomerVlanUni**: InferredCustomerVlanUni
- **InferredDevice**: InferredDevice
- **InferredDeviceFaDetail**: InferredDeviceFaDetail
- **InferredDeviceSpbmDetail**: InferredDeviceSpbmDetail
- **InferredDiscoveryStatusError**: InferredDiscoveryStatusError
- **InferredFabric**: InferredFabric
- **InferredFabricAttachDomain**: InferredFabricAttachDomain
- **InferredFabricAttachPort**: InferredFabricAttachPort
- **InferredFabricAttachVlan**: InferredFabricAttachVlan
- **InferredFabricLink**: InferredFabricLink
- **InferredFabricLinkFaDetail**: InferredFabricLinkFaDetail
- **InferredFabricTopology**: InferredFabricTopology
- **InferredGlobalSpbmDetails**: InferredGlobalSpbmDetails
- **InferredGroupInfo**: InferredGroupInfo
- **InferredInterface**: InferredInterface
- **InferredInterfaceVlanMap**: InferredInterfaceVlanMap
- **InferredIsisDetails**: InferredIsisDetails
- **InferredIsisRemoteDetails**: InferredIsisRemoteDetails
- **InferredL2Access**: InferredL2Access
- **InferredL2Service**: InferredL2Service
- **InferredL2ServiceEndPoint**: InferredL2ServiceEndPoint
- **InferredL3Access**: InferredL3Access
- **InferredL3GatewayInterface**: InferredL3GatewayInterface
- **InferredL3Service**: InferredL3Service
- **InferredL3ServiceEndPoint**: InferredL3ServiceEndPoint
- **InferredLag**: InferredLag
- **InferredLldpEdgeDeviceGrouping**: InferredLldpEdgeDeviceGrouping
- **InferredPhysicalLink**: InferredPhysicalLink
- **InferredPhysicalTopology**: InferredPhysicalTopology
- **InferredPort**: InferredPort
- **InferredPortErrorStats**: InferredPortErrorStats
- **InferredPortInOutStats**: InferredPortInOutStats
- **InferredPortLagMemberMap**: InferredPortLagMemberMap
- **InferredPortUtilizationInfo**: InferredPortUtilizationInfo
- **InferredPrimaryPrivateVlan**: InferredPrimaryPrivateVlan
- **InferredPrivateVlanDomain**: InferredPrivateVlanDomain
- **InferredPrivateVlanInterface**: InferredPrivateVlanInterface
- **InferredSecondaryPrivateVlan**: InferredSecondaryPrivateVlan
- **InferredSlot**: InferredSlot
- **InferredSwitchedVlanUni**: InferredSwitchedVlanUni
- **InferredTag**: InferredTag
- **InferredTagCriteria**: InferredTagCriteria
- **InferredTagElement**: InferredTagElement
- **InferredTagOuterElement**: InferredTagOuterElement
- **InferredTransparentVlanUni**: InferredTransparentVlanUni
- **InferredUserLink**: InferredUserLink
- **InferredVlan**: InferredVlan
- **InferredVlanService**: InferredVlanService
- **InferredVrf**: InferredVrf
- **InferredVrfService**: InferredVrfService
- **InferredVrrpInstance**: InferredVrrpInstance
- **InferredWirelessInterface**: InferredWirelessInterface
- **InferredWirelessInterfaceErrorStats**: InferredWirelessInterfaceErrorStats
- **InferredWirelessInterfaceInOutStats**: InferredWirelessInterfaceInOutStats
- **InferredWirelessInterfaceUtilizationInfo**: InferredWirelessInterfaceUtilizationInfo
- **IntentAutoSenseFabricAttach**: IntentAutoSenseFabricAttach
- **IntentAutoSenseGlobal**: IntentAutoSenseGlobal
- **IntentAutoSenseIsis**: IntentAutoSenseIsis
- **IntentDevice**: IntentDevice
- **IntentIsisCircuitConfig**: IntentIsisCircuitConfig
- **IntentIsisCircuitSpbmSetting**: IntentIsisCircuitSpbmSetting
- **IntentIsisGlobalConfig**: IntentIsisGlobalConfig
- **IntentL2VsnCvlanConfig**: IntentL2VsnCvlanConfig
- **IntentL2VsnSuniConfig**: IntentL2VsnSuniConfig
- **IntentL2VsnTuniConfig**: IntentL2VsnTuniConfig
- **IntentSpbmGlobalSettingsConfig**: IntentSpbmGlobalSettingsConfig
- **IntentSpbmInstance**: IntentSpbmInstance
- **IntentVlanConfig**: IntentVlanConfig

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### AssetAccount
- `POST /retrieve-asset-account` - retrieveAssetAccount

### AssetAllOfLldpNeighborXmedInventory
- `POST /retrieve-asset-all-of-lldp-neighbor-xmed-inventory` - retrieveAssetAllOfLldpNeighborXmedInventory

### AssetAuthenticationConfig
- `POST /retrieve-asset-authentication-config` - retrieveAssetAuthenticationConfig

### AssetAuthenticationPortSettingConfig
- `POST /retrieve-asset-authentication-port-setting-config` - retrieveAssetAuthenticationPortSettingConfig

### AssetAuthenticationState
- `POST /retrieve-asset-authentication-state` - retrieveAssetAuthenticationState

### AssetAutoSenseFabricAttach
- `POST /retrieve-asset-auto-sense-fabric-attach` - retrieveAssetAutoSenseFabricAttach

### AssetAutoSenseGlobal
- `POST /retrieve-asset-auto-sense-global` - retrieveAssetAutoSenseGlobal

### AssetAutoSenseIsis
- `POST /retrieve-asset-auto-sense-isis` - retrieveAssetAutoSenseIsis

### AssetAutoSensePort
- `POST /retrieve-asset-auto-sense-port` - retrieveAssetAutoSensePort

### AssetCdpNeighbor
- `POST /retrieve-asset-cdp-neighbor` - retrieveAssetCdpNeighbor

### AssetCdpPortsConfig
- `POST /retrieve-asset-cdp-ports-config` - retrieveAssetCdpPortsConfig

### AssetDevice
- `POST /retrieve-asset-device` - retrieveAssetDevice

### AssetDeviceConnectionDetail
- `POST /retrieve-asset-device-connection-detail` - retrieveAssetDeviceConnectionDetail

### AssetDeviceConnectionDetailPhysicalStack
- `POST /retrieve-asset-device-connection-detail-physical-stack` - retrieveAssetDeviceConnectionDetailPhysicalStack

### AssetDeviceConnectionDetailStackInfo
- `POST /retrieve-asset-device-connection-detail-stack-info` - retrieveAssetDeviceConnectionDetailStackInfo

### AssetDhcpRelayVlanConfig
- `POST /retrieve-asset-dhcp-relay-vlan-config` - retrieveAssetDhcpRelayVlanConfig

### AssetDhcpRelayVlanServerConfig
- `POST /retrieve-asset-dhcp-relay-vlan-server-config` - retrieveAssetDhcpRelayVlanServerConfig

### AssetDhcpRelayVrfConfig
- `POST /retrieve-asset-dhcp-relay-vrf-config` - retrieveAssetDhcpRelayVrfConfig

### AssetDhcpRelayVrfServerConfig
- `POST /retrieve-asset-dhcp-relay-vrf-server-config` - retrieveAssetDhcpRelayVrfServerConfig

### AssetDhcpRelayVrfState
- `POST /retrieve-asset-dhcp-relay-vrf-state` - retrieveAssetDhcpRelayVrfState

### AssetDhcpSnoopConfig
- `POST /retrieve-asset-dhcp-snoop-config` - retrieveAssetDhcpSnoopConfig

### AssetDhcpSnoopDynamicVlansConfig
- `POST /retrieve-asset-dhcp-snoop-dynamic-vlans-config` - retrieveAssetDhcpSnoopDynamicVlansConfig

### AssetDhcpSnoopPortsConfig
- `POST /retrieve-asset-dhcp-snoop-ports-config` - retrieveAssetDhcpSnoopPortsConfig

### AssetDhcpSnoopVlansConfig
- `POST /retrieve-asset-dhcp-snoop-vlans-config` - retrieveAssetDhcpSnoopVlansConfig

### AssetDnsConfig
- `POST /retrieve-asset-dns-config` - retrieveAssetDnsConfig

### AssetDnsVrfServerConfig
- `POST /retrieve-asset-dns-vrf-server-config` - retrieveAssetDnsVrfServerConfig

### AssetElrpConfig
- `POST /retrieve-asset-elrp-config` - retrieveAssetElrpConfig

### AssetElrpDynamicVlanConfig
- `POST /retrieve-asset-elrp-dynamic-vlan-config` - retrieveAssetElrpDynamicVlanConfig

### AssetElrpVlanConfig
- `POST /retrieve-asset-elrp-vlan-config` - retrieveAssetElrpVlanConfig

### AssetFabricAttachConfig
- `POST /retrieve-asset-fabric-attach-config` - retrieveAssetFabricAttachConfig

### AssetFabricAttachConfigPort
- `POST /retrieve-asset-fabric-attach-config-port` - retrieveAssetFabricAttachConfigPort

### AssetFabricAttachConfigZeroTouchClient
- `POST /retrieve-asset-fabric-attach-config-zero-touch-client` - retrieveAssetFabricAttachConfigZeroTouchClient

### AssetFabricAttachState
- `POST /retrieve-asset-fabric-attach-state` - retrieveAssetFabricAttachState

### AssetFabricAttachStateDiscoveryElement
- `POST /retrieve-asset-fabric-attach-state-discovery-element` - retrieveAssetFabricAttachStateDiscoveryElement

### AssetFabricAttachStateVlanAssignment
- `POST /retrieve-asset-fabric-attach-state-vlan-assignment` - retrieveAssetFabricAttachStateVlanAssignment

### AssetFeTunnelConfig
- `POST /retrieve-asset-fe-tunnel-config` - retrieveAssetFeTunnelConfig

### AssetIgmpVlanConfig
- `POST /retrieve-asset-igmp-vlan-config` - retrieveAssetIgmpVlanConfig

### AssetIgmpVrConfig
- `POST /retrieve-asset-igmp-vr-config` - retrieveAssetIgmpVrConfig

### AssetInstantPortActionConfig
- `POST /retrieve-asset-instant-port-action-config` - retrieveAssetInstantPortActionConfig

### AssetInstantPortConfig
- `POST /retrieve-asset-instant-port-config` - retrieveAssetInstantPortConfig

### AssetInstantPortDeviceTypesConfig
- `POST /retrieve-asset-instant-port-device-types-config` - retrieveAssetInstantPortDeviceTypesConfig

### AssetInstantPortMatchConditionConfig
- `POST /retrieve-asset-instant-port-match-condition-config` - retrieveAssetInstantPortMatchConditionConfig

### AssetInstantPortProfileConfig
- `POST /retrieve-asset-instant-port-profile-config` - retrieveAssetInstantPortProfileConfig

### AssetInterIsisUnicastFibState
- `POST /retrieve-asset-inter-isis-unicast-fib-state` - retrieveAssetInterIsisUnicastFibState

### AssetInterface
- `POST /retrieve-asset-interface` - retrieveAssetInterface

### AssetInterfaceIpAddress
- `POST /retrieve-asset-interface-ip-address` - retrieveAssetInterfaceIpAddress

### AssetInterfaceVlanMap
- `POST /retrieve-asset-interface-vlan-map` - retrieveAssetInterfaceVlanMap

### AssetInterfaceVlanProperties
- `POST /retrieve-asset-interface-vlan-properties` - retrieveAssetInterfaceVlanProperties

### AssetIpArpState
- `POST /retrieve-asset-ip-arp-state` - retrieveAssetIpArpState

### AssetIsidMacFdbState
- `POST /retrieve-asset-isid-mac-fdb-state` - retrieveAssetIsidMacFdbState

### AssetIsisAdjacency
- `POST /retrieve-asset-isis-adjacency` - retrieveAssetIsisAdjacency

### AssetIsisCircuitConfig
- `POST /retrieve-asset-isis-circuit-config` - retrieveAssetIsisCircuitConfig

### AssetIsisCircuitSpbmSetting
- `POST /retrieve-asset-isis-circuit-spbm-setting` - retrieveAssetIsisCircuitSpbmSetting

### AssetIsisCircuitState
- `POST /retrieve-asset-isis-circuit-state` - retrieveAssetIsisCircuitState

### AssetIsisGlobalConfig
- `POST /retrieve-asset-isis-global-config` - retrieveAssetIsisGlobalConfig

### AssetIsisGlobalState
- `POST /retrieve-asset-isis-global-state` - retrieveAssetIsisGlobalState

### AssetIsisL2MultiAreaIsidList
- `POST /retrieve-asset-isis-l2-multi-area-isid-list` - retrieveAssetIsisL2MultiAreaIsidList

### AssetIsisL2RedistributeMultiAreaSnoop
- `POST /retrieve-asset-isis-l2-redistribute-multi-area-snoop` - retrieveAssetIsisL2RedistributeMultiAreaSnoop

### AssetIsisL3AcceptPolicyConfig
- `POST /retrieve-asset-isis-l3-accept-policy-config` - retrieveAssetIsisL3AcceptPolicyConfig

### AssetIsisL3Redistribute
- `POST /retrieve-asset-isis-l3-redistribute` - retrieveAssetIsisL3Redistribute

### AssetIsisL3RedistributeMultiAreaIsidRedist
- `POST /retrieve-asset-isis-l3-redistribute-multi-area-isid-redist` - retrieveAssetIsisL3RedistributeMultiAreaIsidRedist

### AssetIsisLspState
- `POST /retrieve-asset-isis-lsp-state` - retrieveAssetIsisLspState

### AssetIsisMulticastFibState
- `POST /retrieve-asset-isis-multicast-fib-state` - retrieveAssetIsisMulticastFibState

### AssetIsisMulticastRouteState
- `POST /retrieve-asset-isis-multicast-route-state` - retrieveAssetIsisMulticastRouteState

### AssetIsisRedistributeMultiArea
- `POST /retrieve-asset-isis-redistribute-multi-area` - retrieveAssetIsisRedistributeMultiArea

### AssetIsisRedistributeMultiAreaStaticIsid
- `POST /retrieve-asset-isis-redistribute-multi-area-static-isid` - retrieveAssetIsisRedistributeMultiAreaStaticIsid

### AssetIsisUnicastFibState
- `POST /retrieve-asset-isis-unicast-fib-state` - retrieveAssetIsisUnicastFibState

### AssetL2VsnCvlanConfig
- `POST /retrieve-asset-l2-vsn-cvlan-config` - retrieveAssetL2VsnCvlanConfig

### AssetL2VsnSuniConfig
- `POST /retrieve-asset-l2-vsn-suni-config` - retrieveAssetL2VsnSuniConfig

### AssetL2VsnSuniConfigEndPoint
- `POST /retrieve-asset-l2-vsn-suni-config-end-point` - retrieveAssetL2VsnSuniConfigEndPoint

### AssetL2VsnSuniState
- `POST /retrieve-asset-l2-vsn-suni-state` - retrieveAssetL2VsnSuniState

### AssetL2VsnSuniStateMemberIntfs
- `POST /retrieve-asset-l2-vsn-suni-state-member-intfs` - retrieveAssetL2VsnSuniStateMemberIntfs

### AssetL2VsnTuniConfig
- `POST /retrieve-asset-l2-vsn-tuni-config` - retrieveAssetL2VsnTuniConfig

### AssetL2VsnTuniConfigMemberIntf
- `POST /retrieve-asset-l2-vsn-tuni-config-member-intf` - retrieveAssetL2VsnTuniConfigMemberIntf

### AssetL3VsnConfig
- `POST /retrieve-asset-l3-vsn-config` - retrieveAssetL3VsnConfig

### AssetL3VsnIsidListConfig
- `POST /retrieve-asset-l3-vsn-isid-list-config` - retrieveAssetL3VsnIsidListConfig

### AssetLagConfig
- `POST /retrieve-asset-lag-config` - retrieveAssetLagConfig

### AssetLagConfigMemberPort
- `POST /retrieve-asset-lag-config-member-port` - retrieveAssetLagConfigMemberPort

### AssetLagState
- `POST /retrieve-asset-lag-state` - retrieveAssetLagState

### AssetLagStateMemberPort
- `POST /retrieve-asset-lag-state-member-port` - retrieveAssetLagStateMemberPort

### AssetLldpConfig
- `POST /retrieve-asset-lldp-config` - retrieveAssetLldpConfig

### AssetLldpDot1PortProtocolVlan
- `POST /retrieve-asset-lldp-dot1-port-protocol-vlan` - retrieveAssetLldpDot1PortProtocolVlan

### AssetLldpDot1VlanObject
- `POST /retrieve-asset-lldp-dot1-vlan-object` - retrieveAssetLldpDot1VlanObject

### AssetLldpNeighborFabricAttach
- `POST /retrieve-asset-lldp-neighbor-fabric-attach` - retrieveAssetLldpNeighborFabricAttach

### AssetLldpNeighborFabricAttachVlanIsidMap
- `POST /retrieve-asset-lldp-neighbor-fabric-attach-vlan-isid-map` - retrieveAssetLldpNeighborFabricAttachVlanIsidMap

### AssetLldpNeighborManagementAddressList
- `POST /retrieve-asset-lldp-neighbor-management-address-list` - retrieveAssetLldpNeighborManagementAddressList

### AssetLldpNeighborState
- `POST /retrieve-asset-lldp-neighbor-state` - retrieveAssetLldpNeighborState

### AssetLldpNeighborXmed
- `POST /retrieve-asset-lldp-neighbor-xmed` - retrieveAssetLldpNeighborXmed

### AssetLldpNeighborXmedPoePd
- `POST /retrieve-asset-lldp-neighbor-xmed-poe-pd` - retrieveAssetLldpNeighborXmedPoePd

### AssetLldpNeighborXmedPoePse
- `POST /retrieve-asset-lldp-neighbor-xmed-poe-pse` - retrieveAssetLldpNeighborXmedPoePse

### AssetLldpNeighborXmedPolicy
- `POST /retrieve-asset-lldp-neighbor-xmed-policy` - retrieveAssetLldpNeighborXmedPolicy

### AssetLldpNeighborZtf
- `POST /retrieve-asset-lldp-neighbor-ztf` - retrieveAssetLldpNeighborZtf

### AssetLldpNeighborZtfTunnelGroup
- `POST /retrieve-asset-lldp-neighbor-ztf-tunnel-group` - retrieveAssetLldpNeighborZtfTunnelGroup

### AssetLldpPortAdvertiseSettingsConfig
- `POST /retrieve-asset-lldp-port-advertise-settings-config` - retrieveAssetLldpPortAdvertiseSettingsConfig

### AssetLldpPortConfig
- `POST /retrieve-asset-lldp-port-config` - retrieveAssetLldpPortConfig

### AssetLldpPortMedPolicySettingsConfig
- `POST /retrieve-asset-lldp-port-med-policy-settings-config` - retrieveAssetLldpPortMedPolicySettingsConfig

### AssetLocation
- `POST /retrieve-asset-location` - retrieveAssetLocation

### AssetMacLockingConfig
- `POST /retrieve-asset-mac-locking-config` - retrieveAssetMacLockingConfig

### AssetMlagPeerConfig
- `POST /retrieve-asset-mlag-peer-config` - retrieveAssetMlagPeerConfig

### AssetMlagPeerCounters
- `POST /retrieve-asset-mlag-peer-counters` - retrieveAssetMlagPeerCounters

### AssetMlagPeerState
- `POST /retrieve-asset-mlag-peer-state` - retrieveAssetMlagPeerState

### AssetMlagPortState
- `POST /retrieve-asset-mlag-port-state` - retrieveAssetMlagPortState

### AssetMulticastFibInterface
- `POST /retrieve-asset-multicast-fib-interface` - retrieveAssetMulticastFibInterface

### AssetNeighDiscState
- `POST /retrieve-asset-neigh-disc-state` - retrieveAssetNeighDiscState

### AssetNetworkToNetworkInterface
- `POST /retrieve-asset-network-to-network-interface` - retrieveAssetNetworkToNetworkInterface

### AssetNodeAliasConfig
- `POST /retrieve-asset-node-alias-config` - retrieveAssetNodeAliasConfig

### AssetNodeAliasPortConfig
- `POST /retrieve-asset-node-alias-port-config` - retrieveAssetNodeAliasPortConfig

### AssetNtpConfig
- `POST /retrieve-asset-ntp-config` - retrieveAssetNtpConfig

### AssetNtpServerConfig
- `POST /retrieve-asset-ntp-server-config` - retrieveAssetNtpServerConfig

### AssetPoePowerConfig
- `POST /retrieve-asset-poe-power-config` - retrieveAssetPoePowerConfig

### AssetPoePowerPortsConfig
- `POST /retrieve-asset-poe-power-ports-config` - retrieveAssetPoePowerPortsConfig

### AssetPoePowerPortsState
- `POST /retrieve-asset-poe-power-ports-state` - retrieveAssetPoePowerPortsState

### AssetPoePowerSlotSettingsConfig
- `POST /retrieve-asset-poe-power-slot-settings-config` - retrieveAssetPoePowerSlotSettingsConfig

### AssetPolicyGlobal
- `POST /retrieve-asset-policy-global` - retrieveAssetPolicyGlobal

### AssetPortCapabilities
- `POST /retrieve-asset-port-capabilities` - retrieveAssetPortCapabilities

### AssetPortConfig
- `POST /retrieve-asset-port-config` - retrieveAssetPortConfig

### AssetPortLldpLocation
- `POST /retrieve-asset-port-lldp-location` - retrieveAssetPortLldpLocation

### AssetPortMacLockingConfig
- `POST /retrieve-asset-port-mac-locking-config` - retrieveAssetPortMacLockingConfig

### AssetPortState
- `POST /retrieve-asset-port-state` - retrieveAssetPortState

### AssetPortsGlobalConfig
- `POST /retrieve-asset-ports-global-config` - retrieveAssetPortsGlobalConfig

### AssetRadiusServerConfig
- `POST /retrieve-asset-radius-server-config` - retrieveAssetRadiusServerConfig

### AssetRadiusServerHostConfig
- `POST /retrieve-asset-radius-server-host-config` - retrieveAssetRadiusServerHostConfig

### AssetRadiusServerSecureProfilesConfig
- `POST /retrieve-asset-radius-server-secure-profiles-config` - retrieveAssetRadiusServerSecureProfilesConfig

### AssetRsmltLocalInstanceState
- `POST /retrieve-asset-rsmlt-local-instance-state` - retrieveAssetRsmltLocalInstanceState

### AssetRsmltRemoteInstanceState
- `POST /retrieve-asset-rsmlt-remote-instance-state` - retrieveAssetRsmltRemoteInstanceState

### AssetRsmltVlanInstanceConfig
- `POST /retrieve-asset-rsmlt-vlan-instance-config` - retrieveAssetRsmltVlanInstanceConfig

### AssetSlot
- `POST /retrieve-asset-slot` - retrieveAssetSlot

### AssetSlppConfig
- `POST /retrieve-asset-slpp-config` - retrieveAssetSlppConfig

### AssetSlppPortConfig
- `POST /retrieve-asset-slpp-port-config` - retrieveAssetSlppPortConfig

### AssetSlppVlanConfig
- `POST /retrieve-asset-slpp-vlan-config` - retrieveAssetSlppVlanConfig

### AssetSnmpAccessConfig
- `POST /retrieve-asset-snmp-access-config` - retrieveAssetSnmpAccessConfig

### AssetSnmpGlobalConfig
- `POST /retrieve-asset-snmp-global-config` - retrieveAssetSnmpGlobalConfig

### AssetSnmpGroupConfig
- `POST /retrieve-asset-snmp-group-config` - retrieveAssetSnmpGroupConfig

### AssetSnmpTrapReceiverConfig
- `POST /retrieve-asset-snmp-trap-receiver-config` - retrieveAssetSnmpTrapReceiverConfig

### AssetSnmpV1V2Config
- `POST /retrieve-asset-snmp-v1-v2-config` - retrieveAssetSnmpV1V2Config

### AssetSnmpV3AccessConfig
- `POST /retrieve-asset-snmp-v3-access-config` - retrieveAssetSnmpV3AccessConfig

### AssetSnmpV3Config
- `POST /retrieve-asset-snmp-v3-config` - retrieveAssetSnmpV3Config

### AssetSnmpV3TrapReceiverConfig
- `POST /retrieve-asset-snmp-v3-trap-receiver-config` - retrieveAssetSnmpV3TrapReceiverConfig

### AssetSnmpViewConfig
- `POST /retrieve-asset-snmp-view-config` - retrieveAssetSnmpViewConfig

### AssetSntpConfig
- `POST /retrieve-asset-sntp-config` - retrieveAssetSntpConfig

### AssetSntpServerConfig
- `POST /retrieve-asset-sntp-server-config` - retrieveAssetSntpServerConfig

### AssetSpbmCfmGlobal
- `POST /retrieve-asset-spbm-cfm-global` - retrieveAssetSpbmCfmGlobal

### AssetSpbmGlobalSettingsConfig
- `POST /retrieve-asset-spbm-global-settings-config` - retrieveAssetSpbmGlobalSettingsConfig

### AssetSpbmInstance
- `POST /retrieve-asset-spbm-instance` - retrieveAssetSpbmInstance

### AssetSsidConfig
- `POST /retrieve-asset-ssid-config` - retrieveAssetSsidConfig

### AssetSsidState
- `POST /retrieve-asset-ssid-state` - retrieveAssetSsidState

### AssetStormControlPortConfig
- `POST /retrieve-asset-storm-control-port-config` - retrieveAssetStormControlPortConfig

### AssetStpDomainState
- `POST /retrieve-asset-stp-domain-state` - retrieveAssetStpDomainState

### AssetStpGlobalConfig
- `POST /retrieve-asset-stp-global-config` - retrieveAssetStpGlobalConfig

### AssetStpInterfaceSettingsConfig
- `POST /retrieve-asset-stp-interface-settings-config` - retrieveAssetStpInterfaceSettingsConfig

### AssetStpPortStateEntry
- `POST /retrieve-asset-stp-port-state-entry` - retrieveAssetStpPortStateEntry

### AssetStpProtocolSettingsConfig
- `POST /retrieve-asset-stp-protocol-settings-config` - retrieveAssetStpProtocolSettingsConfig

### AssetStpVlanSettingsConfig
- `POST /retrieve-asset-stp-vlan-settings-config` - retrieveAssetStpVlanSettingsConfig

### AssetSysCapabilities
- `POST /retrieve-asset-sys-capabilities` - retrieveAssetSysCapabilities

### AssetSyslogConfig
- `POST /retrieve-asset-syslog-config` - retrieveAssetSyslogConfig

### AssetSyslogServerConfig
- `POST /retrieve-asset-syslog-server-config` - retrieveAssetSyslogServerConfig

### AssetSystemSettings
- `POST /retrieve-asset-system-settings` - retrieveAssetSystemSettings

### AssetTimeZoneConfig
- `POST /retrieve-asset-time-zone-config` - retrieveAssetTimeZoneConfig

### AssetUrlCapabilities
- `POST /retrieve-asset-url-capabilities` - retrieveAssetUrlCapabilities

### AssetVim
- `POST /retrieve-asset-vim` - retrieveAssetVim

### AssetVlanConfig
- `POST /retrieve-asset-vlan-config` - retrieveAssetVlanConfig

### AssetVlanConfigIpArpLearnFrom
- `POST /retrieve-asset-vlan-config-ip-arp-learn-from` - retrieveAssetVlanConfigIpArpLearnFrom

### AssetVlanMacFdbState
- `POST /retrieve-asset-vlan-mac-fdb-state` - retrieveAssetVlanMacFdbState

### AssetVlanState
- `POST /retrieve-asset-vlan-state` - retrieveAssetVlanState

### AssetVlanStateMemberInterfaces
- `POST /retrieve-asset-vlan-state-member-interfaces` - retrieveAssetVlanStateMemberInterfaces

### AssetVrfConfig
- `POST /retrieve-asset-vrf-config` - retrieveAssetVrfConfig

### AssetVrfProtectedRouteGateway
- `POST /retrieve-asset-vrf-protected-route-gateway` - retrieveAssetVrfProtectedRouteGateway

### AssetVrfRouteConfig
- `POST /retrieve-asset-vrf-route-config` - retrieveAssetVrfRouteConfig

### AssetVrfRouteState
- `POST /retrieve-asset-vrf-route-state` - retrieveAssetVrfRouteState

### AssetVrfState
- `POST /retrieve-asset-vrf-state` - retrieveAssetVrfState

### AssetVrfVlanConfig
- `POST /retrieve-asset-vrf-vlan-config` - retrieveAssetVrfVlanConfig

### AssetVrrpConfig
- `POST /retrieve-asset-vrrp-config` - retrieveAssetVrrpConfig

### AssetVrrpState
- `POST /retrieve-asset-vrrp-state` - retrieveAssetVrrpState

### AssetVrrpVirtualIpAddressConfig
- `POST /retrieve-asset-vrrp-virtual-ip-address-config` - retrieveAssetVrrpVirtualIpAddressConfig

### AssetVrrpVirtualIpAddressState
- `POST /retrieve-asset-vrrp-virtual-ip-address-state` - retrieveAssetVrrpVirtualIpAddressState

### AssetWirelessInterface
- `POST /retrieve-asset-wireless-interface` - retrieveAssetWirelessInterface

### AssetWirelessInterfaceState
- `POST /retrieve-asset-wireless-interface-state` - retrieveAssetWirelessInterfaceState

### InferredArea
- `POST /retrieve-inferred-area` - retrieveInferredArea

### InferredBoundaryDetails
- `POST /retrieve-inferred-boundary-details` - retrieveInferredBoundaryDetails

### InferredCluster
- `POST /retrieve-inferred-cluster` - retrieveInferredCluster

### InferredCustomerVlanUni
- `POST /retrieve-inferred-customer-vlan-uni` - retrieveInferredCustomerVlanUni

### InferredDevice
- `POST /retrieve-inferred-device` - retrieveInferredDevice

### InferredDeviceFaDetail
- `POST /retrieve-inferred-device-fa-detail` - retrieveInferredDeviceFaDetail

### InferredDeviceSpbmDetail
- `POST /retrieve-inferred-device-spbm-detail` - retrieveInferredDeviceSpbmDetail

### InferredDiscoveryStatusError
- `POST /retrieve-inferred-discovery-status-error` - retrieveInferredDiscoveryStatusError

### InferredFabric
- `POST /retrieve-inferred-fabric` - retrieveInferredFabric

### InferredFabricAttachDomain
- `POST /retrieve-inferred-fabric-attach-domain` - retrieveInferredFabricAttachDomain

### InferredFabricAttachPort
- `POST /retrieve-inferred-fabric-attach-port` - retrieveInferredFabricAttachPort

### InferredFabricAttachVlan
- `POST /retrieve-inferred-fabric-attach-vlan` - retrieveInferredFabricAttachVlan

### InferredFabricLink
- `POST /retrieve-inferred-fabric-link` - retrieveInferredFabricLink

### InferredFabricLinkFaDetail
- `POST /retrieve-inferred-fabric-link-fa-detail` - retrieveInferredFabricLinkFaDetail

### InferredFabricTopology
- `POST /retrieve-inferred-fabric-topology` - retrieveInferredFabricTopology

### InferredGlobalSpbmDetails
- `POST /retrieve-inferred-global-spbm-details` - retrieveInferredGlobalSpbmDetails

### InferredGroupInfo
- `POST /retrieve-inferred-group-info` - retrieveInferredGroupInfo

### InferredInterface
- `POST /retrieve-inferred-interface` - retrieveInferredInterface

### InferredInterfaceVlanMap
- `POST /retrieve-inferred-interface-vlan-map` - retrieveInferredInterfaceVlanMap

### InferredIsisDetails
- `POST /retrieve-inferred-isis-details` - retrieveInferredIsisDetails

### InferredIsisRemoteDetails
- `POST /retrieve-inferred-isis-remote-details` - retrieveInferredIsisRemoteDetails

### InferredL2Access
- `POST /retrieve-inferred-l2-access` - retrieveInferredL2Access

### InferredL2Service
- `POST /retrieve-inferred-l2-service` - retrieveInferredL2Service

### InferredL2ServiceEndPoint
- `POST /retrieve-inferred-l2-service-end-point` - retrieveInferredL2ServiceEndPoint

### InferredL3Access
- `POST /retrieve-inferred-l3-access` - retrieveInferredL3Access

### InferredL3GatewayInterface
- `POST /retrieve-inferred-l3-gateway-interface` - retrieveInferredL3GatewayInterface

### InferredL3Service
- `POST /retrieve-inferred-l3-service` - retrieveInferredL3Service

### InferredL3ServiceEndPoint
- `POST /retrieve-inferred-l3-service-end-point` - retrieveInferredL3ServiceEndPoint

### InferredLag
- `POST /retrieve-inferred-lag` - retrieveInferredLag

### InferredLldpEdgeDeviceGrouping
- `POST /retrieve-inferred-lldp-edge-device-grouping` - retrieveInferredLldpEdgeDeviceGrouping

### InferredPhysicalLink
- `POST /retrieve-inferred-physical-link` - retrieveInferredPhysicalLink

### InferredPhysicalTopology
- `POST /retrieve-inferred-physical-topology` - retrieveInferredPhysicalTopology

### InferredPort
- `POST /retrieve-inferred-port` - retrieveInferredPort

### InferredPortErrorStats
- `POST /retrieve-inferred-port-error-stats` - retrieveInferredPortErrorStats

### InferredPortInOutStats
- `POST /retrieve-inferred-port-in-out-stats` - retrieveInferredPortInOutStats

### InferredPortLagMemberMap
- `POST /retrieve-inferred-port-lag-member-map` - retrieveInferredPortLagMemberMap

### InferredPortUtilizationInfo
- `POST /retrieve-inferred-port-utilization-info` - retrieveInferredPortUtilizationInfo

### InferredPrimaryPrivateVlan
- `POST /retrieve-inferred-primary-private-vlan` - retrieveInferredPrimaryPrivateVlan

### InferredPrivateVlanDomain
- `POST /retrieve-inferred-private-vlan-domain` - retrieveInferredPrivateVlanDomain

### InferredPrivateVlanInterface
- `POST /retrieve-inferred-private-vlan-interface` - retrieveInferredPrivateVlanInterface

### InferredSecondaryPrivateVlan
- `POST /retrieve-inferred-secondary-private-vlan` - retrieveInferredSecondaryPrivateVlan

### InferredSlot
- `POST /retrieve-inferred-slot` - retrieveInferredSlot

### InferredSwitchedVlanUni
- `POST /retrieve-inferred-switched-vlan-uni` - retrieveInferredSwitchedVlanUni

### InferredTag
- `POST /retrieve-inferred-tag` - retrieveInferredTag

### InferredTagCriteria
- `POST /retrieve-inferred-tag-criteria` - retrieveInferredTagCriteria

### InferredTagElement
- `POST /retrieve-inferred-tag-element` - retrieveInferredTagElement

### InferredTagOuterElement
- `POST /retrieve-inferred-tag-outer-element` - retrieveInferredTagOuterElement

### InferredTransparentVlanUni
- `POST /retrieve-inferred-transparent-vlan-uni` - retrieveInferredTransparentVlanUni

### InferredUserLink
- `POST /retrieve-inferred-user-link` - retrieveInferredUserLink

### InferredVlan
- `POST /retrieve-inferred-vlan` - retrieveInferredVlan

### InferredVlanService
- `POST /retrieve-inferred-vlan-service` - retrieveInferredVlanService

### InferredVrf
- `POST /retrieve-inferred-vrf` - retrieveInferredVrf

### InferredVrfService
- `POST /retrieve-inferred-vrf-service` - retrieveInferredVrfService

### InferredVrrpInstance
- `POST /retrieve-inferred-vrrp-instance` - retrieveInferredVrrpInstance

### InferredWirelessInterface
- `POST /retrieve-inferred-wireless-interface` - retrieveInferredWirelessInterface

### InferredWirelessInterfaceErrorStats
- `POST /retrieve-inferred-wireless-interface-error-stats` - retrieveInferredWirelessInterfaceErrorStats

### InferredWirelessInterfaceInOutStats
- `POST /retrieve-inferred-wireless-interface-in-out-stats` - retrieveInferredWirelessInterfaceInOutStats

### InferredWirelessInterfaceUtilizationInfo
- `POST /retrieve-inferred-wireless-interface-utilization-info` - retrieveInferredWirelessInterfaceUtilizationInfo

### IntentAutoSenseFabricAttach
- `POST /retrieve-intent-auto-sense-fabric-attach` - retrieveIntentAutoSenseFabricAttach

### IntentAutoSenseGlobal
- `POST /retrieve-intent-auto-sense-global` - retrieveIntentAutoSenseGlobal

### IntentAutoSenseIsis
- `POST /retrieve-intent-auto-sense-isis` - retrieveIntentAutoSenseIsis

### IntentDevice
- `POST /retrieve-intent-device` - retrieveIntentDevice

### IntentIsisCircuitConfig
- `POST /retrieve-intent-isis-circuit-config` - retrieveIntentIsisCircuitConfig

### IntentIsisCircuitSpbmSetting
- `POST /retrieve-intent-isis-circuit-spbm-setting` - retrieveIntentIsisCircuitSpbmSetting

### IntentIsisGlobalConfig
- `POST /retrieve-intent-isis-global-config` - retrieveIntentIsisGlobalConfig

### IntentL2VsnCvlanConfig
- `POST /retrieve-intent-l2-vsn-cvlan-config` - retrieveIntentL2VsnCvlanConfig

### IntentL2VsnSuniConfig
- `POST /retrieve-intent-l2-vsn-suni-config` - retrieveIntentL2VsnSuniConfig

### IntentL2VsnTuniConfig
- `POST /retrieve-intent-l2-vsn-tuni-config` - retrieveIntentL2VsnTuniConfig

### IntentSpbmGlobalSettingsConfig
- `POST /retrieve-intent-spbm-global-settings-config` - retrieveIntentSpbmGlobalSettingsConfig

### IntentSpbmInstance
- `POST /retrieve-intent-spbm-instance` - retrieveIntentSpbmInstance

### IntentVlanConfig
- `POST /retrieve-intent-vlan-config` - retrieveIntentVlanConfig

## Support

For questions or support, contact:
- **Name**: Extreme Networks Platform Team
- **URL**: https://www.extremenetworks.com
- **Email**: platform-team@extremenetworks.com

## License

Apache License 2.0
