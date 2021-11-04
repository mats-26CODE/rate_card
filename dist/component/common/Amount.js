"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Amount = _ref => {
  let {
    value,
    onChange,
    width
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    min: 0,
    value: value,
    onChange: onChange,
    style: {
      width: width
    }
  });
};

var _default = Amount;
exports.default = _default;