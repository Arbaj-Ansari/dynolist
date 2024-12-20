import React, { useState } from "react";
import "./Car.css";
import image from "./res/car.jpg";

function Car() {
  const [car, setCar] = useState(["BMW", "THAR"]); // Car List State
  const [newCar, setNewCar] = useState(""); // Input Field State

  // Add Car to the List
  const addCar = () => {
    if (newCar.trim() === "") {
      alert("Please enter a car name.");
      return;
    }

    const isDuplicate = car.some((c) => c.toLowerCase() === newCar.toLowerCase());

    if(isDuplicate){
      alert("This Car Is already in list");
    }else{
      setCar([...car, newCar]);
    setNewCar(""); // Clear input field

    }

    
  };

  // Delete Car from the List
  const deleteCar = (index) => {
    setCar(car.filter((_, i) => i !== index));
  };

  return (
    <div className="main-container">
      {/* Background Image */}
      <div className="background-image" />

      {/* Content Overlay */}
      <div className="content">
        <h2 className="heading">My Favourite Cars</h2>
        <ul className="car-list">
          {car.map((x, index) => (
            <li key={index} className="car-item">
              {x}
              <button
                className="delete-button"
                onClick={() => deleteCar(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Input and Add Button */}
        <div className="add-container">
          <input
            type="text"
            placeholder="Enter car name"
            value={newCar}
            onChange={(e) => setNewCar(e.target.value)}
            className="add-input"
          />
          <button className="add-button" onClick={addCar}>
            Add Car
          </button>
        </div>
      </div>
    </div>
  );
}

export default Car;
