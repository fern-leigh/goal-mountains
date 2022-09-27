import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Home() {
const data = require('../data/mountains.json');

const listItems = data.mountains.map(item =>
     <div key={item.id}>
        <p>{item.title}</p>
     </div>
);

    return (
    listItems
    )
}