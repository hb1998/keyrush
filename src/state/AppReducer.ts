import {initialState} from './GlobalState'
export default (state:initialState, action):initialState => {
    switch (action.type) {
      case "INIT_CARS":
        return {
          ...state,
          cars: action.payload
        };
      case "UPDATE_CAR":
        const updatedCar = action.payload;
  
        const updatedCars = state.cars.map(car => {
          if (car.id === updatedCar.id) {
            return updatedCar;
          }
          return car;
        });
  
        return {
          ...state,
          cars: updatedCars
        };
      default:
        return state;
    }
  };