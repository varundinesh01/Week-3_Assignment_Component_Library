import { useState } from "react";
import { motion } from "framer-motion";

export default function SwitchComponent(props) {
  const { label = "Label", labelonleft = true, disabled = false } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
    props.onToggle && props.onToggle(!isChecked);
  };

  const switchStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: labelonleft ? "flex-start" : "flex-end",
    marginBottom: "10px"
  };

  const switchLabelStyle = {
    marginRight: labelonleft ? "10px" : "0",
    marginLeft: labelonleft ? "0" : "10px",
    fontSize: "16px",
    color: disabled ? "#ccc" : "#000"
  };

  const switchSliderStyle = {
    display: "inline-block",
    width: "50px",
    height: "30px",
    borderRadius: "15px",
    backgroundColor: isChecked ? "#5cb85c" : "#d9534f",
    position: "relative",
    cursor: disabled ? "not-allowed" : "pointer"
  };

  const sliderStyle = {
    position: "absolute",
    top: "2px",
    left: isChecked ? "20px" : "2px",
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    transition: "all 0.2s ease-in-out"
  };

  return (
    <div style={switchStyle}>
      {labelonleft && <div style={switchLabelStyle}>{label}</div>}
      <div style={switchSliderStyle} onClick={handleToggle}>
        <div style={sliderStyle}></div>
      </div>
      {!labelonleft && <div style={switchLabelStyle}>{label}</div>}
    </div>
  );
}
