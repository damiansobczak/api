import React from "react";
import Navbar from "./Navbar";
import Skeleton from "react-loading-skeleton";

class UserHolder extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s4" style={{ marginTop: 20 }}>
              <Skeleton height={128} width={128} />
              <br />
              <Skeleton height={32} width={120} />
              <Skeleton count={4} />
            </div>
            <div className="col s4" style={{ marginTop: 20 }}>
              <Skeleton height={128} width={128} />
              <br />
              <Skeleton height={32} width={120} />
              <Skeleton count={4} />
            </div>
            <div className="col s4" style={{ marginTop: 20 }}>
              <Skeleton height={128} width={128} />
              <br />
              <Skeleton height={32} width={120} />
              <Skeleton count={4} />
            </div>
            <div className="col s4" style={{ marginTop: 20 }}>
              <Skeleton height={128} width={128} />
              <br />
              <Skeleton height={32} width={120} />
              <Skeleton count={4} />
            </div>
            <div className="col s4" style={{ marginTop: 20 }}>
              <Skeleton height={128} width={128} />
              <br />
              <Skeleton height={32} width={120} />
              <Skeleton count={4} />
            </div>
            <div className="col s4" style={{ marginTop: 20 }}>
              <Skeleton height={128} width={128} />
              <br />
              <Skeleton height={32} width={120} />
              <Skeleton count={4} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserHolder;
