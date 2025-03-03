import { useState } from "react";

const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="capitalize">{label}</span>
        <span>${selectedPrice / 100}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        step={step}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md"> Max : $ {maxPrice / 100}</span>
      </div>
    </div>
  );
};

export default FormRange;
