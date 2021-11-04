import React from "react";
import { InputNumber } from "antd";

const Amount = ({ value, onChange, width }) => {
  return <InputNumber min={0} value={value} onChange={onChange} style={{ width: width}}  />;
};

export default Amount;
