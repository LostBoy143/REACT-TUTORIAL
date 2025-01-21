import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child constructor");
    this.state = {
      info: {
        name: "John Doe",
        location: "Somewhere",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/LostBoy143"
    );
    const json = await data.json();
    this.setState({ info: json });
  }
  render() {
    // console.log("child render");
    const { name, location, avatar_url } =
      this.state.info;
    console.log(location);
    return (
      <div className="user-card">
        <img src={avatar_url} alt="dp" />
        <div>
          <h1>Name: {name}</h1>
          <h2>Location: {location}</h2>
        </div>
      </div>
    );
  }
}
export default UserClass;
