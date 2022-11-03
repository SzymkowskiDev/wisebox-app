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
      <div class="container-fluid mt-3 mb-4 p-0">
        <div class="row justify-content-between gx-5">
          <div class="col col-xxl-7">
            <NaviagtionBlock
              title="storage"
              image={travel}
              background="linear-gradient(98.18deg, rgba(199, 221, 255, 0.54) 0%, rgba(95, 137, 199, 0.72) 100%)"
            >
              10 PRODUCTS ARE OUT OF STOCK!
            </NaviagtionBlock>
          </div>
          <div class="w-100 d-block d-xxl-none"></div>
          <div class="col col-xxl-5 mt-5 mt-xxl-0">
            <NaviagtionBlock
              title="templates"
              image={folder}
              background="linear-gradient(108.97deg, #EEC799 0%, rgba(238, 219, 169, 0.42) 100%)"
            >
              MANAGE TEMPALTES.
            </NaviagtionBlock>
          </div>
        </div>
        <div class="row gx-5 mt-xxl-5">
          <div class="col col-xxl-5 mt-5 mt-xxl-0">
            <NaviagtionBlock
              title="orders"
              image={bag}
              reversed={true}
              background="linear-gradient(71.03deg, #D78EF0 0%, rgba(232, 169, 238, 0.42) 100%)"
            >
              MAKE AN ORDER.
            </NaviagtionBlock>
          </div>
          <div class="w-100 d-block d-xxl-none"></div>
          <div class="col col-xxl-7 mt-5 mt-xxl-0">
            <NaviagtionBlock
              title="analytics"
              image={calculator}
              reversed={true}
              background="linear-gradient(269.67deg, #99EEB1 0.56%, rgba(169, 238, 213, 0.42) 99.44%)"
            >
              GET YOUR REPORT.
            </NaviagtionBlock>
          </div>
        </div>
      </div>
      <div
        class="container rounded-bottom rounded-5 p-4 p-xl-2"
        style={{
          background:
            "linear-gradient(360deg, #FFF6A0 0%, rgba(255, 174, 100, 0.17) 100%)",
        }}
      >
        <div class="row align-items-center justify-content-center g-0">
          <div class="col col-xxl-3 p-xxl-4 mb-4 mb-xxl-0">
            <div class="text-center text-xxl-start">
              <h2 class="header-1 mb-3 mb-xxl-5">INCOME</h2>
              <p class="type-3">General statisctics about your income.</p>
            </div>
          </div>
          <div class="w-100 d-block d-xxl-none"></div>
          <div class="col col-xl-3 col-xxl-2 mx-4 d-flex justify-content-center d-xl-block">
            <IncomeBlock title="today" icon="trending_up" value={2137} />
          </div>
          <div class="w-100 d-block d-xl-none"></div>
          <div class="col col-xl-3 col-xxl-2 mx-4 mt-5 mt-xl-0 d-flex justify-content-center d-xl-block">
            <IncomeBlock title="this week" icon="pie_chart_50" value={6900} />
          </div>
          <div class="w-100 d-block d-xl-none"></div>
          <div class="col col-xl-3 col-xxl-2 mx-4 mt-5 mt-xl-0 d-flex justify-content-center d-xl-block">
            <IncomeBlock
              title="this month"
              icon="calendar_calendar"
              value={42000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
