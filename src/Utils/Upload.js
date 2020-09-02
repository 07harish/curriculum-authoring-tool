export function onUpload (event, callBack) {
  var reader = new FileReader()
  reader.onload = e => onReaderLoad(e, callBack)
  reader.readAsText(event.target.files[0])
}

function onReaderLoad (event, callBack) {
  //alert(event.target.result);
  if (!event.target.result) {
    return
  }
  var obj = JSON.parse(event.target.result)
  if (!obj.root) return
  callBack(obj)
}
