import React from "react";
import { Select } from "antd";

const SelectCurrency = ({ selectWidth, onChange }) => {
  //-> antd select option initialization
  const { Option } = Select;
  return (
    <Select
      // defaultValue="usd"
      placeholder='Select Currency (USD/XLM)'
      style={{ width: selectWidth }}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={onChange}
      showSearch
      optionFilterProp="children"
    >
      <Option value="usd">USD</Option>
      <Option value="xlm">XLM</Option>
    </Select>
  );
};

export default SelectCurrency;
