import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");

  const bookTrip = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/bookings`, {
        destination,
        price,
        date: new Date()
      });
      alert("Booking Created!");
    } catch (err) {
      console.error(err);
      alert("Failed to create booking");
    }
  };

  return (
    <div>
      <h2>Book a Trip</h2>
      <input
        placeholder="Destination"
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={bookTrip}>Book Now</button>
    </div>
  );
}

export default Home;
~                   
