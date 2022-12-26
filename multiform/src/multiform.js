import React from "react";
import { useState } from "react";
import Confirmation from "./confirmation";
import PersonalDetails from "./personaldetails";
import Success from "./success";
import UserDetails from "./userdetails";


function MultiForm() {

    const [pageNo, setPageNo] = useState(0);

    const [email, setEmail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [country, setcountry] = useState("");
    const [levelofeducation, setlevelofeducation] = useState("");

    if(pageNo == 3){
        console.log({username, password, firstname, lastname, email, country, levelofeducation})
    }

    switch (pageNo) {
        case 0: return <UserDetails setPageNo={setPageNo}
            email={email} setEmail={setEmail} username={username} setusername={setusername}
            password={password} setpassword={setpassword}
        />
        case 1: return <PersonalDetails setPageNo={setPageNo}
            firstname={firstname} setfirstname={setfirstname} lastname={lastname} setlastname={setlastname}
            country={country} setcountry={setcountry} levelofeducation={levelofeducation} setlevelofeducation={setlevelofeducation}
        />
        case 2: return <Confirmation setPageNo={setPageNo} />
        case 3: return <Success setPageNo={setPageNo} />
    }



}

export default MultiForm;