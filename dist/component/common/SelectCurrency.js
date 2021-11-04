"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectCurrency = _ref => {
  let {
    selectWidth,
    onChange
  } = _ref;
  //-> antd select option initialization
  const {
    Option
  } = _antd.Select;
  return /*#__PURE__*/_react.default.createElement(_antd.Select // defaultValue="usd"
  , {
    placeholder: "Select Currency (USD/XLM)",
    style: {
      width: selectWidth
    },
    filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
    onChange: onChange,
    showSearch: true,
    optionFilterProp: "children"
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: "usd"
  }, "USD"), /*#__PURE__*/_react.default.createElement(Option, {
    value: "xlm"
  }, "XLM"));
};

var _default = SelectCurrency;
exports.default = _default;