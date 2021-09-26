import React from "react";
import Input from "./comman/Input";

class Loginform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: "", password: "" },
    };
  }
  //handle change
  handleChange = (e) => {
    //now we have to clone account to modify it in state
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    console.log(e);
    this.setState({ account });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.username.current.value;
    console.log("submitted");
  };
  render() {
    const { account } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          value={account.username}
          label="Username"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          value={account.password}
          label="Password"
          onChange={this.handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Loginform;
