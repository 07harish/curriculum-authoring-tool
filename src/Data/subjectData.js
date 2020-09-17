export let alldata = {
  root: ['1', '2', '1599073201185'],
  subject: 'Science',
  subRows: {
    '1': {
      headerText: 'Our Environment',
      subRows: ['1.0', '1.1'],
      parent: 'root',
      indentDepth: 0
    },
    '2': {
      headerText: 'Ecosystem',
      subRows: ['2.0'],
      parent: 'root',
      indentDepth: 0
    },
    root: ['1', '2', '1599073201185'],
    '1.0': { headerText: 'Natural calamaties', parent: '1', indentDepth: 1 },
    '1.1': {
      headerText: 'rocks and soil',
      subRows: ['1.1.0'],
      parent: '1',
      indentDepth: 1
    },
    '1.1.0': {
      headerText: 'About rocks',
      subRows: ['1.1.0.0', '1.1.0.1'],
      parent: '1.1',
      indentDepth: 2
    },
    '1.1.0.0': {
      headerText: 'Sedimentary rocks',
      parent: '1.1.0',
      indentDepth: 3
    },
    '1.1.0.1': {
      headerText: 'Metamorphic rocks',
      parent: '1.1.0',
      indentDepth: 3
    },
    '2.0': {
      headerText: 'Air, water and weather',
      parent: '2',
      indentDepth: 1
    },
    '1599073201185': {
      headerText: 'Universe',
      subRows: ['1599073219764'],
      parent: 'root',
      indentDepth: 0
    },
    '1599073219764': {
      headerText: 'Planets',
      subRows: ['1599073263091'],
      parent: '1599073201185',
      indentDepth: 1
    },
    '1599073263091': {
      headerText: 'Planets indepth',
      parent: '1599073219764',
      indentDepth: 2
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
