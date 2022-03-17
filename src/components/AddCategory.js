import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      inputValue.trim() !== "" &&
      !categories.find((category) => category === inputValue)
    ) {
      setCategories((preState) => [inputValue, ...preState]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default AddCategory;
