import React from "react";
import logo from "./../assets/logo.png";
import "./../styles/MainLayout.scss";
import { TipsCard } from "../shared/TipsCard";
import { GrayHeader } from "./GrayHeader";
import "./../styles/coolicons.css";
import "./../styles/button.scss";
import { Tips } from "../shared/Tips";
import { UserProfile } from "./UserProfile";
import { Users } from "./Users.js";
import { StockhouseCard } from "./StockhouseCard";
import { Stockhouses } from "./Stockhouses";

const MainLayout = ({ children }) => {
  return (
    <div className="container-fluid px-3">
      <div className="row">
        <div className="col-2 d-flex flex-column py-1 py-xxl-2 justify-content-between layout--nav">
          <div className="w-100 d-flex flex-column align-items-center mt-xxl-2">
            <img
              className="img-fluid px-5 mt-3 mt-xxl-2"
              src={logo}
              alt="logo"
            />

            <div className="container-fluid d-flex flex-column">
              <span className="d-flex txt-2 py-1 py-xxl-2 mt-xxl-1 mt-xxl-3 ">
                MAIN
              </span>
              <GrayHeader icon={"home_alt_outline"} text={"Dashboard"} />

              <span className="d-flex txt-2 py-1 py-xxl-2 mt-xxl-1 mt-xxl-3 ">
                STOCKHOUSE'S
              </span>
              <GrayHeader icon={"label"} text={"Storage"} />
              <GrayHeader icon={"window_code_block"} text={"Templates"} />
              <GrayHeader icon={"color"} text={"Orders"} />
              <GrayHeader icon={"bar_chart_alt"} text={"Analytics"} />
              <span className="d-flex txt-2 py-1 py-xxl-2 mt-xxl-1 mt-xxl-3 ">
                USER'S
              </span>
              <GrayHeader icon={"settings"} text={"Settings"} />
            </div>
          </div>
          <div className="px-xxl-1">
            <TipsCard tips={Tips.layoutleft} />
          </div>
        </div>
        <div className="col-8 offset-2 layout--content px-5">{children}</div>
        <div className="col-2 layout--nav d-flex flex-column justify-content-between py-2">
          <div className="px-xxl-2">
            <UserProfile user={Users.first} />

            <span className="d-flex txt-2 py-1 py-xxl-2 mt-xxl-1 mt-xxl-3 ">
              YOUR STOCKHOUSES
            </span>

            {Stockhouses.map((stockhouse) => (
              <StockhouseCard data={stockhouse} />
            ))}
          </div>

          <div className="px-xxl-1">
            <TipsCard tips={Tips.layoutright} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
