import React, { useState } from 'react';
import ParcelsList from './ParcelsList';

const Home = () => {
    const [switchval, setSwitchval] = useState(1);

    function switchList() {
        switch (switchval) {
            case 1:
                return <ParcelsList /> ;
            case 2:
                return <h1>2</h1>
            case 3:
                return <h1>3</h1>
             default:
                 return <ParcelsList />
        }
    }

    return ( 
        <div className="homecontent">
            <h1>Home Page</h1>  
            <button className="switchbutton" onClick={ () => setSwitchval(1) }>Parcels</button>
            <button className="switchbutton" onClick={ () => setSwitchval(2) }>Buildings</button>
            <button className="switchbutton" onClick={ () => setSwitchval(3) }>Units</button>
            <div className="listing">
               { switchList() } 
            </div>

        </div>
    );
}
 
export default Home;