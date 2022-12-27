import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Infinite() {
    const pageLength = 10;

    const [pageData, setPageData] = useState([]);

    // store the number of pages already loaded:
    const [pagesLoaded, setPagesLoaded] = useState(1);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => {
                // we need to load: pageLength*pagesLoaded photos
                const numberOfPhotos = pageLength * pagesLoaded;
                // console.log(numberOfPhotos);
                const newPageData = data.slice(0, numberOfPhotos);
                // console.log(newPageData);
                setPageData(newPageData);
            })
    }, [pagesLoaded])

    function runOnScroll(){
        // console.log(window.scrollY)
        // console.log(window.innerHeight);
        if( document.documentElement.scrollHeight - (window.scrollY + window.innerHeight) <= 10){
            console.log('load more images!')
            setPagesLoaded(p => p+1);
        }
    }

    useEffect(() => {
        // chage pagesLoaded number when the user scrolls
        window.addEventListener('scroll', runOnScroll)

        return () => window.removeEventListener('scroll', runOnScroll);
    }, [])

    return (
        <div>
            <h1>
                Infinite Scrolling!
            </h1>
            {
                pageData.map((data, i) =>
                    <div key = {i} style={{border: '5px solid grey', margin:'10px'}}>
                        <h2>{data.title}</h2>
                        <img src={data.url} style={{width:'50%'}}/>
                    </div>
                )
            }
        </div>
    )
}

export default Infinite