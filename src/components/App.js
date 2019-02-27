import React from "react";
import Navbar from "./Navbar";
import User from "./User";
import axios from "axios";
import UserPlaceholder from "./UserPlaceholder";

class App extends React.Component {
  state = {
    users: [],
    favorite: {},
    isLoading: true
  };

  componentDidMount() {
    axios.get(`https://reqres.in/api/users?per_page=10`).then(res => {
      const users = res.data.data;
      this.setState({ users });
      this.setState({ isLoading: false });
    });
  }

  addToFavorite = key => {
    const favorite = { ...this.state.favorite };
    favorite[key] = favorite[key] !== 1 ? 1 : 0;
    this.setState({ favorite });
  };

  render() {
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <UserPlaceholder />;
    }
    return (
      <React.Fragment>
        <Navbar favorite={this.state.favorite} />
        <div className="container">
          <div className="row">
            {this.state.users.map(user => (
              <User isFavorite={this.state.favorite[user.id] === 1 ? true : false} key={user.id} id={user.id} first_name={user.first_name} last_name={user.last_name} avatar={user.avatar} addToFavorite={this.addToFavorite} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
