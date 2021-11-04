import React from "react";
import "../css/RateCard.css";
import SelectCurrency from "../../common/SelectCurrency";
import Amount from "../../common/Amount";
import { Row, Col, Divider } from "antd";
import { BsCircleFill } from "react-icons/bs";

class RateCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      currency: "",
    };
    this.chooseCurrency = this.chooseCurrency.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  //-> Handle Change
  onChange({ value }) {
    if (value > 9999) {
      const amountValue = value.toLocaleString("en-US");
      this.setState({ amount: amountValue });
    } else {
      this.setState({ amount: value });
    }
  }

  //-> Select Currency
  chooseCurrency(value) {
    this.setState({ currency: value });
  }

  render() {
    const { amount, currency } = this.state;
    const {
      cardBackgroundColor,
      cardSpacing,
      cardFontStyle,
      cardGradient,
      gradientType,
      gradientDirection,
      gradientColorOne,
      gradientColorTwo,
    } = this.props;
    return (
      <div
        className={"rate__card_container"}
        style={{
          backgroundColor: `${cardBackgroundColor}`,
          padding: `${cardSpacing}px`,
          fontFamily: `${cardFontStyle}`,
          backgroundImage:
            cardGradient &&
            gradientType &&
            gradientDirection &&
            gradientColorOne &&
            gradientColorTwo
              ? `${gradientType}(to ${gradientDirection}, ${gradientColorOne}, ${gradientColorTwo})`
              : null,
        }}
      >
        <Divider orientation="left" />
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className={"rate__select_box"}>
              <div>
                <h5>Base Currency</h5>
                <SelectCurrency
                  selectWidth={200}
                  onChange={this.chooseCurrency}
                  value={currency}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className={"rate__amount_box"}>
              <div>
                <h5>Amount</h5>
                <Amount
                  width={200}
                  value={amount}
                  onChange={(value) => this.onChange({ value })}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Divider orientation="left" />
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div>{Convert({ amount, currency })}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

//-> function to remove commas
function removeCommas(amount) {
  while (amount.search(",") >= 0) {
    amount = (amount + "").replace(",", "");
  }
  return parseInt(amount);
}

//-> calculate US Dollar Amount
function calculateUSD(amount) {
  const value = amount * 0.33;
  const calculatedAmount = Number.parseFloat(value).toFixed(2);

  if (calculatedAmount > 9999) {
    return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return calculatedAmount;
  }
}

//-> calculate XLM Amount
function calculateXLM(amount) {
  const value = amount * 3.01;
  const calculatedAmount = Number.parseFloat(value).toFixed(2);

  if (calculatedAmount > 9999) {
    return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return calculatedAmount;
  }
}

//-> calculate RWF Amount
function calculateRWF({ amount, currency }) {
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
}

//-> Calculate KES Amount
function calculateKES({ amount, currency }) {
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
}

//-> Calculate TZS Amount
function calculateTZS({ amount, currency }) {
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
}

//-> Convert
function Convert({ amount, currency }) {
  if (amount && currency) {
    if (isNaN(amount)) {
      amount = removeCommas(amount);
    }

    switch (currency) {
      case "usd":
        return (
          <div>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>XLM</h5>
                    </div>
                    <div>
                      <p>{calculateXLM(amount)}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>KES</h5>
                    </div>
                    <div>
                      <p>{calculateKES({ amount, currency })}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>RWF</h5>
                    </div>
                    <div>
                      <p>{calculateRWF({ amount, currency })}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>TZS</h5>
                    </div>
                    <div>
                      <p>{calculateTZS({ amount, currency })}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      case "xlm":
        return (
          <div>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>USD</h5>
                    </div>
                    <div>
                      <p>{calculateUSD(amount)}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>KES</h5>
                    </div>
                    <div>
                      <p>{calculateKES({ amount, currency })}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>RWF</h5>
                    </div>
                    <div>
                      <p>{calculateRWF({ amount, currency })}</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className={"rate__box"}>
                  <div>
                    <div>
                      <BsCircleFill size={"2.2em"} color={"#306CF5"} />
                      <h5>TZS</h5>
                    </div>
                    <div>
                      <p>{calculateTZS({ amount, currency })}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      default:
        return null;
    }
  }
}

export default RateCard;
