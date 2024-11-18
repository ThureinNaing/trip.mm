import React, { useState } from "react";
import "./index.css";
import useFetch from "../Hooks/useFetch";
export default function Index() {
  // to change url
  let [url, setUrl] = useState("http://localhost:3001/trips");
  let { data: trips, loading, error } = useFetch(url);
  return (
    <div className="container">
      {error && <p>{error}</p>}
      {!error && (
        <div className="flex-container">
          <h1>Ready to go?</h1>
          {loading && <p>Loading page</p>}
          <div>
            <button onClick={() => setUrl("http://localhost:3001/trips")}>
              All
            </button>
            <button
              onClick={() =>
                setUrl("http://localhost:3001/trips?location=Myanmar")
              }
            >
              Location in Myanmar
            </button>
          </div>
          <ul className="trip-list">
            {trips &&
              trips.map((trip) => (
                <li key={trip.id} className="trip">
                  <h3>{trip.name}</h3>
                  <p>price - {trip.price} mmk</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
