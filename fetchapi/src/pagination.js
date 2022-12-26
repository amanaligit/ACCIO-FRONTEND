import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Pagination() {

    // how many images to show in 1 page
    const pageLength = 10;
    const totalPages = 5000 / pageLength;
    const pageNoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [pageNo, setPageNo] = useState(0);
    const [pageData, setPageData] = useState([]);


    useEffect(() => {
        // perform the fetch request
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => {
                const newPageData = data.slice(pageNo * pageLength, pageNo * pageLength + pageLength);
                console.log(newPageData[0]);
                setPageData(newPageData);
            })

    }, [pageNo])

    return (
        <>
            <h1>Photos</h1>
            {
                pageNoArray.map((pageNo, i) =>
                    <button key={i} onClick={() => setPageNo(i)} >{pageNo}</button>
                )

            }

            {
                pageData.map((data, i) =>
                    <div key={i} style={{ border: "5px solid grey", margin: "10px" }}>
                        <h2>{data.title}</h2>
                        <img src={data.url} style={{ width: "50%" }} />
                    </div>
                )
            }


        </>
    )
}

export default Pagination;
