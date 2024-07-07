import React from "react";
import "./PlacesTable.css";

const PlacesTable = ({ places }) => {
  return (
    <div className="places-table">
    <div className="table-container">
      {places.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Place Name</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{place.name}</td>
                <td>{place.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default PlacesTable;
