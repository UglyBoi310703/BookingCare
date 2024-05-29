import React, { useEffect } from 'react';
import doctorData from '~/assets/data/DoctorData';
import Doctor from './Doctor';
import AppointmentForm from './AppointmentForm';
function Doctors() {
    const doctorList = doctorData;
    return (
        <>
            <div className="py-2 d-flex flex-column justify-content-center">
                <div className="row">
                    {doctorList?.map((doctor) => (
                        <Doctor key={doctor.id} doctor={doctor} />
                    ))}
                </div>
                
            </div>
        </>
    );
}

export default Doctors;
