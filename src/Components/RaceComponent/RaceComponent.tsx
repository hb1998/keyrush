import React, { ReactElement } from 'react'
import carImg from '../../assets/car.svg'
interface Props {
    cars?:[]
}

export default function RaceComponent({}: Props): ReactElement {
    return (
        <div style={{margin:'20px 100px'}} >
            <img src={carImg} style={{height:100}}/>
        </div>
    )
}
