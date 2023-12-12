import React from "react";

const BookingRow = ({ booking }) => {
  const { _id, customerName, email, price, service, date, img } = booking;

  const handleDelete = () => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(``)
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-xl w-24 h-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <button onClick={handleDelete} className="btn btn-ghost btn-xs">
          delete
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
