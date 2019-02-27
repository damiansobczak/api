import React from "react";
import Navbar from "./Navbar";
import Axios from "axios";
import Skeleton from "react-loading-skeleton";

class UserDetails extends React.Component {
  state = {
    currentUser: [],
    isLoading: true
  };

  componentDidMount() {
    const url = `https://reqres.in/api/users/${this.props.match.params.id}`;
    Axios.get(url).then(res => {
      const currentUser = res.data.data;
      this.setState({ currentUser });
      this.setState({ isLoading: false });
    });
  }

  render() {
    const isLoading = this.state.isLoading;

    if (isLoading) {
      return (
        <React.Fragment>
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col s6" style={{ marginTop: 20 }}>
                <Skeleton width={150} height={25} />
                <br />
                <Skeleton height={128} width={128} />
                <Skeleton count={4} />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s6">
              <h5>
                {this.state.currentUser.first_name} {this.state.currentUser.last_name}
              </h5>
              <img src={this.state.currentUser.avatar} alt="User Avatar" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet elementum metus. Quisque iaculis fringilla arcu at ultrices. Nunc at mi accumsan felis blandit commodo vel eget dui. Pellentesque consequat consectetur sapien, at gravida ante tincidunt auctor. Fusce facilisis libero et elementum
                ultrices.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDetails;
