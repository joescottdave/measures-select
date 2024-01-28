import { Measure } from "../types"

export type Measures = Measure[]

export interface MeasureOptions {
  parameter?: Measure['parameter']
  valueType?: Measure['valueType']
  qualifier?: Measure['qualifier']
  period?: Measure['period']
}

export default class MeasuresSelect {
  private readonly measures: Measures
  private static readonly _DEFAULT_MEASURE_OPTIONS: MeasureOptions[] = [
    { qualifier: 'Groundwater Logged' },
    { qualifier: 'Groundwater Dipped' },
    { parameter: 'DISSOLVED OXYGEN' },
    { parameter: 'rainfall', period: 84600 },
    { parameter: 'flow', valueType: 'mean' },
    { parameter: 'level', valueType: 'instantaneous' }
  ]

  static from (measures: Measures, options: MeasureOptions = {}) {
    return new MeasuresSelect(measures)
      .byQualifier(options.qualifier)
      .byParameter(options.parameter)
      .byValueType(options.valueType)
      .byPeriod(options.period)
  }

  static default (measures: Measures) {
    let result: Measure | undefined

    for (const options of this._DEFAULT_MEASURE_OPTIONS) {
      if (MeasuresSelect.from(measures, options).first() != null) {
        result = MeasuresSelect.from(measures, options).first()
      }
    }

    return result
  }

  constructor (measures: Measures) {
    this.measures = measures
  }

  first() {
    return this.measures[0]
  }

  all() {
    return this.measures
  }

  byPeriod(period: Measure['period'] | undefined) {
    return period === undefined
      ? this
      : new MeasuresSelect(this.measures.filter(measure => measure.period === period))
  }

  byValueType(valueType: Measure['valueType'] | undefined) {
    return valueType === undefined
      ? this
      : new MeasuresSelect(this.measures.filter(measure => measure.valueType === valueType))
  }

  byParameter (parameter: Measure['parameter'] | undefined) {
    return parameter === undefined
      ? this
      : new MeasuresSelect(this.measures.filter(measure => measure.parameter === parameter))
  }

  byQualifier (qualifier: Measure['qualifier'] | undefined) {
    return qualifier === undefined
      ? this
      : new MeasuresSelect(this.measures.filter(measure => measure.qualifier === qualifier))
  }
}
