import React, {useState} from 'react';
import {list} from '../../App'


let num: number
export const Bubble=()=>{
    let start = performance.now()
    for (let i = 0; i <= list.length; i++) {
        for (let j = 0; j <= list.length; j++) {
            
            if (list[j]>list[j+1]) {
                num = list[j+1]
                list[j+1] = list[j]
                list[j] = num                    
            }
        }
    }
    let end = performance.now()
    let execTime=(end-start)
    console.log(list+" Execution Time: "+execTime)
}