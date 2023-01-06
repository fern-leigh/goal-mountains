import React from 'react';
import ReactDOM from 'react-dom/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Trophies({data}) {
        const listItems = data.map(item =>
             <div key={item.id} className="trophy-info">
                <FontAwesomeIcon icon="trophy" size="2x" color="gold"/>
                <p>Mountain: {item.title}</p>
                <p>Date Summited: {item.dateSummited}</p>
             </div>
        );
        return (
            <>
            <h2>These are my trophies </h2>
                <div className="trophy-container">
                    {listItems}
                </div>
            </>
        )
}