import React from "react";


function Confirmation({setPageNo}) {


    return (
        <>
            Confirmation Page
            <div>
                <button onClick={() => setPageNo(p => p-1)}>Previous</button>
                <button onClick={() => setPageNo(p => p+1)}>Confirmation</button>
            </div>
        </>
    )

}

export default Confirmation;