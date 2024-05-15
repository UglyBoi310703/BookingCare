import React, { useEffect } from 'react';
import Doctor from './Doctor';

function Doctors() {
    return (
        <div className="py-2 d-flex flex-column justify-content-center">
            <h5>Đội ngũ chuyên gia</h5>
            {<Doctor />}
        </div>
    );
}

export default Doctors;
