import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Home({data}) {
const listItems = data.map(item =>
     <div key={item.id} className="mountain-icon">
        <p>{item.title}</p>
     </div>
);

    return (
    <div className="mountain-icon-container">
    {listItems}
    </div>
    )

}