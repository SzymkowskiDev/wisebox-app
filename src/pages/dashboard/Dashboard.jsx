import React from "react";
import Header from "./components/Header";

import { Users } from "../../layouts/Users";
import { Stockhouses } from "../../layouts/Stockhouses";
import NaviagtionBlock from "./components/NaviagtionBlock";

import travel from "../../assets/travel-dynamic-color.png";
import folder from "../../assets/folder-dynamic-color.png";
import bag from "../../assets/bag-dynamic-color.png";
import calculator from "../../assets/calculator-dynamic-color.png";
import IncomeBlock from "./components/IncomeBlock";

const Dashboard = () => {
  return (
    <>
      <Header user={Users.first} stock={Stockhouses[0]} />
      <div
        class="d-flex justify-content-between flex-wrap my-5"
        style={{ gap: "33px 0px" }}
      >
        <NaviagtionBlock
          title="storage"
          image={travel}
          isWide={true}
          background="linear-gradient(98.18deg, rgba(199, 221, 255, 0.54) 0%, rgba(95, 137, 199, 0.72) 100%)"
        >
          10 PRODUCTS ARE OUT OF STOCK!
        </NaviagtionBlock>
        <NaviagtionBlock
          title="templates"
          image={folder}
          background="linear-gradient(108.97deg, #EEC799 0%, rgba(238, 219, 169, 0.42) 100%)"
        >
          MANAGE TEMPALTES.
        </NaviagtionBlock>
        <NaviagtionBlock
          title="orders"
          image={bag}
          reversed={true}
          background="linear-gradient(71.03deg, #D78EF0 0%, rgba(232, 169, 238, 0.42) 100%)"
        >
          MAKE AN ORDER.
        </NaviagtionBlock>
        <NaviagtionBlock
          title="analytics"
          image={calculator}
          isWide={true}
          reversed={true}
          background="linear-gradient(269.67deg, #99EEB1 0.56%, rgba(169, 238, 213, 0.42) 99.44%)"
        >
          GET YOUR REPORT.
        </NaviagtionBlock>
      </div>
      <div
        class="d-flex align-items-center ps-5 rounded-bottom rounded-5"
        style={{
          background:
            "linear-gradient(360deg, #FFF6A0 0%, rgba(255, 174, 100, 0.17) 100%)",
          height: "251px",
        }}
      >
        <div
          class="mx-5 text-start"
          style={{
            maxWidth: "220px",
          }}
        >
          <h2 class="header-1 mb-5">INCOME</h2>
          <p class="type-3">General statisctics about your income.</p>
        </div>
        <div
          class="d-flex ms-4"
          style={{
            gap: "50px",
          }}
        >
          <IncomeBlock title="today" icon="trending_up" value={2137} />
          <IncomeBlock title="this week" icon="pie_chart_50" value={6900} />
          <IncomeBlock
            title="this month"
            icon="calendar_calendar"
            value={42000}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
