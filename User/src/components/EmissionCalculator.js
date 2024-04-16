import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../components/Navbar";

function EmissionCalculator() {
  const [electricity, setElectricity] = useState("");
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [electricityEmissions, setElectricityEmissions] = useState(0);
  const [fuelEmissions, setFuelEmissions] = useState(0);

  // Example conversion factors:
  const electricityConversionFactor = 0.92; // kg CO2 per kWh
  const fuelConversionFactor = 2.31; // kg CO2 per liter of fuel

  const handleCalculate = () => {
    const calculatedElectricityEmissions =
      electricity * electricityConversionFactor;
    const calculatedFuelEmissions = fuelConsumption * fuelConversionFactor;
    setElectricityEmissions(calculatedElectricityEmissions);
    setFuelEmissions(calculatedFuelEmissions);
  };

  return (
    <>
      <Navbar />
      <div
        className="bookings"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2 style={{ marginTop: "40px" }}>Emission Calculator</h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "20rem", margin: "40px" }}>
            <Card.Body>
              <Card.Title>Electricity Usage Calculator</Card.Title>
              <Form.Group>
                <Form.Label>Electricity Usage (kWh):</Form.Label>
                <Form.Control
                  type="number"
                  value={electricity}
                  onChange={(e) => setElectricity(e.target.value)}
                />
              </Form.Group>
              <Button className="bg-success" onClick={handleCalculate}>
                Calculate Emissions
              </Button>
              <p className="mt-2">
                Estimated Electricity Emissions:{" "}
                {electricityEmissions.toFixed(2)} kg CO2
              </p>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", margin: "40px" }}>
            <Card.Body>
              <Card.Title>Fuel Consumption Calculator</Card.Title>
              <Form.Group>
                <Form.Label>Fuel Consumption (liters):</Form.Label>
                <Form.Control
                  type="number"
                  value={fuelConsumption}
                  onChange={(e) => setFuelConsumption(e.target.value)}
                />
              </Form.Group>
              <Button className="bg-success" onClick={handleCalculate}>
                Calculate Emissions
              </Button>
              <p className="mt-2">
                Estimated Fuel Emissions: {fuelEmissions.toFixed(2)} kg CO2
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default EmissionCalculator;
