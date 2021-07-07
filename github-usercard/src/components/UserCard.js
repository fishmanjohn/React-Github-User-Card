import React from 'react';


function UserCard (props){

    const { 
        avatar_url, 
        name, 
        login, 
        location,
        followers,
        bio } = props.data;
return(
    <div>
        <img alt='' src={avatar_url}/>
        <div>
        <h2>Name: {name}</h2>
        <p>User Name: {login}</p>
        <p>Location: {location}</p>
        <p>{bio}</p>
        <p>Followers: {followers}</p>
        </div>
    </div>
)
}
export default UserCard;