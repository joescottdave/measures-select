import { describe, expect, it } from 'vitest'
import ParameterSpecification from './ParameterSpecification'
import { Measure } from '../types'

const DISSOLVED_OXYGEN_MEASURE: Measure = {
  parameter: 'DISSOLVED OXYGEN',
  '@id':
    'http://environment.data.gov.uk/hydrology/id/measures/E03234A-do-i-subdaily-mgL',
  periodName: 'sub-daily',

  label:
    'Sub-daily Dissolved Oxygen (mg/L) time series for BADSEY BROOK DS SILT REMOVAL',
  period: 900,
  valueType: 'instantaneous',
  notation: 'E03234A-do-i-subdaily-mgL',
  unitName: 'mg/L'
}

const RAINFALL_MEASURE: Measure = {
  parameter: 'rainfall',
  '@id':
    'http://environment.data.gov.uk/hydrology/id/measures/34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359-rainfall-t-86400-mm-qualified',
  period: 86400,
  label: 'Daily total Rainfall (mm) time series for Ulpha  Duddo',
  periodName: 'daily',
  unitName: 'mm',
  valueType: 'total',
  notation:
    '34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359-rainfall-t-86400-mm-qualified'
}

const LEVEL_MEASURE: Measure = {
  parameter: 'level',
  '@id':
    'http://environment.data.gov.uk/hydrology/id/measures/18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-max-86400-m-qualified',
  period: 86400,
  unitName: 'm',
  valueType: 'max',
  label: 'Daily max Level (m) time series for Brislington',
  notation: '18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-max-86400-m-qualified',
  periodName: 'daily'
}

const FLOW_MEASURE: Measure = {
  '@id':
    'http://environment.data.gov.uk/hydrology/id/measures/052d0819-2a32-47df-9b99-c243c9c8235b-flow-m-86400-m3s-qualified',
  unitName: 'm3/s',
  label: 'Daily mean Flow (m3/s) time series for Ulting Sarasota',
  notation: '052d0819-2a32-47df-9b99-c243c9c8235b-flow-m-86400-m3s-qualified',
  periodName: 'daily',
  valueType: 'mean',
  period: 86400,
  parameter: 'flow'
}

describe('ParameterSpecification', () => {
  it('should be satisfied by a measure with a matching parameter', () => {
    expect(
      new ParameterSpecification('DISSOLVED OXYGEN').isSatisfied(
        DISSOLVED_OXYGEN_MEASURE
      )
    ).toBe(true)
    expect(new ParameterSpecification('flow').isSatisfied(FLOW_MEASURE)).toBe(
      true
    )
    expect(new ParameterSpecification('level').isSatisfied(LEVEL_MEASURE)).toBe(
      true
    )
    expect(
      new ParameterSpecification('rainfall').isSatisfied(RAINFALL_MEASURE)
    ).toBe(true)
  })

  it('should not be satisfied by a measure without a matching parameter', () => {
    expect(
      new ParameterSpecification('rainfall').isSatisfied(
        DISSOLVED_OXYGEN_MEASURE
      )
    ).not.toBe(true)
    expect(
      new ParameterSpecification('DISSOLVED OXYGEN').isSatisfied(FLOW_MEASURE)
    ).not.toBe(true)
    expect(
      new ParameterSpecification('flow').isSatisfied(LEVEL_MEASURE)
    ).not.toBe(true)
    expect(
      new ParameterSpecification('level').isSatisfied(RAINFALL_MEASURE)
    ).not.toBe(true)
  })
})
