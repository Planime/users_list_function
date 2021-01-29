function Form(props) {


    function onChangeInput({target: {value, name}}) {

        props.setFormFields((prevState, props) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }


    function onSubmit(e) {
        e.preventDefault();

        if (props.editableUser) {

            let optionsPut = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(props.formFields)
            };

            fetch(`https://5fec128e573752001730b0f1.mockapi.io/users/${props.currentUserID}`, optionsPut)
                .then(response => response.json())
                .then(response => props.setUsers((prevState) =>
                    prevState.map(user => user.id === response.id ? response : user
                    )
                ))
                .then(props.setFormFields( (formFields) => {
                    return Object.fromEntries(Object.entries(formFields).map(([prop]) => [[prop], ""]))
                }))
                .then(props.setEditableUser(false))



        }

        else {

            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(props.formFields)
            };
            fetch("https://5fec128e573752001730b0f1.mockapi.io/users", options)
                .then(response => response.json())
                .then(response => props.setUsers((prevState) => {
                        return [
                            ...prevState,
                            response
                        ]
                    })
                )

        }
    }


    return (
        <form
            onSubmit={onSubmit}
            className="addUser_form">
            <h3>Add new User</h3>
            <label className="addUser_label">Fist Name</label>
            <input
                name="firstName"
                value={props.formFields.firstName}
                onChange={onChangeInput}
                className="addUser_input"
                type="text"/>

            <label className="addUser_label">Last Name</label>
            <input
                name="lastName"
                value={props.formFields.lastName}
                onChange={onChangeInput}
                className="addUser_input"
                type="text"/>

            <label className="addUser_label">Address</label>
            <input
                name="address"
                value={props.formFields.address}
                onChange={onChangeInput}
                className="addUser_input"
                type="text"/>

            <label className="addUser_label">Email</label>
            <input
                name="email"
                value={props.formFields.email}
                onChange={onChangeInput}
                className="addUser_input"
                type="text"/>

            <label className="addUser_label">Phone</label>
            <input
                name="phone"
                value={props.formFields.phone}
                onChange={onChangeInput}
                className="addUser_input"
                type="text"/>

            <label className="addUser_label">Company</label>
            <input
                name="company"
                value={props.formFields.company}
                onChange={onChangeInput}
                className="addUser_input"
                type="text"/>

            <button
                className="addUser_submit">Submit
            </button>
        </form>
    )
}


export default Form
