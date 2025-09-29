import React from "react";
import rice10 from "../../assets/images/R.jpeg";
import "./RiceCategories.css";

const riceCategories: string[] = [
  "Basmati Rice",
  "Non-Basmati Rice",
  "Raw Rice",
  "Broken Rice",
  "Parboiled Rice",
  "Organic Rice",
  "Flavored Rice",
];

const RiceCategories: React.FC = () => {
  return (
    <div className="rice-categories-container">
      {riceCategories.map((category: string, index: number) => (
        <div className="rice-card" key={index}>
          <img src={rice10} alt={category} className="rice-image" />
          <h3 className="rice-name">{category}</h3>
        </div>
      ))}
    </div>
  );
};

export default RiceCategories;
