import React from 'react';
import {list} from '../../App'

let num, min : number

export const Selection=()=>{
    let start = performance.now()
    for(var i = 0; i < list.length; i++){
        min = i
  for(var  j = i+1; j<list.length; j++){
     if(list[j]<list[min]){
        min = j;
     }
  }
  num = list[i];
  list[i] = list[min];
  list[min] = num;
}
let end = performance.now()
let execTime=(end-start)
console.log(list+" Execution Time: "+execTime)
}