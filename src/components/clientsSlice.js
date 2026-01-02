import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 'client1', fullName: 'Ahmed Ben Ali', phone: '0612345678', licenseNumber: 'MA987654', activeRentalCarId: '2' },
    { id: 'client2', fullName: 'Hamza Kousra', phone: '0600000002', licenseNumber: 'MA987651', activeRentalCarId: null },
    { id: 'client3', fullName: 'Marvvan Radi', phone: '0600000003', licenseNumber: 'MA987652', activeRentalCarId: null },
    { id: 'client4', fullName: 'Ayoub Aguezar', phone: '0600000005', licenseNumber: 'MA987653', activeRentalCarId: null },
  ],
  selectedClientId: null,
};

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    selectClient: (state, action) => {
      state.selectedClientId = action.payload;
    },
    assignCarToClient: (state, action) => {
      const { clientId, carId } = action.payload;
      const client = state.list.find((c) => c.id === clientId);
      if (client) client.activeRentalCarId = carId;
    },
    removeCarFromClient: (state, action) => {
      const clientId = action.payload;
      const client = state.list.find((c) => c.id === clientId);
      if (client) client.activeRentalCarId = null;
    },
  },
});

export const { selectClient, assignCarToClient, removeCarFromClient } = clientsSlice.actions;
export default clientsSlice.reducer;
