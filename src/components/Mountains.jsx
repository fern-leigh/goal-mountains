import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Mountains({data}) {
    const listItems = data.map(item =>
         <div key={item.id} className="mountain-icon">
            <p>{item.title}</p>
         </div>
    );
    return (
    <>
    <h2>These are my mountains </h2>
        <div className="mountain-icon-container">
            {listItems}
        </div>
    </>
    )

}