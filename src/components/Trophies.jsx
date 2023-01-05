import React from 'react';
import ReactDOM from 'react-dom/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function Trophies({data}) {
        const listItems = data.map(item =>
             <div key={item.id} className="trophy-icon">
                <FontAwesomeIcon icon={solid('trophy')} size="2x"/>
                <p>{item.title}</p>
                <p>{item.dateSummited}</p>
             </div>
        );
        return (
            <>
            <h2>These are my trophies </h2>
                <div className="trophy-icon-container">
                    {listItems}
                </div>
            </>
        )
}