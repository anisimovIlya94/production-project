import { buildSelector } from "@/shared/store/buildSelector"

export const [useCounterValue, getCounterValue] = buildSelector(state => state.counter.value)