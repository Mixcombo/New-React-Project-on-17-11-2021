import React from 'react';
import {Link} from 'react-router-dom';

function Clickword(){
    return(
        <div>
            <Link to = '/dicom'>
            <h2>click this</h2>
            </Link>
            <Link to = '/'> <h2>back</h2> </Link>
        </div>
    )
}

export default Clickword;