# getTags
with TinySegmenter

## getTags(str,flg)  //flg mean add alphabet

```js
main()

async function main(){
  
  var url ="https://hashsan.github.io/catch_sky/nikki/20231112.txt"

  url ="https://hashsan.github.io/catch_sky/nikki/dev1.txt"

  var str = await fetch(url).then(d=>d.text())
  var ret = getTags(str)
  document.body.innerText =ret
  
}

```
