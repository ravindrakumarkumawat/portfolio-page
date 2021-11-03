import React from "react";
import "./Home.css";
import NormalRow from "../common/NormalRow";
import NormalCol from "../common/NormalCol";
import Avatar from "../../assets/images/avatar_hat.jpg";
import Footer from "../Footer"

const Home = () => {
  return (  
    <> 
    <div className="bg-grey">
      <NormalRow>
        <NormalRow>
          <NormalCol span={6}></NormalCol>
          <NormalCol span={12}></NormalCol>
        </NormalRow>
      </NormalRow>
    </div>
    <Footer />
  </>
  )
}


export default Home;
