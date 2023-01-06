import React from 'react';
import ReactDOM from 'react-dom/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Mountains({data}) {
    const listItems = data.map(item =>
         <div key={item.id} className="mountain">
            <FontAwesomeIcon icon="mountain" size="2x" color="gray"/>
            <p>{item.title}</p>
         </div>
    );
    return (
    <>
    <h2>These are my mountains </h2>
        <div className="mountain-container">
            {listItems}
        </div>
    </>
    )

}