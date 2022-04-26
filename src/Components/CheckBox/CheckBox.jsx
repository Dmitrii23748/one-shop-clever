import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./CheckBox.css";

function CheckBox(props) {
  const inputRef = useRef(null);
  const handleChange = () => {
      if(props.onChange) {
        props.onChange(inputRef.current);
      }
  } 
  return (
    <label className="custom-checkbox-label real-label" htmlFor={props.label} >
      <input
        data-test-id={`filter-${props.paramsArrProp}-${props.itemParams}`}
        className="real-checkbox"
        type="checkbox"
        ref={inputRef}
        onChange={handleChange}
        checked={props.checked}
        id={props.label}
      />
      <span className="custom-checkbox__checkmark custom-checkbox"></span>
      {props.label}
    </label>
  );
}

export default CheckBox;

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
