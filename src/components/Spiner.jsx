import React from "react";
import { FaSpinner } from "react-icons/fa";
import '../assets/Spiner.css';

export default function Spiner() {
  return (
    <div className="spinner">
      <FaSpinner className="spinning" size={60} />
    </div>
  );
}
