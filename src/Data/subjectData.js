export let alldata = {
  root: ['1', '2'],
  subject: 'Science',
  subRows: {
    '1.0': {
      headerText: '1.0 == Count to determine the number of objects in a set',
      indentDepth: 1,
      parent: '1'
    },
    '1': {
      headerText: '1 ==Numbers',
      indentDepth: 0,
      subRows: ['1.0', '1.1'],
      parent: 'root'
    },
    '1.1': {
      headerText: '1.1 == Write Prime numbers from 1 to 100',
      indentDepth: 1,
      subRows: ['1.1.0'],
      parent: '1'
    },
    '1.1.0': {
      headerText: '1.1.0 === Count to determine the number of objects in a set',
      indentDepth: 2,
      subRows: ['1.1.0.0', '1.1.0.1'],
      parent: '1.1'
    },
    '1.1.0.0': {
      headerText: '1.1.0.0 == Write 1 to 100',
      indentDepth: 3,
      parent: '1.1.0'
    },
    '1.1.0.1': {
      headerText: '1.1.0.1 == Write 1 to 2000',
      indentDepth: 3,
      parent: '1.1.0'
    },
    '2': {
      headerText: '2 == Measurement',
      indentDepth: 0,
      subRows: ['2.0'],
      parent: 'root'
    },
    '2.0': {
      headerText: '2.0 == Use simple fraction names in a real-life situations',
      indentDepth: 1
    }
  }
}

// This is how look up is created

// let normalizedLookup = {
//   root: ['1', '2'],
//   '1': ['1.0', '1.1'],
//   '1.1': ['1.1.0'],
//   '1.1.0': ['1.1.0.0'],
//   '2': ['2.0']
// }
// another example
// let start = {
//   '0': ['skjdfh', 'ert'],
//   skjdfh: ['skjf', 'ttt'],
//   skjf: ['dfgdf'],
//   ert: ['ttt']
// }
