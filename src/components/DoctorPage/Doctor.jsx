import React, { useState } from 'react';
import { FaCartArrowDown, FaStar } from 'react-icons/fa';
import AppointmentForm from './AppointmentForm';
import DoctorItem from './DoctorItem/DoctorItem';
import DoctorInformationModal from '../Modal/DoctorInformation/DoctorInformationModal';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
function Doctor({ doctor }) {
    const { img, name, role, vote, Description } = doctor;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <AppointmentForm show={show} handleClose={handleClose} />
            <div className="col-md-4 mb-5 DoctorItem">
                <div className="card d-flex align-items-center justify-content-center pt-2" style={{ height: '100%' }}>
                    <div
                        className="DoctorsImg d-flex align-items-center justify-content-center"
                        style={{ width: '100%', minHeight: '210px', height: '210px' }}
                    >
                        <img
                            src={img}
                            className="card-image-top"
                            alt=""
                            style={{ width: '90%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>

                    <div className=" DoctorItem-Body card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                        <div>
                            <p className="fw-bolder">{name}</p>
                            <div className="fs-10 text-center">{role}</div>
                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <div className="me-1">
                                    {new Array(vote ? vote : 5).fill(1).map((value, index) => (
                                        <FaStar key={index} color={`${vote ? 'yellow' : 'gray'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ">
                            <MDBBtn onClick={handleShow} className="OrderDoctor">
                                Đặt lịch khám
                            </MDBBtn>
                            <DoctorInformationModal img={img} name={name} role={role} Description={Description()} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Doctor;
