/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const MenuItemExit: typeof import('./composables/tray')['MenuItemExit']
  const MenuItemShow: typeof import('./composables/tray')['MenuItemShow']
  const ReinitTray: typeof import('./composables/tray')['ReinitTray']
  const acceptHMRUpdate: typeof import('pinia')['acceptHMRUpdate']
  const collectNetworkInfos: typeof import('./composables/network')['collectNetworkInfos']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createPinia: typeof import('pinia')['createPinia']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const definePage: typeof import('unplugin-vue-router/runtime')['definePage']
  const defineStore: typeof import('pinia')['defineStore']
  const effectScope: typeof import('vue')['effectScope']
  const generateMenuItem: typeof import('./composables/tray')['generateMenuItem']
  const getActivePinia: typeof import('pinia')['getActivePinia']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getEasytierVersion: typeof import('./composables/network')['getEasytierVersion']
  const getOsHostname: typeof import('./composables/network')['getOsHostname']
  const h: typeof import('vue')['h']
  const initMobileService: typeof import('./composables/mobile_vpn')['initMobileService']
  const initMobileVpnService: typeof import('./composables/mobile_vpn')['initMobileVpnService']
  const inject: typeof import('vue')['inject']
  const isAutostart: typeof import('./composables/network')['isAutostart']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const loadRunningInstanceIdsFromLocalStorage: typeof import('./stores/network')['loadRunningInstanceIdsFromLocalStorage']
  const mapActions: typeof import('pinia')['mapActions']
  const mapGetters: typeof import('pinia')['mapGetters']
  const mapState: typeof import('pinia')['mapState']
  const mapStores: typeof import('pinia')['mapStores']
  const mapWritableState: typeof import('pinia')['mapWritableState']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const parseNetworkConfig: typeof import('./composables/network')['parseNetworkConfig']
  const prepareVpnService: typeof import('./composables/mobile_vpn')['prepareVpnService']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const retainNetworkInstance: typeof import('./composables/network')['retainNetworkInstance']
  const runNetworkInstance: typeof import('./composables/network')['runNetworkInstance']
  const setActivePinia: typeof import('pinia')['setActivePinia']
  const setAutoLaunchStatus: typeof import('./composables/network')['setAutoLaunchStatus']
  const setLoggingLevel: typeof import('./composables/network')['setLoggingLevel']
  const setMapStoreSuffix: typeof import('pinia')['setMapStoreSuffix']
  const setTrayMenu: typeof import('./composables/tray')['setTrayMenu']
  const setTrayRunState: typeof import('./composables/tray')['setTrayRunState']
  const setTrayTooltip: typeof import('./composables/tray')['setTrayTooltip']
  const setTunFd: typeof import('./composables/network')['setTunFd']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const storeToRefs: typeof import('pinia')['storeToRefs']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const useLink: typeof import('vue-router/auto')['useLink']
  const useNetworkStore: typeof import('./stores/network')['useNetworkStore']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useTray: typeof import('./composables/tray')['useTray']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, VNode, WritableComputedRef } from 'vue'
  import('vue')
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly MenuItemExit: UnwrapRef<typeof import('./composables/tray')['MenuItemExit']>
    readonly MenuItemShow: UnwrapRef<typeof import('./composables/tray')['MenuItemShow']>
    readonly acceptHMRUpdate: UnwrapRef<typeof import('pinia')['acceptHMRUpdate']>
    readonly collectNetworkInfos: UnwrapRef<typeof import('./composables/network')['collectNetworkInfos']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly createPinia: UnwrapRef<typeof import('pinia')['createPinia']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly defineStore: UnwrapRef<typeof import('pinia')['defineStore']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly generateMenuItem: UnwrapRef<typeof import('./composables/tray')['generateMenuItem']>
    readonly getActivePinia: UnwrapRef<typeof import('pinia')['getActivePinia']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly getEasytierVersion: UnwrapRef<typeof import('./composables/network')['getEasytierVersion']>
    readonly getOsHostname: UnwrapRef<typeof import('./composables/network')['getOsHostname']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly initMobileVpnService: UnwrapRef<typeof import('./composables/mobile_vpn')['initMobileVpnService']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isAutostart: UnwrapRef<typeof import('./composables/network')['isAutostart']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly mapActions: UnwrapRef<typeof import('pinia')['mapActions']>
    readonly mapGetters: UnwrapRef<typeof import('pinia')['mapGetters']>
    readonly mapState: UnwrapRef<typeof import('pinia')['mapState']>
    readonly mapStores: UnwrapRef<typeof import('pinia')['mapStores']>
    readonly mapWritableState: UnwrapRef<typeof import('pinia')['mapWritableState']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly parseNetworkConfig: UnwrapRef<typeof import('./composables/network')['parseNetworkConfig']>
    readonly prepareVpnService: UnwrapRef<typeof import('./composables/mobile_vpn')['prepareVpnService']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly retainNetworkInstance: UnwrapRef<typeof import('./composables/network')['retainNetworkInstance']>
    readonly runNetworkInstance: UnwrapRef<typeof import('./composables/network')['runNetworkInstance']>
    readonly setActivePinia: UnwrapRef<typeof import('pinia')['setActivePinia']>
    readonly setLoggingLevel: UnwrapRef<typeof import('./composables/network')['setLoggingLevel']>
    readonly setMapStoreSuffix: UnwrapRef<typeof import('pinia')['setMapStoreSuffix']>
    readonly setTrayMenu: UnwrapRef<typeof import('./composables/tray')['setTrayMenu']>
    readonly setTrayRunState: UnwrapRef<typeof import('./composables/tray')['setTrayRunState']>
    readonly setTrayTooltip: UnwrapRef<typeof import('./composables/tray')['setTrayTooltip']>
    readonly setTunFd: UnwrapRef<typeof import('./composables/network')['setTunFd']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly storeToRefs: UnwrapRef<typeof import('pinia')['storeToRefs']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useI18n: UnwrapRef<typeof import('vue-i18n')['useI18n']>
    readonly useLink: UnwrapRef<typeof import('vue-router/auto')['useLink']>
    readonly useNetworkStore: UnwrapRef<typeof import('./stores/network')['useNetworkStore']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useTray: UnwrapRef<typeof import('./composables/tray')['useTray']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
