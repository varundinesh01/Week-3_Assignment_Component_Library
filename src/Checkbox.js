import { useState } from "react";

export default function Checkbox(props) {
  const { label = "Label", disabled = false } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsChecked((prevState) => !prevState);
    }
  };

  const checkboxStyle = {
    display: "flex",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer"
  };

  const labelStyle = {
    marginLeft: "8px",
    fontSize: "16px",
    color: disabled ? "#ccc" : "#000"
  };

  return (
    <div style={checkboxStyle} onClick={handleToggle}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
      />
      <label style={labelStyle}>{label}</label>
    </div>
  );
}
