import React from "react";


function PersonalDetails({ setPageNo, firstname, lastname, levelofeducation, country, setfirstname, setlastname, setlevelofeducation, setcountry }) {


    return (
        <>
           <h2>Personal Details Page</h2>
            <div>
                <label>Firstname</label>
                <input value={firstname} onChange={(e) => setfirstname(e.target.value)}></input>
            </div>
            <div>
                <label>Lastname</label>
                <input value={lastname} type="lastname" onChange={(e) => setlastname(e.target.value)}></input>
            </div>
            <div>
                <label>Level of education</label>
                <input value={levelofeducation} type="levelofeducation" onChange={(e) => setlevelofeducation(e.target.value)}></input>
            </div>
            <div>
                <label>Country</label>
                <input value={country} type="country" onChange={(e) => setcountry(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => setPageNo(p => p - 1)}>Previous</button>
                <button onClick={() => setPageNo(p => p + 1)}>Next</button>
            </div>
        </>
    )

}

export default PersonalDetails;