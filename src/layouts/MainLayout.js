import React from "react";
import logo from "./../assets/logo.svg";
import "./../styles/MainLayout.scss";
import { TipsCard } from "../commons/TipsCard";
import { LeftHeader } from "./LeftHeader";
import { LeftTxt } from "./LeftTxt";
import "./../styles/coolicons.css";
import "./../styles/button.scss";
import { Tips } from "../commons/Tips";

const MainLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <img src={logo} alt="logo" className="logo-header" />
          <div className="container-fluid d-flex flex-column">
            <LeftTxt text={"MAIN"} />
            <LeftHeader
              icon={<i className="ci-home_alt_outline" />}
              text={"DASHBOARD"}
            />

            <LeftTxt text={"STOCKHOUSE'S"} />
            <LeftHeader icon={<i className="ci-label" />} text={"Storage"} />
            <LeftHeader
              icon={<i className="ci-window_code_block" />}
              text={"Templates"}
            />
            <LeftHeader icon={<i className="ci-color" />} text={"Orders"} />
            {/* <LeftHeader icon={home_alt_outline} text={"Analytics"} /> */}
            <LeftTxt text={"USER'S"} />
            <LeftHeader
              icon={<i className="ci-settings" />}
              text={"Settings"}
            />
          </div>
          <TipsCard tips={Tips} />
        </div>
        <div className="col-8">
          <button type="button" className="btn-bd-primary">
            Primary
          </button>
        </div>
        <div className="col-2">Column</div>
      </div>
    </div>
  );
};

export default MainLayout;
