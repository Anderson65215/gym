import React from 'react';

const Checkbox = ({ id, category, selectedCategory, setSelectedCategory }) => {
  const handleCheckboxClick = () => {
    setSelectedCategory(category);
  };

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-green-600"
        checked={selectedCategory === category}
        onClick={handleCheckboxClick}
      />
      <span className="ml-2 text-gray-700">{id}</span>
    </label>
  );
};

export default Checkbox;
