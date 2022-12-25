import React from "react";
import Login from "../src/component/LoginComponent";
import CustomHead from "../src/common/CustomHead";

function Home() {
  return (
    <React.Fragment>
      <CustomHead title={"only채팅 - 로그인"} />
      <Login />
    </React.Fragment>
  );
}

export default Home;
