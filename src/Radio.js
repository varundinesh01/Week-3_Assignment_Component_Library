import "./styles.css";
import { useState } from "react";
import { color, motion } from "framer-motion";

export default function Radio(props) {
  const { groupName = "group", value = "Value" } = props;
  return (
    <div>
      <lable>{value}</lable>

      <input type={"radio"} name={groupName} value={value} />
    </div>
  );
}
