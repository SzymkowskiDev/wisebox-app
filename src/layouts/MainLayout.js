import React from "react";
import logo from "./../assets/logo.svg";
import "./../styles/MainLayout.scss";
import { TipsCard } from "../commons/TipsCard";
import { GrayHeader } from "./../commons/GrayHeader";
import { BlackTxt } from "./../commons/BlackTxt";
import "./../styles/coolicons.css";
import "./../styles/button.scss";
import { Tips } from "../commons/Tips";
import { UserProfile } from "./UserProfile";
import { Users } from "./Users.js";
import { StockhouseCard } from "./StockhouseCard";
import { Stockhouses } from "./Stockhouses";

const MainLayout = () => {
  return (
    <div className="container-fluid px-3">
      <div className="row">
        <div className="col-2 border-end leftSectionShadow">
          <img src={logo} alt="logo" className="p-2 pt-4" />
          <div className="container-fluid d-flex flex-column">
            <BlackTxt text={"MAIN"} />
            <GrayHeader
              icon={<i className="ci-home_alt_outline" />}
              text={"DASHBOARD"}
            />

            <BlackTxt text={"STOCKHOUSE'S"} />
            <GrayHeader icon={<i className="ci-label" />} text={"Storage"} />
            <GrayHeader
              icon={<i className="ci-window_code_block" />}
              text={"Templates"}
            />
            <GrayHeader icon={<i className="ci-color" />} text={"Orders"} />
            {/* <LeftHeader icon={home_alt_outline} text={"Analytics"} /> */}
            <BlackTxt text={"USER'S"} />
            <GrayHeader
              icon={<i className="ci-settings" />}
              text={"Settings"}
            />
          </div>
          <div className="d-flex align-items-end">
            <TipsCard tips={Tips.layoutleft} />
          </div>
        </div>
        <div className="col-8 bgColor"></div>
        <div className="col-2">
          <UserProfile user={Users.first} />
          <div className="mb-4">
            <BlackTxt text={"YOUR STOCKHOUSES"} />
          </div>
          {Stockhouses.map((stockhouse) => (
            <StockhouseCard data={stockhouse} />
          ))}
          <div className="d-flex align-items-end">
            <TipsCard tips={Tips.layoutright} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
