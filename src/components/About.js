import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("componentDidMount parent");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1> About Us. </h1>
        {/* <User /> */}
        <UserClass
          name={"Shubham Singh"}
          location={"Ara"}
        />
      </div>
    );
  }
}

export default About;
