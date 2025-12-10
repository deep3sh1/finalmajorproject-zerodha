// SupportPage.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function SupportPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "accountOpening",
      title: "Account Opening",
      content: [
        "How to open a demat account online?",
        "Documents required for NRI / Corporate sign‑up",
        "Account fees & charges",
      ],
    },
    {
      id: "transactionsCharges",
      title: "Transactions & Charges",
      content: [
        "Securities transaction tax (STT/CTT) – explanation.",
        "Exchange & turnover charges (NSE, BSE, MCX).",
        "Call & Trade, Stamp, DP, Pledge charges etc.",
      ],
    },
    {
      id: "accountMaintenance",
      title: "Account Maintenance",
      content: [
        "Demat AMC charges based on holdings value (BSDA).",
        "Other related maintenance or courier charges.",
      ],
    },
    {
      id: "nriAccounts",
      title: "NRI Accounts",
      content: [
        "PIS vs Non-PIS account charges.",
        "Fund transfer rules for NRI accounts.",
        "Documents required for account opening.",
      ],
    },
    {
      id: "tradingAndBrokerage",
      title: "Trading & Brokerage",
      content: [
        "Intraday and F&O charges.",
        "Delivery charges and limits.",
        "Call & Trade fees and rules.",
      ],
    },
    {
      id: "marginAndLoans",
      title: "Margin & Loans",
      content: [
        "Margin Trading Facility (MTF) interest and charges.",
        "Loan against shares rules.",
        "Pledge and unpledge fees.",
      ],
    },
    {
      id: "others",
      title: "Other Services",
      content: [
        "Corporate actions like buyback/OFS.",
        "Payment gateway charges.",
        "Delayed payment and debit balance rules.",
      ],
    },
  ];

  return (
    <div className="container my-5">
      {sections.map((sec) => (
        <div className="row mb-3 border-bottom" key={sec.id}>
          <div
            className="col-12 py-3 d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => toggle(sec.id)}
          >
            <h4 className="mb-0">{sec.title}</h4>
            <FontAwesomeIcon
              icon={openSection === sec.id ? faMinus : faPlus}
              size="lg"
            />
          </div>
          {openSection === sec.id && (
            <div className="col-12 pb-3">
              <ul style={{ lineHeight: "1.8", fontSize: "1rem", marginLeft: "20px" }}>
                {sec.content.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" style={{ color: "#1a73e8", textDecoration: "underline" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SupportPage;
