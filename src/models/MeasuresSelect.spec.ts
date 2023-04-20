import { expect, describe, test } from 'vitest'
import MeasuresSelect, { type Measures } from './MeasuresSelect'

const MEASURES_LEVEL_ONLY: Measures = [
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-i-900-m-qualified',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterLevel'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    timeseriesID: '841E52FE-0308-4FFB-9A53-2960BF075CA9',
    period: 900,
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/waterLevel',
      label: 'Water level',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#Meter'
    },
    label: '15min Level (m) time series for Brislington',
    unitName: 'm',
    parameter: 'level',
    notation: '18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-i-900-m-qualified',
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/18142c4b-ecf0-497c-ac4b-ccaef45aefc1'
    },
    periodName: '15min',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameterName: 'Level',
    valueType: 'instantaneous'
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-max-86400-m-qualified',
    parameter: 'level',
    period: 86400,
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/waterLevel',
      label: 'Water level',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterLevel'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#Meter'
    },
    unitName: 'm',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/maximum',
      label: 'maximum',
      comment:
        'Measurements which represent the maximum over the measurement period.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueType: 'max',
    label: 'Daily max Level (m) time series for Brislington',
    notation:
      '18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-max-86400-m-qualified',
    periodName: 'daily',
    parameterName: 'Level',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/18142c4b-ecf0-497c-ac4b-ccaef45aefc1'
    }
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-min-86400-m-qualified',
    unitName: 'm',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/waterLevel',
      label: 'Water level',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    period: 86400,
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/minimum',
      label: 'minimum',
      comment:
        'Measurements which represent the minimum over the measurement period.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    type: [
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterLevel'
      }
    ],
    parameterName: 'Level',
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#Meter'
    },
    label: 'Daily min Level (m) time series for Brislington',
    valueType: 'min',
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/18142c4b-ecf0-497c-ac4b-ccaef45aefc1'
    },
    parameter: 'level',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    notation:
      '18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-min-86400-m-qualified',
    periodName: 'daily'
  }
]

const MEASURES_FLOW_AND_LEVEL: Measures = [
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/052d0819-2a32-47df-9b99-c243c9c8235b-flow-m-86400-m3s-qualified',
    unitName: 'm3/s',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/waterFlow',
      label: 'Water Flow',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    label: 'Daily mean Flow (m3/s) time series for Ulting Sarasota',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/mean',
      label: 'mean',
      comment:
        'Measurements which represent the mean value over the measurement period.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    notation: '052d0819-2a32-47df-9b99-c243c9c8235b-flow-m-86400-m3s-qualified',
    periodName: 'daily',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/flood-monitoring/def/core/Flow'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/052d0819-2a32-47df-9b99-c243c9c8235b'
    },
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#CubicMeterPerSecond'
    },
    valueType: 'mean',
    period: 86400,
    parameter: 'flow',
    parameterName: 'Flow'
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/052d0819-2a32-47df-9b99-c243c9c8235b-flow-min-86400-m3s-qualified',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/minimum',
      label: 'minimum',
      comment:
        'Measurements which represent the minimum over the measurement period.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    type: [
      {
        '@id': 'http://environment.data.gov.uk/flood-monitoring/def/core/Flow'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      }
    ],
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#CubicMeterPerSecond'
    },
    notation:
      '052d0819-2a32-47df-9b99-c243c9c8235b-flow-min-86400-m3s-qualified',
    periodName: 'daily',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/waterFlow',
      label: 'Water Flow',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameter: 'flow',
    label: 'Daily min Flow (m3/s) time series for Ulting Sarasota',
    period: 86400,
    parameterName: 'Flow',
    unitName: 'm3/s',
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueType: 'min',
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/052d0819-2a32-47df-9b99-c243c9c8235b'
    }
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/052d0819-2a32-47df-9b99-c243c9c8235b-flow-i-900-m3s-qualified',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameter: 'flow',
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#CubicMeterPerSecond'
    },
    parameterName: 'Flow',
    valueType: 'instantaneous',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/flood-monitoring/def/core/Flow'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      }
    ],
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unitName: 'm3/s',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    period: 900,
    notation: '052d0819-2a32-47df-9b99-c243c9c8235b-flow-i-900-m3s-qualified',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/waterFlow',
      label: 'Water Flow',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/052d0819-2a32-47df-9b99-c243c9c8235b'
    },
    label: '15min Flow (m3/s) time series for Ulting Sarasota',
    periodName: '15min'
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/052d0819-2a32-47df-9b99-c243c9c8235b-flow-max-86400-m3s-qualified',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id': 'http://environment.data.gov.uk/flood-monitoring/def/core/Flow'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameterName: 'Flow',
    period: 86400,
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/052d0819-2a32-47df-9b99-c243c9c8235b'
    },
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/waterFlow',
      label: 'Water Flow',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unitName: 'm3/s',
    valueType: 'max',
    parameter: 'flow',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/maximum',
      label: 'maximum',
      comment:
        'Measurements which represent the maximum over the measurement period.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    periodName: 'daily',
    label: 'Daily max Flow (m3/s) time series for Ulting Sarasota',
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#CubicMeterPerSecond'
    },
    notation:
      '052d0819-2a32-47df-9b99-c243c9c8235b-flow-max-86400-m3s-qualified',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    }
  }
]

const MEASURES_RAINFALL: Measures = [
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359-rainfall-t-86400-mm-qualified',
    parameterName: 'Rainfall',
    period: 86400,
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359'
    },
    label: 'Daily total Rainfall (mm) time series for Ulpha  Duddo',
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#Millimeter'
    },
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/total',
      label: 'total',
      comment:
        'Measurements which represent an accumulated total over the measurement period.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    periodName: 'daily',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/rainfall',
      label: 'Rainfall amount',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    unitName: 'mm',
    parameter: 'rainfall',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Rainfall'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    valueType: 'total',
    notation:
      '34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359-rainfall-t-86400-mm-qualified'
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359-rainfall-t-900-mm-qualified',
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#Millimeter'
    },
    periodName: '15min',
    timeseriesID: '2a119c39-6ade-4d72-b812-aea6b05de15c',
    type: [
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Rainfall'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameterName: 'Rainfall',
    valueType: 'total',
    label: '15min total Rainfall (mm) time series for Ulpha  Duddo',
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359'
    },
    period: 900,
    unitName: 'mm',
    parameter: 'rainfall',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/rainfall',
      label: 'Rainfall amount',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/total',
      label: 'total',
      comment:
        'Measurements which represent an accumulated total over the measurement period.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    notation:
      '34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359-rainfall-t-900-mm-qualified'
  }
]

const MEASURES_GROUNDWATER: Measures = [
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/c7e13884-4a02-4df3-b184-09aea28cf8e8_3_020-gw-dipped-i-mAOD-qualified',
    timeseriesID: '85d9d509-8df9-470e-8653-cc1e20bde6c8',
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#Meter'
    },
    qualifier: 'Groundwater Dipped',
    type: [
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/GroundwaterLevel'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    parameterName: 'GroundwaterLevel',
    parameter: 'level',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/groundwaterLevel',
      label: 'Groundwater level',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    label: 'Groundwater Dipped (mAOD) time series for Burton Coggles',
    notation:
      'c7e13884-4a02-4df3-b184-09aea28cf8e8_3_020-gw-dipped-i-mAOD-qualified',
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/c7e13884-4a02-4df3-b184-09aea28cf8e8_3_020'
    },
    unitName: 'mAOD',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueType: 'instantaneous'
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/c7e13884-4a02-4df3-b184-09aea28cf8e8_3_020-gw-logged-i-subdaily-mAOD-qualified',
    parameterName: 'GroundwaterLevel',
    notation:
      'c7e13884-4a02-4df3-b184-09aea28cf8e8_3_020-gw-logged-i-subdaily-mAOD-qualified',
    valueType: 'instantaneous',
    type: [
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/GroundwaterLevel'
      }
    ],
    parameter: 'level',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    period: 900,
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Qualified',
      label: 'Qualified',
      comment:
        'Indicates that the values in a series or dataset are qualified and quality checked versions of direct measurements',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unitName: 'mAOD',
    label: 'Sub-daily Groundwater Logged (mAOD) time series for Burton Coggles',
    qualifier: 'Groundwater Logged',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/groundwaterLevel',
      label: 'Groundwater level',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unit: {
      '@id': 'http://qudt.org/1.1/vocab/unit#Meter'
    },
    periodName: 'sub-daily',
    station: {
      '@id':
        'http://environment.data.gov.uk/hydrology/id/stations/c7e13884-4a02-4df3-b184-09aea28cf8e8_3_020'
    },
    timeseriesID: '57665040-9748-45d3-94ab-792e2ea62b79',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    }
  }
]

const MEASURE_WATER_QUALITY = [
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-turb-i-subdaily-ntu',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterQuality'
      }
    ],
    parameterName: 'Turbidity',
    label:
      'Sub-daily Turbidity (NTU) time series for BADSEY BROOK DS SILT REMOVAL',
    periodName: 'sub-daily',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    period: 900,
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    unitName: 'NTU',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/turbidity',
      broader: {
        '@id': 'http://environment.data.gov.uk/reference/def/op/waterQuality'
      },
      label: 'Turbidity',
      comment:
        'Turbidity or haziness of water, measured in Nephelometric Turbidity Units (NTU)',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueType: 'instantaneous',
    station: {
      '@id': 'http://environment.data.gov.uk/hydrology/id/stations/E03234A'
    },
    parameter: 'TURBIDITY',
    unit: {
      '@id': 'http://environment.data.gov.uk/reference/def/opunit/NTU',
      label: 'NTU',
      comment: 'Nephelometric Turbidity Unit',
      type: [
        {
          '@id': 'http://qudt.org/schema/qudt/Unit'
        }
      ]
    },
    notation: 'E03234A-turb-i-subdaily-ntu',
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Measured',
      label: 'Measured',
      comment:
        'Indicates that the values in a series or dataset are directly measured through some observational process.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    }
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-amm-i-subdaily-mgL',
    unitName: 'mg/L',
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Measured',
      label: 'Measured',
      comment:
        'Indicates that the values in a series or dataset are directly measured through some observational process.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    label:
      'Sub-daily Ammonium (mg/L) time series for BADSEY BROOK DS SILT REMOVAL',
    notation: 'E03234A-amm-i-subdaily-mgL',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/ammonium',
      broader: {
        '@id': 'http://environment.data.gov.uk/reference/def/op/waterQuality'
      },
      label: 'Ammonium',
      comment: 'Concentration of ammonium in water',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameterName: 'Ammonium',
    station: {
      '@id': 'http://environment.data.gov.uk/hydrology/id/stations/E03234A'
    },
    period: 900,
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterQuality'
      }
    ],
    valueType: 'instantaneous',
    unit: {
      '@id': 'http://qudt.org/vocab/unit/MilliGM-PER-L'
    },
    periodName: 'sub-daily',
    parameter: 'AMMONIUM'
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-temp-i-subdaily-C',
    type: [
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterQuality'
      }
    ],
    label:
      'Sub-daily Temperature (oC) time series for BADSEY BROOK DS SILT REMOVAL',
    parameterName: 'Temperature',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Measured',
      label: 'Measured',
      comment:
        'Indicates that the values in a series or dataset are directly measured through some observational process.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameter: 'TEMPERATURE',
    periodName: 'sub-daily',
    notation: 'E03234A-temp-i-subdaily-C',
    period: 900,
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/temperature',
      broader: {
        '@id': 'http://environment.data.gov.uk/reference/def/op/waterQuality'
      },
      label: 'Temperature',
      comment: 'Water temperature',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    station: {
      '@id': 'http://environment.data.gov.uk/hydrology/id/stations/E03234A'
    },
    valueType: 'instantaneous',
    unitName: 'oC',
    unit: {
      '@id': 'http://qudt.org/vocab/unit/DEG_C'
    },
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    }
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-do-i-subdaily-mgL',
    periodName: 'sub-daily',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/dissolved-oxygen',
      broader: {
        '@id': 'http://environment.data.gov.uk/reference/def/op/waterQuality'
      },
      label: 'Dissolved Oxygen',
      comment:
        'Concentration of dissolved oxygen in water, may have been measured chemically or optically',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    station: {
      '@id': 'http://environment.data.gov.uk/hydrology/id/stations/E03234A'
    },
    parameter: 'DISSOLVED OXYGEN',
    type: [
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterQuality'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      }
    ],
    label:
      'Sub-daily Dissolved Oxygen (mg/L) time series for BADSEY BROOK DS SILT REMOVAL',
    unit: {
      '@id': 'http://qudt.org/vocab/unit/MilliGM-PER-L'
    },
    period: 900,
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Measured',
      label: 'Measured',
      comment:
        'Indicates that the values in a series or dataset are directly measured through some observational process.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueType: 'instantaneous',
    parameterName: 'Dissolved Oxygen',
    notation: 'E03234A-do-i-subdaily-mgL',
    unitName: 'mg/L'
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-ph-i-subdaily',
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    type: [
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterQuality'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      }
    ],
    notation: 'E03234A-ph-i-subdaily',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/ph',
      broader: {
        '@id': 'http://environment.data.gov.uk/reference/def/op/waterQuality'
      },
      label: 'PH',
      comment: 'PH of water',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    parameterName: 'PH',
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Measured',
      label: 'Measured',
      comment:
        'Indicates that the values in a series or dataset are directly measured through some observational process.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    periodName: 'sub-daily',
    parameter: 'PH',
    period: 900,
    valueType: 'instantaneous',
    label: 'Sub-daily PH time series for BADSEY BROOK DS SILT REMOVAL',
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    station: {
      '@id': 'http://environment.data.gov.uk/hydrology/id/stations/E03234A'
    }
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-do-i-subdaily-pct',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterQuality'
      }
    ],
    period: 900,
    notation: 'E03234A-do-i-subdaily-pct',
    parameterName: 'Dissolved Oxygen',
    parameter: 'DISSOLVED OXYGEN',
    valueType: 'instantaneous',
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Measured',
      label: 'Measured',
      comment:
        'Indicates that the values in a series or dataset are directly measured through some observational process.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    station: {
      '@id': 'http://environment.data.gov.uk/hydrology/id/stations/E03234A'
    },
    periodName: 'sub-daily',
    unitName: '%',
    label:
      'Sub-daily Dissolved Oxygen (%) time series for BADSEY BROOK DS SILT REMOVAL',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/dissolved-oxygen',
      broader: {
        '@id': 'http://environment.data.gov.uk/reference/def/op/waterQuality'
      },
      label: 'Dissolved Oxygen',
      comment:
        'Concentration of dissolved oxygen in water, may have been measured chemically or optically',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    unit: {
      '@id': 'http://qudt.org/vocab/unit/PERCENT'
    },
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    }
  },
  {
    '@id':
      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-cond-i-subdaily-uS',
    unit: {
      '@id': 'http://qudt.org/vocab/unit/MicroS-PER-CentiM'
    },
    parameter: 'CONDUCTIVITY',
    periodName: 'sub-daily',
    notation: 'E03234A-cond-i-subdaily-uS',
    observedProperty: {
      '@id': 'http://environment.data.gov.uk/reference/def/op/conductivity',
      broader: {
        '@id': 'http://environment.data.gov.uk/reference/def/op/waterQuality'
      },
      label: 'Conductivity',
      comment: 'Conductivity of water',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    period: 900,
    parameterName: 'Conductivity',
    valueType: 'instantaneous',
    unitName: 'µS/cm',
    station: {
      '@id': 'http://environment.data.gov.uk/hydrology/id/stations/E03234A'
    },
    inDataset: {
      '@id': 'http://environment.data.gov.uk/reference/set/HydrologyDataset'
    },
    label:
      'Sub-daily Conductivity (µS/cm) time series for BADSEY BROOK DS SILT REMOVAL',
    type: [
      {
        '@id': 'http://environment.data.gov.uk/reference/def/core/TimeSeries'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/WaterQuality'
      },
      {
        '@id':
          'http://environment.data.gov.uk/flood-monitoring/def/core/Measure'
      }
    ],
    observationType: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/Measured',
      label: 'Measured',
      comment:
        'Indicates that the values in a series or dataset are directly measured through some observational process.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    },
    valueStatistic: {
      '@id': 'http://environment.data.gov.uk/reference/def/core/instantaneous',
      label: 'instantaneous',
      comment:
        'Measurements which just represent the value at the instance they are taken.',
      type: [
        {
          '@id': 'http://www.w3.org/2004/02/skos/core#Concept'
        }
      ]
    }
  }
]

describe('MeasuresSelect', () => {
  test('default', () => {
    expect(new MeasuresSelect(MEASURES_FLOW_AND_LEVEL).default()['@id']).toBe(
      'http://environment.data.gov.uk/hydrology/id/measures/052d0819-2a32-47df-9b99-c243c9c8235b-flow-m-86400-m3s-qualified'
    )
    expect(new MeasuresSelect(MEASURES_LEVEL_ONLY).default()['@id']).toBe(
      'http://environment.data.gov.uk/hydrology/id/measures/18142c4b-ecf0-497c-ac4b-ccaef45aefc1-level-i-900-m-qualified'
    )
    expect(new MeasuresSelect(MEASURES_RAINFALL).default()['@id']).toBe(
      'http://environment.data.gov.uk/hydrology/id/measures/34f4e53b-4616-4aaa-b8ad-170c22c808c4_589359-rainfall-t-86400-mm-qualified'
    )
    expect(new MeasuresSelect(MEASURES_GROUNDWATER).default()['@id']).toBe(
      'http://environment.data.gov.uk/hydrology/id/measures/c7e13884-4a02-4df3-b184-09aea28cf8e8_3_020-gw-logged-i-subdaily-mAOD-qualified'
    )
    expect(new MeasuresSelect(MEASURE_WATER_QUALITY).default()['@id']).toBe(      'http://environment.data.gov.uk/hydrology/id/measures/E03234A-do-i-subdaily-mgL',
    )
  })
})
