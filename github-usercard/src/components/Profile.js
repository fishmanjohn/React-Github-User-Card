import React from 'react';
import axios from 'axios';
import UserCard from './UserCard'

class Profile extends React.Component{
    state={
        user:{},
      }
      componentDidMount(){
        axios.get('https://api.github.com/users/fishmanjohn')
        .then(res=>{
         
        this.setState(res.data)
        console.log(this.state)
        })
      };
      render(){
          return(
             <UserCard data={this.state}/>
          )
      }
} export default Profile