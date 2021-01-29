import React from 'react';

function Users(props) {

    function onClickShowUserInfo(e) {
        const id = e.currentTarget.id;
        let user = props.users.find(user => user.id === id);
        props.setUserInfo(user);
        props.setCurrentUserID(id)

    }


    return (
        <div className="users_container">
            <h2 className="users_header">List of users</h2>
            {props.users.map(user => {
                return (
                    <div key={user.id}
                         id={user.id}
                         onClick={onClickShowUserInfo}
                         className= {user.id === props.currentUserID ? "user_container selected_user" : "user_container "}>
                        <img className="avatar_img" src={user.avatar}/>
                        <div className="user_name">{user.firstName} {user.lastName}</div>
                    </div>
                )
            })}
        </div>

    )




}




export default Users