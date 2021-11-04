"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.number.to-fixed.js");

require("core-js/modules/es.number.parse-float.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireDefault(require("react"));

require("../css/RateCard.css");

var _SelectCurrency = _interopRequireDefault(require("../../common/SelectCurrency"));

var _Amount = _interopRequireDefault(require("../../common/Amount"));

var _antd = require("antd");

var _bs = require("react-icons/bs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RateCard extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currency: ""
    };
    this.chooseCurrency = this.chooseCurrency.bind(this);
    this.onChange = this.onChange.bind(this);
  } //-> Handle Change


  onChange(_ref) {
    let {
      value
    } = _ref;

    if (value > 9999) {
      const amountValue = value.toLocaleString("en-US");
      this.setState({
        amount: amountValue
      });
    } else {
      this.setState({
        amount: value
      });
    }
  } //-> Select Currency


  chooseCurrency(value) {
    this.setState({
      currency: value
    });
  }

  render() {
    const {
      amount,
      currency
    } = this.state;
    const {
      cardBackgroundColor,
      cardSpacing,
      cardFontStyle,
      cardGradient,
      gradientType,
      gradientDirection,
      gradientColorOne,
      gradientColorTwo
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "rate__card_container",
      style: {
        backgroundColor: "".concat(cardBackgroundColor),
        padding: "".concat(cardSpacing, "px"),
        fontFamily: "".concat(cardFontStyle),
        backgroundImage: cardGradient && gradientType && gradientDirection && gradientColorOne && gradientColorTwo ? "".concat(gradientType, "(to ").concat(gradientDirection, ", ").concat(gradientColorOne, ", ").concat(gradientColorTwo, ")") : null
      }
    }, /*#__PURE__*/_react.default.createElement(_antd.Divider, {
      orientation: "left"
    }), /*#__PURE__*/_react.default.createElement(_antd.Row, {
      gutter: [16, 16]
    }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "rate__select_box"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h5", null, "Base Currency"), /*#__PURE__*/_react.default.createElement(_SelectCurrency.default, {
      selectWidth: 200,
      onChange: this.chooseCurrency,
      value: currency
    })))), /*#__PURE__*/_react.default.createElement(_antd.Col, {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "rate__amount_box"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h5", null, "Amount"), /*#__PURE__*/_react.default.createElement(_Amount.default, {
      width: 200,
      value: amount,
      onChange: value => this.onChange({
        value
      })
    }))))), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
      orientation: "left"
    }), /*#__PURE__*/_react.default.createElement(_antd.Row, null, /*#__PURE__*/_react.default.createElement(_antd.Col, {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24
    }, /*#__PURE__*/_react.default.createElement("div", null, Convert({
      amount,
      currency
    })))));
  }

} //-> function to remove commas


function removeCommas(amount) {
  while (amount.search(",") >= 0) {
    amount = (amount + "").replace(",", "");
  }

  return parseInt(amount);
} //-> calculate US Dollar Amount


function calculateUSD(amount) {
  const value = amount * 0.33;
  const calculatedAmount = Number.parseFloat(value).toFixed(2);

  if (calculatedAmount > 9999) {
    return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return calculatedAmount;
  }
} //-> calculate XLM Amount


function calculateXLM(amount) {
  const value = amount * 3.01;
  const calculatedAmount = Number.parseFloat(value).toFixed(2);

  if (calculatedAmount > 9999) {
    return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return calculatedAmount;
  }
} //-> calculate RWF Amount


function calculateRWF(_ref2) {
  let {
    amount,
    currency
  } = _ref2;

  if (currency === "usd") {
    const value = amount * 13000;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999) {
      return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return calculatedAmount;
    }
  } else {
    const value = amount * 4290;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999) {
      return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return calculatedAmount;
    }
  }
} //-> Calculate KES Amount


function calculateKES(_ref3) {
  let {
    amount,
    currency
  } = _ref3;

  if (currency === "usd") {
    const value = amount * 115;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999) {
      return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return calculatedAmount;
    }
  } else {
    const value = amount * 37.95;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999) {
      return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return calculatedAmount;
    }
  }
} //-> Calculate TZS Amount


function calculateTZS(_ref4) {
  let {
    amount,
    currency
  } = _ref4;

  if (currency === "usd") {
    const value = amount * 2300;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999) {
      return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return calculatedAmount;
    }
  } else {
    const value = amount * 765.6;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999) {
      return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return calculatedAmount;
    }
  }
} //-> Convert


function Convert(_ref5) {
  let {
    amount,
    currency
  } = _ref5;

  if (amount && currency) {
    if (isNaN(amount)) {
      amount = removeCommas(amount);
    }

    switch (currency) {
      case "usd":
        return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Row, {
          gutter: [16, 16]
        }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "XLM")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateXLM(amount)))))), /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "KES")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateKES({
          amount,
          currency
        }))))))), /*#__PURE__*/_react.default.createElement(_antd.Row, {
          gutter: [16, 16]
        }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "RWF")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateRWF({
          amount,
          currency
        })))))), /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "TZS")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateTZS({
          amount,
          currency
        }))))))));

      case "xlm":
        return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Row, {
          gutter: [16, 16]
        }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "USD")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateUSD(amount)))))), /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "KES")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateKES({
          amount,
          currency
        }))))))), /*#__PURE__*/_react.default.createElement(_antd.Row, {
          gutter: [16, 16]
        }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "RWF")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateRWF({
          amount,
          currency
        })))))), /*#__PURE__*/_react.default.createElement(_antd.Col, {
          xs: 24,
          sm: 24,
          md: 12,
          lg: 12,
          xl: 12
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "rate__box"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_bs.BsCircleFill, {
          size: "2.2em",
          color: "#306CF5"
        }), /*#__PURE__*/_react.default.createElement("h5", null, "TZS")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, calculateTZS({
          amount,
          currency
        }))))))));

      default:
        return null;
    }
  }
}

var _default = RateCard;
exports.default = _default;