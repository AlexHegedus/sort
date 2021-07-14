import React from 'react';
import {list} from '../../App'

let num, j : number
export const Insertion=()=>{
  let start = performance.now()

  for(let i = 1; i<list.length; i++){
    num = list[i]
    j = i;

    while(j>0 && list[j-1]>num){
      list[j] = list[j-1]
      j--
   }

   list[j] = num
  }
  let end = performance.now()
    let execTime=(end-start)
    console.log(list+" Execution Time: "+execTime)
}