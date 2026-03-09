import React, { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bookings")
      .then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      {bookings.map(b => (
        <div key={b._id}>
          {b.destination} - ₹{b.price}
        </div>
      ))}
    </div>
  );
}

export default Bookings;
