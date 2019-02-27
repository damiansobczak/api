import React from "react";
import { Link } from "react-router-dom";
class User extends React.Component {
  render() {
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-content">
            <img src={this.props.avatar} alt="Avatar User" />
            <span className="card-title">
              {this.props.first_name} {this.props.last_name}
            </span>
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <Link to={`/user/${this.props.id}`} className="indigo-text darken-2-text">
              See details
            </Link>
            <i className={this.props.isFavorite === true ? "material-icons active" : "material-icons"} onClick={() => this.props.addToFavorite(this.props.id)}>
              favorite
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
