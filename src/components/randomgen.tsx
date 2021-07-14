import React from 'react';
import {list} from '../App' 

export const Generate= () =>{
    let num: number
        for (let i = 0; i <= 9; i++) {
            num = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1
            list[i] = num
    }
    return(
        <div>
            {list.map(nums => <h2 key={nums}>{nums}</h2>)}  
        </div>
    )
}