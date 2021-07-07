import React from 'react';
import axios from "axios";
import UserCard from './UserCard';

class Followers extends React.Component {
  state = { followers: [] };

  componentDidMount() {
    axios.get("https://api.github.com/users/fishmanjohn/followers")
      .then(res => {
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    const { followers } = this.state;
    
    return (
      followers.map(follower => {
        const { id } = follower;
        
        return (
          <UserCard key = {id} data = {follower} />
        )
      })
    )
  }
};
export default Followers;