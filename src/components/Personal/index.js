import React from "react";
import "./Personal.css";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";
import Skills from "../Skills";
import SpeakLanguage from "../SpeakLanguage";
import PersonalDetails from "./PersonalDetails";
import Avatar from "./Avatar";

const Personal = () => {
  return (
    <NormalRow>
      <NormalCol span={24}>
        <Avatar />
        <PersonalDetails />
        <Skills />
        <SpeakLanguage />
      </NormalCol>
    </NormalRow>
  );
};

export default Personal;
