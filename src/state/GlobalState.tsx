import React, { createContext, useReducer, ReactElement } from "react";
import AppReducer from "./AppReducer";

const initialState:initialState = {
    cars: []
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }): ReactElement => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function updateCar(config:carConfig) {
        dispatch({
            type: "UPDATE_CAR",
            payload: config
        });
    }
    function initCars(cars:carConfig[]) {
        dispatch({
            type: "INIT_CARS",
            payload: cars
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                cars: state.cars,
                updateCar,
                initCars
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export interface initialState {
cars?:carConfig[],
updateCar?:(config:carConfig)=>void,
initCars?:(cars:carConfig[])=>void

}

export interface carConfig {
    totalWords: number,
    correctWords: number,
    name: string,
    id:number
}
