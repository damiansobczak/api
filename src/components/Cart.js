import React from "react";
import Navbar from "./Navbar";

class UserDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s6">Użytkownik</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDetails;
