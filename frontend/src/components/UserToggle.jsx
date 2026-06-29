import '../UserToggle.css'

function UserToggle({ users, onSelect }) {

    return (
        <>
            <div className="user-list">
                <select
                    onChange={(event) => {
                        const selected = users.find(u => String(u.id) === event.target.value)
                        onSelect(selected)
                    }}>
                    {users.map(user => 

                        <User
                            key={user.id}
                            id={user.id}
                            name={user.display_name}
                        />
                        )
                    }
                </select>
            </div>
        </>
    )
}

function User({ id, name }) {
    return (
        <>
            <option className="username" value={id}>{name}
            </option>
        </>
    )
}

export default UserToggle
