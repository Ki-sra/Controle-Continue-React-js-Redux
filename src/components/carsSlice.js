import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: '1', brand: 'Toyota', model: 'Yaris', year: 2021, pricePerDay: 30, status: 'available', plateNumber: '12345-A-6' },
    { id: '2', brand: 'Dacia', model: 'Logan', year: 2016, pricePerDay: 25, status: 'rented', plateNumber: '456-ABC' },
    { id: '3', brand: 'Hyundai', model: 'i10', year: 2019, pricePerDay: 28, status: 'available', plateNumber: '789-ABC' },
  ],
  selectedCarId: null,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    rentCar: (state, action) => {
      const carId = action.payload;
      const car = state.list.find((c) => c.id === carId);
      if (car) car.status = 'rented';
    },
    returnCar: (state, action) => {
      const carId = action.payload;
      const car = state.list.find((c) => c.id === carId);
      if (car) car.status = 'available';
    },
    selectCar: (state, action) => {
      state.selectedCarId = action.payload;
    },
  },
});

export const { rentCar, returnCar, selectCar } = carsSlice.actions;
export default carsSlice.reducer;
