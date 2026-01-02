# Car Rental (Beginner) — React + Redux Toolkit 🚗

**Overview** ✅

This is a simple student-style car rental management app built with Create React App and **Redux Toolkit**. The UI and styling are intentionally simple (and a bit messy) to look like a beginner's project.

---

## What I added / changed 🔧

- **Redux** setup
  - `src/store.js` — configures the Redux store with `cars` and `clients` reducers.
- **Slices** (simple logic, plain reducers)
  - `src/components/carsSlice.js`
    - State: `{ list: [...cars], selectedCarId }`
    - Actions/reducers: `rentCar`, `returnCar`, `selectCar`
  - `src/components/clientsSlice.js`
    - State: `{ list: [...clients], selectedClientId }`
    - Actions/reducers: `selectClient`, `assignCarToClient`, `removeCarFromClient`
- **App wiring & UI**
  - `src/index.js` — wrapped `<App />` with `<Provider store={store}>`
  - `src/App.js` — simple UI: list clients, select client, list cars, `Louer` / `Retourner` buttons; uses `useSelector` and `useDispatch`.
  - `src/App.css` — intentionally beginner/bad CSS (Comic Sans, bright background, dashed borders, rotated items).

All changes are small and purposefully straightforward — meant for a school assignment or exam.

---

## Global Redux state shape (example) 💡

```js
// state
{
  cars: {
    list: [
      { id, brand, model, year, pricePerDay, status, plateNumber }
    ],
    selectedCarId: null
  },
  clients: {
    list: [
      { id, fullName, phone, licenseNumber, activeRentalCarId }
    ],
    selectedClientId: null
  }
}
```

### Sample data included

- Cars:
  - Toyota Yaris — available
  - Dacia Logan — rented
  - Hyundai i10 — available
- Clients:
  - Ahmed Ben Ali (has Dacia Logan)
  - Sara El Amrani
  - Youssef Karim

---

## How the actions work 🔁

- Client actions: `selectClient(clientId)` — choose a client; `assignCarToClient({clientId, carId})` — bind car id to client; `removeCarFromClient(clientId)` — clear client's `activeRentalCarId`.
- Car actions: `rentCar(carId)` — sets `status` to `"rented"`; `returnCar(carId)` — sets `status` to `"available"`.
- Renting flow (implemented in `App.js`):
  1. Select a client with the **Select** button.
  2. Click **Louer** on an available car.
  3. App dispatches `rentCar(carId)` and `assignCarToClient({clientId,carId})`.
- Returning flow:
  1. Click **Retourner** on a rented car.
  2. App finds the client who has that car, dispatches `removeCarFromClient(clientId)`, then `returnCar(carId)`.

Note: The UI has simple checks (e.g., a client cannot rent a second car if they already have one).

---

## How to run ▶️

1. Install dependencies (already done if you followed the earlier steps):

```bash
npm install
```

2. Start dev server:

```bash
npm start
```

3. Open http://localhost:3000 to see the app.

---

## Files / Folder structure (key files)

```
my-app/
  src/
    components/
      carsSlice.js
      clientsSlice.js
    App.js
    App.css
    index.js
    store.js
  public/
    CC3-ISTA-DEVOWF201.pdf
  package.json
```

