import React from 'react';
import ReactDOM from 'react-dom/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Mountains({data}) {
    const listItems = data.map(item =>
         <div key={item.id} className="mountain">
            {/* <FontAwesomeIcon icon="mountain" size="2x" color="gray"/> */}
            <p>Type: {item.type}</p>
            <p>Title: {item.title}</p>
            {item.type === "book" && <p>pages: {item.pages}</p>}
            {item.type === "habit" && 
                <p>
                    Target: 
                    {item.targetSessions[0]} 
                    {item.frequency==="daily" && " days "}
                    {item.frequency==="weekly" && " weeks "}
                    {item.frequency==="monthly" && " months "}
                    {item.targetSessions[1]}
                </p>
            }
            <p>{item.startDate}</p>
            <p>{item.progress}%</p>
         </div>
    );
    return (
    <div className='main-content'>
    <h2>Currently climbing: </h2>
        <div className="mountain-container">
            {listItems}
        </div>
    </div>
    )

}