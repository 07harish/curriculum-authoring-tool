// constructTree returns Json tree, taking lookup and prev data as params
// lp = Lookup
// data = Json data
export const constructTree = function (lp, data) {
  const oldTree = data.subRows
  const tree = { root: lp.root }

  let newJson = { ...data }

  function rec (root, rootparent = 'root') {
    for (let key of root) {
      tree[key] = {
        headerText: (oldTree[key] && oldTree[key].headerText) || '',
        subRows: lp[key],
        parent: rootparent,
        indentDepth: rootparent === 'root' ? 0 : findDepth(key, lp)
      }

      if (lp[key]) rec(lp[key], key)
    }
  }
  rec(lp.root)
  newJson.subRows = tree
  return newJson
}

// Find the parent's - key, index and its subrows
export const findWhereParentExists = function (id, lp) {
  // console.log("jkad", id, lp);
  for (let [key, value] of Object.entries(lp)) {
    let index = lp[key].indexOf(id)
    if (value.includes(id)) {
      return { key, value, index }
    }
  }
}

// Find the depth of row with Row Id and Lookup
export const findDepth = (id, lp) => {
  let depth = 0
  function recursive (id) {
    let { key } = findWhereParentExists(id, lp)

    if (key === 'root') {
      return depth
    } else {
      depth++
      recursive(key)
    }
    return depth
  }
  recursive(id)
  return depth
}
