import React, { useEffect } from 'react'
import { useState } from 'react'

function FetchAPI() {

    // const [name, setName] = useState("aman");

    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(data => data.json())
                .then(jsondata => {
                    console.log(jsondata);
                    setApiData(jsondata);
                    setLoading(false);
                })
        }, 2000)

    }, [])

    // the second parameter is the dependency array
    // we use it to let useEffect know on change of which states
    // do we run the 'effect' (callback)
    // [] signifies to run the callback only once on the first render

    return (
        <div>
            {loading ?
                <h1>Loading...</h1>
                :
                <div>
                    {apiData.map((userData, i) =>
                        <div key={i} style={{ border: '5px solid black', margin: "10px" }}>
                            <h2><b>Name: {userData.name}</b></h2>
                            <h2><b>Email: {userData.email}</b></h2>
                            <h2><b>website: <a href={`http://www.${userData.website}`}>{userData.website}</a></b></h2>

                        </div>
                    )}
                </div>
            }

        </div>
    )
}

export default FetchAPI