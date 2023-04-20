export interface Measure {
  '@id': string
  parameter: 'level' | 'flow' | 'rainfall' | 'DISSOLVED OXYGEN'
  period?: number
  valueType: 'instantaneous' | 'mean' | 'max' | 'min'
  qualifier?: 'Groundwater Logged' | 'Groundwater Dipped'
}

export type Measures = Measure[]

export interface MeasureOptions {
  parameter?: Measure['parameter']
  valueType?: Measure['valueType']
  qualifier?: Measure['qualifier']
  period?: Measure['period']
}

export default class MeasuresSelect {
  private readonly measures: Measures

  static from (measures: Measures, options: MeasureOptions = {}) {
    return new MeasuresSelect(measures)
      .byQualifier(options.qualifier)
      .byParameter(options.parameter)
      .byValueType(options.valueType)
      .byPeriod(options.period)
  }

  constructor (measures: Measures) {
    this.measures = measures
  }

  default () {
    let result

    if (MeasuresSelect.from(this.measures, { qualifier: 'Groundwater Logged' }).first() !== undefined) {
      result = MeasuresSelect.from(this.measures, { qualifier: 'Groundwater Logged' }).first()
    } else if (MeasuresSelect.from(this.measures, { qualifier: 'Groundwater Dipped' }).first() !== undefined) {
      result = MeasuresSelect.from(this.measures, { qualifier: 'Groundwater Dipped' }).first()
    } else if (MeasuresSelect.from(this.measures, { parameter: 'DISSOLVED OXYGEN' }).first() !== undefined) {
      result = MeasuresSelect.from(this.measures, { parameter: 'DISSOLVED OXYGEN' }).first()
    } else if (MeasuresSelect.from(this.measures, { parameter: 'rainfall', period: 86400 }).first() !== undefined) {
      result = MeasuresSelect.from(this.measures, { parameter: 'rainfall', period: 86400 }).first()
    } else if (MeasuresSelect.from(this.measures, { parameter: 'flow' }).first() !== undefined) {
      result = MeasuresSelect.from(this.measures, { parameter: 'flow', valueType: 'mean' }).first()
    } else if (MeasuresSelect.from(this.measures, { parameter: 'level' }).first() !== undefined) {
      result = MeasuresSelect.from(this.measures, { parameter: 'level', valueType: 'instantaneous' }).first()
    }

    return result
  }

  first() {
    return this.measures[0]
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
