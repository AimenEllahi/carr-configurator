import React, { useState } from "react";
import "./ColorSelector.css";
import { useColorStore } from "../Utils/store";

const BodyColors = [
  {
    hex: "#338895",
  },
  {
    hex: "#E8D5AA",
  },
  {
    hex: "#FF7518",
  },
  {
    hex: "#F52504",
  },
  {
    hex: "#000080",
  },
  {
    hex: "#000000",
  },
  {
    hex: "#30C5C8",
  },
  {
    hex: "#FDD401",
  },
  {
    hex: "#C0C0C0",
  },
  {
    hex: "#32CD32",
  },
  {
    hex: "#41ABFE",
  },
];

const RimColors = [
  {
    hex: "#E3E6D5",
  },
  {
    hex: "#000",
  },
  {
    hex: "red",
  },
  {
    hex: "#62503E",
  },
];

const RoofColors = [
  {
    hex: "#338895",
  },
  {
    hex: "#E8D5AA",
  },
  {
    hex: "#FF7518",
  },
  {
    hex: "#F52504",
  },
  {
    hex: "#000080",
  },
  {
    hex: "#000000",
  },
  {
    hex: "#30C5C8",
  },
  {
    hex: "#FDD401",
  },
  {
    hex: "#C0C0C0",
  },
  {
    hex: "#32CD32",
  },
  {
    hex: "#41ABFE",
  },
];
const ColorSelector = () => {
  const activeBodyColor = useColorStore((state) => state.activeBodyColor);
  const activeRimColor = useColorStore((state) => state.activeRimColor);
  const activeRoofColor = useColorStore((state) => state.activeRoofColor);

  const setActiveBodyColor = useColorStore((state) => state.setActiveBodyColor);
  const setActiveRimColor = useColorStore((state) => state.setActiveRimColor);
  const setActiveRoofColor = useColorStore((state) => state.setActiveRoofColor);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "15%",
        right: "6rem",
        width: "400px",
        height: "500px",
        // border: '3px solid #f00',
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div className='color-div'>
        <h3>Body Colors</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {BodyColors.map((color, index) => (
            <div
              key={index}
              className={`color-circle-div ${
                activeBodyColor === color ? "active" : ""
              }`}
            >
              <div
                className='color-circle'
                style={{
                  backgroundColor: color.hex,
                }}
                onClick={() => setActiveBodyColor(color)}
              />
            </div>
          ))}
        </div>

        <h3>Rim Colors</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {RimColors.map((color, index) => (
            <div
              key={index}
              className={`color-circle-div ${
                activeRimColor === color ? "active" : ""
              }`}
            >
              <div
                className='color-circle'
                style={{
                  backgroundColor: color.hex,
                }}
                onClick={() => setActiveRimColor(color)}
              />
            </div>
          ))}
        </div>

        <h3>Roof Colors</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {RoofColors.map((color, index) => (
            <div
              key={index}
              className={`color-circle-div ${
                activeRoofColor === color ? "active" : ""
              }`}
            >
              <div
                className='color-circle'
                style={{
                  backgroundColor: color.hex,
                }}
                onClick={() => setActiveRoofColor(color)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
