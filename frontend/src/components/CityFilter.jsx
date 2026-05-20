import React from "react";

const CityFilter = ({ records = [], value, onChange, label = "City" }) => {
  const cities = [...new Set(records.map((record) => record.city))].sort();

  return (
    <div className="w-full md:w-52">
      <label className="mb-2 block text-label-md uppercase tracking-wider text-on-surface-variant">{label}</label>
      <select className="input-field w-full" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
