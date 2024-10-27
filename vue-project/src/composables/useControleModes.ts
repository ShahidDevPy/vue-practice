import { ref, reactive } from 'vue';
export enum ReserveOfferControlMode {
  AGC = "AGC",
  Manual = "MANUAL",
  Governor = "GOVERNOR",
}

export const getControlModeOptions = (
  controlModes: ReserveOfferControlMode[]
) => {
  return controlModes.map((mode) => ({
    label: mode.charAt(0).toUpperCase() + mode.slice(1),
    value: mode,
  }));
};

export const useControlModes = () => {
  const controlModes = reactive({
    contingency: {
      modes: ref<ReserveOfferControlMode[]>([]),
      defaultMode: ref<ReserveOfferControlMode>(null),
      maxCapability: ref<number>(null),
      maxBlocks: ref<number>(null),
      visibleBlocks: ref<number>(null),
      gateClosure: ref<number>(null),
    },
    dispatchable: {
      modes: ref<ReserveOfferControlMode[]>([]),
      defaultMode: ref<ReserveOfferControlMode>(null),
      maxCapability: ref<number>(null),
      maxBlocks: ref<number>(null),
      visibleBlocks: ref<number>(null),
      gateClosure: ref<number>(null),
    },
    regulating: {
      modes: ref<ReserveOfferControlMode[]>([]),
      defaultMode: ref<ReserveOfferControlMode>(null),
      maxCapability: ref<number>(null),
      maxBlocks: ref<number>(null),
      visibleBlocks: ref<number>(null),
      gateClosure: ref<number>(null),
    }
  });

  return {
    controlModes
  };
};
