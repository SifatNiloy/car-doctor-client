import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="my-6">
      <h2 className="text-5xl text-center">Your Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Price</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow key={bookings._id} booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
