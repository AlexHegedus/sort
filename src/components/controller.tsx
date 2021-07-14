import React from 'react';
import {Generate} from './randomgen'
import {Bubble} from './sorts/bubble'
import { Selection } from './sorts/selection'
import { Insertion } from './sorts/insertion'
function Menu(){
    return(
        <div>
            <div>
                <button onClick={Generate}>Generate</button>
            </div>
            <div>
                <button onClick={Bubble}>Bubble</button>
                <button onClick={Selection}>Selection</button>
                <button onClick={Insertion}>Insertion</button>
            </div>
        </div>
    )
}

export default Menu