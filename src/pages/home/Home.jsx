import React from "react";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import OfferCard from "../../components/offer-card/OfferCard";

import "./home.scss";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="values">
        <div className="container">
          <h3>what we offer</h3>
          <h1>The Future is Digital Currency</h1>
          <div className="cards">
            <OfferCard icon="./money.svg" title="Pay tuition">
              <p>
                You can pay your children’s tuition now by just funding your
                eNaira wallet on <strong>SafariPay</strong>.
              </p>
            </OfferCard>
            <OfferCard
              icon="./arowangle.svg"
              title="Receive money from  Abroad"
            >
              <p>
                Now your uncle or Aunt can easily send money to you straight
                without delay through SafariPay.
              </p>
            </OfferCard>
            <OfferCard icon="./money.svg" title="Pay your bills seamlessly">
              <p>
                No more multiple apps to pay bills with SafariPay, all your
                DSTv, PHCN bills can be paid seamlessly.
              </p>
            </OfferCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
