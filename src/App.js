import './App.css';
import Users from "../src/Components/Users"
import Users_info from "../src/Components/Users_info"
import Form from "../src/Components/Form"

import {useState, useEffect} from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [currentUserID, setCurrentUserID] = useState('');
    const [editableUser, setEditableUser] = useState(false);
    const [formFields, setFormFields] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        address: ''

    });


    useEffect(() => {
        fetch("https://5fec128e573752001730b0f1.mockapi.io/users")
            .then(response => response.json())
            .then(response  => setUsers(response))
    }, []);


  return (
    <div className="main_page">
        <Form
            formFields={formFields}
            setUsers={setUsers}
            setFormFields={setFormFields}
            editableUser={editableUser}
            currentUserID={currentUserID}
            setEditableUser={setEditableUser}
        />
        <div className="main_container">

            <Users
                users={users}
                setUserInfo={setUserInfo}
                setCurrentUserID={setCurrentUserID}
                currentUserID={currentUserID}
            />
            <Users_info
                userInfo={userInfo}
                users={users}
                setUsers={setUsers}
                setUserInfo={setUserInfo}
                setCurrentUserID={setCurrentUserID}
                setFormFields={setFormFields}
                currentUserID={currentUserID}
                setEditableUser={setEditableUser}
            />
      </div>
    </div>
  );
}

export default App;
