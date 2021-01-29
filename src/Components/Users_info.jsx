function Users_info(props) {

    function onClickDelete() {
        let options = {
            method: "DELETE"
        };
        let id = props.userInfo.id;


        fetch(`https://5fec128e573752001730b0f1.mockapi.io/users/${id}`, options)
            .then(response => response.json())
            .then(response => props.setUsers((prevState) => {
                return prevState.filter(user => +user.id !== +response.id)
            })).then(props.setUserInfo(null));
    }

    const {userInfo} = props;

    function onClickHide(){
        props.setUserInfo(null);
        props.setCurrentUserID(null);
    }

    function onClickEdit() {
        props.setFormFields(props.userInfo)
        props.setEditableUser(true);
    }
    
    
    return (
        <>
            {userInfo ? (
                    <div className="info_container">
                        <h2>Users Info:</h2>
                        <div>First Name: {props.userInfo.firstName}</div>
                        <div>Last Name: {props.userInfo.lastName}</div>
                        <div>Address: {props.userInfo.address}</div>
                        <div>Email: {props.userInfo.email}</div>
                        <div>Phone: {props.userInfo.phone}</div>
                        <div>Company: {props.userInfo.company}</div>
                        <button
                            onClick={onClickDelete}
                            className="deleteUser_btn">Delete
                        </button>
                        <button onClick={onClickHide}>
                            Hide User Info
                        </button>
                        <button onClick={onClickEdit}>
                            Edit
                        </button>
                    </div>
                )
                : (
                    <h2>Users Info:</h2>
                )
            }
        </>


    )
}


export default Users_info