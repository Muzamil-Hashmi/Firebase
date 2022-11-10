import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ (How it works)",
  rows: [
      {
          title: "What is Octafarnpm?,",
          content: `Octafarm is an auto-compounding yield aggregator on Binance Smart Chain (BSC) that seeks to streamline the yield farming lifecycle by automating the reinvestment process to maximize users retruns. Octafarm aims to be the easiest gateway for sophisticated and non-sophisticated users to access the world of DeFi yield farming in an automated, simple and safe manner. Octafarm is focused on building a fully-integrated DeFi ecosystem for both crypto natives and the mainstream population.
          `,
      },
      {
          title: "What is Auto-Compounding?",
          content:
              "Compounding is the process of reinvesting your returns frequently. Reinvesting will increase your capital base, thus you will earn a higher rate of returns compared to if you did not reinvest at all. Auto-compounding uses smart contracts to automate the compounding process. Octafarm maximizes users’ yields by auto-compounding for them multiple times daily",
      },
      {
          title: "What Issues is Octafarm trying to Solve?          ",
          content: `Reinvesting your yield farming and staking returns in DeFi is mostly a manual affair, requiring gas fees and times throughout the cumbersome process. Octafarm automates and streamlines the entire reinvestment process so you can maximize your yields in your sleep. We’re also trying to make things very simple for crypto natives and the general mass to facilitate DeFi mainstream adoption, since current DeFi protocols are relatively complex to use.
          `,
      },
      {
          title: "What Makes Octafarm Unique?          ",
          content: <p>Unlike other auto-compounding protocols out there, Octafarm is not only focused on creating a one-product solution but instead, we want to built a fully-integrated DeFi ecosystem for both crypto natives and the mainstream population. Auto-compounding is a brilliant solution to maximize one’s yields in an automated way without manual intervention, but Octafarm wants to go a step further and create ancillary products that will augment the DeFi user experience, especially those new to cryptocurrency and DeFi.

          </p>,
      },
      {
        title: "What is OCTF Tokens??          ",
        content: <p>OCTF is the native token of Octafarm. There are strong usecases for OCTF including: 1) Staking rewards, 2) Earning free partner tokens, 3) Earn trading fee revenue, 4) Participate in governance and 5) Submit strategies to earn performance fees. OCTF is based on a fixed-supply model that is integrated with a continual buyback-and-burn mechanism for maximum value-accrual and token value sustainability. This ensures that users will be holding an appreciating asset with strong fundamentals.

        </p>,
    },
    {
      title: "How Can I Take Part in Octafarm’s ICO?      ",
      content: <p>Octafarm will be giving an opportunity for the community to be part of our journey in being the gateway to DeFi yield farming. Users have two choices for participating in our ICO round; 1) Private Sale or 2) Public Sale. There is limited allocation for Private Sale, which will award private investors with 42.9% in bonuses. Anyone interested in the Private Sale round must whitelist their wallets first when the date is announced. For those that missed the whitelisting process or prefers to join the Public round, they can do so after the Private Round. There is no whitelist for the Public Round.

      </p>,
  },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function Faqs() {
  return (
    <div className="container-fluid mt-5" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

            
            <Faq
                data={data}
                styles={styles}
                config={config}
            />

</div>
          </div>
        </div>
    </div>
  )
}
