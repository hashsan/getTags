import {TinySegmenter} from "https://hashsan.github.io/getTags/TinySegmenter.js"

function multicount(ary){
  var count = {};
  for (var i = 0; i < ary.length; i++) {
    const elm = ary[i];
    count[elm] = (count[elm] || 0) + 1;
  }  
  return count;
}


function getTags(str,flg){

  const t = new TinySegmenter()
  var ary = t.segment(str)
  .filter(d=>d.length>2)
  if(flg){
    ary = ary.filter(d=>!/\w+/i.test(d))
  }
  const dat =multicount(ary)
  const tags = Object.keys(dat).filter(key=>dat[key]>2)
  return tags
}


if(window){window.getTags = getTags}
export default getTags
