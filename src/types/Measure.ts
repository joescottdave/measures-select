import { Parameter, PeriodName, Qualifier, ValueType } from "."

export interface Measure {
  '@id': string
  parameter: Parameter
  period?: number
  valueType: ValueType
  qualifier?: Qualifier
  periodName?: PeriodName
  label: string
  notation: string
  unitName?: string
}
