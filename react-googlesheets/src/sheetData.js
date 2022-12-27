import React from 'react'

function SheetData({ sheetData }) {

    

    return (
        <>
            <table className='table table-dark '>
                <thead>

                    <tr >
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody>

                    {sheetData.map((row, i) =>
                        <tr key={i}>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.salary}</td>
                            <td>{row.hobby}</td>
                        </tr>)}
                </tbody>
            </table>
            
        </>
    )
}

export default SheetData