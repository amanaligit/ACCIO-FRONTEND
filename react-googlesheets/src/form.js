import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Form({getSheetData}){
    const [formData, setFormData] = useState({'name':"", age:"", salary:"", hobby:""});


    


    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);
        
        axios.post('https://sheet.best/api/sheets/22059ae6-dd5b-49d4-a009-2bb51890f8eb', formData)
        .then(res => {
            console.log(res)
            alert("data successfully stored the database")
            getSheetData();
        });

        setFormData({'name':"", age:"", salary:"", hobby:""});
    }


    return (
        <form className='p-3' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label' htmlFor='name'>Name</label>
                <input type='text' id='name' className='form-control' value={formData.name} 
                onChange={(e) => setFormData({...formData, 'name':e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='age'>Age</label>
                <input type='text' id='age' className='form-control' value={formData.age}
                onChange={(e) => setFormData({...formData, age:e.target.value})}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='salary'>Salary</label>
                <input type='text' id='salary' className='form-control' value={formData.salary}
                onChange={(e) => setFormData({...formData, salary:e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label className='form-label' htmlFor='hobby'>Hobby</label>
                <input type='text' id='hobby' className='form-control' value={formData.hobby}
                onChange={(e) => setFormData({...formData, hobby:e.target.value})}/>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    )
}

export default Form;

