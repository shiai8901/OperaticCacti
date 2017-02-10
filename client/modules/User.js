import React from 'react'
import axios from 'axios'
import ListElement from './ListElement'

class User extends React.Component {
  render() {
    if (this.props.user !== this.props.userWhoIsLoggedIn) {
      return (
        <div>
          <h1>
            {user.username}
          </h1>

          <UserInfo user={this.props.user}/>

          <h2>Recent Activity</h2>
          <UserHistory user={this.props.user}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            {user.username}
          </h1>

          <h2>Upcoming Tours</h2>
          <UserUpcomingTours user={this.props.user}/>

          <h2>Recent Activity</h2>
          <UserHistory user={this.props.user}/>
        </div>
      );
    }
  }
}

var UserInfo = (props) => {
  if (!props.user.image) {
    return (
    <div>
      <img src={props.user.image}>
      <p>{props.user.bio}</p>
    </div>
    );
  }
  return (
    <div>
      <p>{props.user.bio}</p>
    </div>
  );
};


var TourPreview = (props) => {
  if (props.tour.review) {
    return (
      <h2>{props.tour.name}</h2>
      <span>{props.tour.location}</span>
      <span>{props.tour.rating}</span>
      <h3>User Review</h3>
      <span>{props.tour.review.content}</span>
      <span>User rating (not in schema yet)</span>
    );
  }

  return (
    <div>
      <h2>{props.tour.name}</h2>
      <span>{props.tour.location}</span>
      <span>{props.tour.rating}</span>
    </div>
  );
}

var UserHistory = (props) => {
  return (


  );
};

var UserUpcomingTours = (props) => {

};




// User.propTypes = {
//   // redux store states
//   // user, userWhoIsLoggedIn
//   // redux action hookups
// };

// var mapStateToProps = function(state){
//     return {__:state.__};
// };

// var mapDispatchToProps = function(dispatch){
//     return {
//         __: function(args){ dispatch(actions.__(args)); }
//     }
// };

// module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(User);
