import { useState } from "react";

export default function SegmentedButton(props) {
  const {
    options = ["Day", "Month", "Year"],
    defaultSelectedIndex = 0,
    onChange
  } = props;
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  const handleClick = (index) => {
    setSelectedIndex(index);
    onChange && onChange(options[index]);
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontWeight: 500
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
    color: "#fff"
  };

  const lastButtonStyle = {
    ...buttonStyle,
    borderRadius: "0 4px 4px 0"
  };

  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          style={
            index === selectedIndex
              ? index === options.length - 1
                ? selectedButtonStyle
                : {
                    ...selectedButtonStyle,
                    borderRight: "none"
                  }
              : index === options.length - 1
              ? lastButtonStyle
              : { ...buttonStyle, borderRight: "none" }
          }
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
