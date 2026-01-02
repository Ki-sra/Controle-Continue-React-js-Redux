import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './components/carsSlice';
import clientsReducer from './components/clientsSlice';

export default configureStore({
  reducer: {
    cars: carsReducer,
    clients: clientsReducer,
  },
});
