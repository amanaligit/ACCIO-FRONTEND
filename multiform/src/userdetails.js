import React from "react";


function UserDetails({ setPageNo, email, password, username, setEmail, setpassword, setusername }) {


    return (
        <>
            <h2>User Details Page</h2>
            <div>
                <label>Username</label>
                <input value={username} onChange={(e) => setusername(e.target.value)}></input>
            </div>
            <div>
                <label>password</label>
                <input value={password} type="password" onChange={(e) => setpassword(e.target.value)}></input>
            </div>
            <div>
                <label>email</label>
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div>
                <button onClick={() => setPageNo(p => p + 1)}>Next</button>
            </div>

        </>
    )

}

export default UserDetails;