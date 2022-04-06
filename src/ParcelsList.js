import React from 'react';
import { useState  } from 'react';

const ParcelsList = () => {
    const [parcels, setParcels] = useState([
        { APN: 'A123', Address: '5331 N 36 Court', Owner: 'Jon', id: 1 },
        { APN: 'B465', Address: '1221 NE 212 St', Owner: 'Buzz', id: 2 },
        { APN: 'Cx12', Address: '94 Burnett Ave', Owner: 'Sean', id: 3 }
    ])

    return ( 
        <div className="parcellist">
            <table>
                <tr>
                    <th>APN</th>
                    <th>Address</th>
                    <th>Owner</th>
                </tr>
                {parcels.map(parcel => (
                    <tr>
                        <td>{ parcel.APN }</td>
                        <td>{ parcel.Address }</td>
                        <td>{ parcel.Owner }</td>
                    </tr>
                ))}
            </table>
        </div>
     );
}
 
export default ParcelsList;