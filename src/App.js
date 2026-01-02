import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { selectClient, assignCarToClient, removeCarFromClient } from './components/clientsSlice';
import { rentCar, returnCar } from './components/carsSlice';

function App() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.list);
  const selectedClientId = useSelector((state) => state.clients.selectedClientId);
  const cars = useSelector((state) => state.cars.list);

  const handleSelectClient = (id) => {
    dispatch(selectClient(id));
  };

  const handleRent = (carId) => {
    if (!selectedClientId) {
      alert('Veuillez sélectionner un client avant de louer.');
      return;
    }
    const client = clients.find((c) => c.id === selectedClientId);
    if (client && client.activeRentalCarId) {
      alert('Le client a déjà une voiture louée.');
      return;
    }
    dispatch(rentCar(carId));
    dispatch(assignCarToClient({ clientId: selectedClientId, carId }));
  };

  const handleReturn = (carId) => {
    const clientWithCar = clients.find((c) => c.activeRentalCarId === carId);
    if (clientWithCar) {
      dispatch(removeCarFromClient(clientWithCar.id));
    }
    dispatch(returnCar(carId));
  };

  return (
    <div className="App beginner">
      <h1>Car Rental</h1>
      <div className="container">
        <div className="clients">
          <h2>Clients</h2>
          <ul>
            {clients.map((client) => (
              <li key={client.id} className={client.id === selectedClientId ? 'selected' : ''}>
                <div className="client-name">{client.fullName}</div>
                <div className="client-info">Phone: {client.phone}</div>
                <div className="client-info">License: {client.licenseNumber}</div>
                <div className="client-info">Rented Car: {client.activeRentalCarId ? client.activeRentalCarId : 'None'}</div>
                <button onClick={() => handleSelectClient(client.id)}>Select</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="cars">
          <h2>Cars</h2>
          <ul>
            {cars.map((car) => {
              const isAvailable = car.status === 'available';
              return (
                <li key={car.id} className="car-item">
                  <div className="car-title">{car.brand} {car.model} ({car.year})</div>
                  <div>Status: <strong>{car.status}</strong></div>
                  <div>Plate: {car.plateNumber} - ${car.pricePerDay}/day</div>
                  {isAvailable ? (
                    <button onClick={() => handleRent(car.id)}>
                      Rent
                    </button>
                  ) : (
                    <button onClick={() => handleReturn(car.id)}>
                      Return
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
