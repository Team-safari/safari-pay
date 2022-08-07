import React, { useState } from "react";
import "./hero.scss";

const DOLLAR_TO_NAIRA = 450;

function Hero() {
  const [ngnValue, setNgnValue] = useState("");
  const [usdValue, setUsdValue] = useState("");

  const handleUSDInput = (e) => {
    setUsdValue(e.target.value);
    const nairaValue = Number(e.target.value) * DOLLAR_TO_NAIRA;
    setNgnValue(nairaValue.toLocaleString());
  };

  const handleNGNInput = (e) => {
    setNgnValue(e.target.value);
  };

  return (
    <div className="hero">
      <div className="hero_container">
        <div className="hero_text">
          <h1>Make payments with E-Naira</h1>
          <p>
            Payments has never been easier, with Safari pay you can pay your
            bills, receive payments and save.{" "}
            <strong>All in cryptocurrency!</strong>
          </p>
        </div>
        <div className="hero_cta">
          <p>I want to buy</p>
          <div className="trade">
            <button>DAI</button>
            <button>ETH</button>
            <button>USDT</button>
            <button>BTC</button>
            <button>XTZ</button>
          </div>
          <button>Buy</button>
        </div>
        <div className="main_cta">
          <div className="header"></div>
          <div className="inputs">
            <div className="item">
              <label htmlFor="usd">you pay</label>
              <div>
                <div className="input">
                  <input
                    value={usdValue}
                    onChange={handleUSDInput}
                    type="number"
                    name="USD"
                    id="usd"
                    placeholder="0.00"
                  />
                </div>
                <span>
                  <img
                    src="https://ramp.network/assets/images/icons/crypto/usdc.svg"
                    alt="USD logo"
                  />
                  <p>USD</p>
                </span>
              </div>
            </div>
            <div className="item">
              <label htmlFor="ngn">you get</label>
              <div>
                <div className="input">
                  <input
                    value={ngnValue}
                    onChange={handleNGNInput}
                    type="text"
                    name="NGN"
                    id="ngn"
                    placeholder="0.00"
                    readOnly
                  />
                </div>
                <span>
                  <img
                    src="https://rampnetwork.github.io/assets/flags/ng.svg"
                    alt="NGN logo"
                  />
                  <p>NGN</p>
                </span>
              </div>
            </div>
          </div>
          <button>
            Proceed • Total $60 <span> ⇒ </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
