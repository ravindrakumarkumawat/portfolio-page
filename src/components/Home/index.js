import React from "react";
import "./Home.css";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";
import Avatar from "../../assets/images/avatar_hat.jpg";
import Footer from "../Footer";
import Personal from "../Personal";
import Education from "../Educations";
import WorkExperience from "../WorkExperience";

const Home = () => {
  return (
    <>
      <div className="bg-grey">
        <NormalRow>
          <NormalRow classNames={"justifyEvenly"}>
            <NormalCol span={32}>
              <div className="bg-left">
                <Personal />
              </div>
            </NormalCol>
            <NormalCol span={65}>
              <div className="bg-right">
                <div className="m-2">
                  <WorkExperience />
                </div>
              </div>
              <div className="bg-right">
                <div className="m-2">
                  <Education />
                </div>
              </div>
            </NormalCol>
          </NormalRow>
        </NormalRow>
      </div>
      <Footer />
    </>
  );
};

export default Home;
