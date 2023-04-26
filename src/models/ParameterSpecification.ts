import { Measure, Parameter } from '../types'

export default class ParameterSpecification {
  private readonly parameter

  constructor (parameter: Parameter) {
    this.parameter = parameter
  }

  isSatisfied (x: Measure) {
    return x.parameter === this.parameter
  }
}
