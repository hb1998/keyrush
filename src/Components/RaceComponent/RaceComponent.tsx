import React, { ReactElement, useContext } from 'react'
import carImg from '../../assets/car.svg'
import { GlobalContext } from '../../state/GlobalState'
interface Props {
}

export default function RaceComponent({ }: Props): ReactElement {
    const { cars } = useContext(GlobalContext)

    const computePosition=({correctWords,totalWords})=>{
        return ((correctWords/totalWords)/100 * 80)*100 + 'vw'
    }

    return (
        <div style={{ margin: '20px 100px' }} >
            {
                cars.map((car) => (
                    <div  >
                        <img 
                        src={carImg} 
                        style={{ transition:'0.8s transform',height: 100,transform:`translateX(${computePosition(car)})` }} />
                    </div>
                ))
            }
        </div>
    )
}

