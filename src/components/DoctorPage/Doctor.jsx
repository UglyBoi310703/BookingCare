import React, { useState } from 'react';
import { FaCartArrowDown, FaStar } from 'react-icons/fa';
import AppointmentForm from './AppointmentForm';
function Doctor({ doctor }) {
    const { img, name, role, vote } = doctor;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <AppointmentForm show={show} handleClose={handleClose} />
            <div className="col-md-3 mb-4">
                <div className="card d-flex align-items-center pt-2" style={{ height: '100%' }}>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ width: '100%', minHeight: '210px', height: '210px' }}
                    >
                        <img
                            src={img}
                            className="card-image-top"
                            alt=""
                            style={{ width: '70%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>

                    <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                        <div>
                            <p className="fw-bolder">{name}</p>
                            <div className="fs-10">{role}</div>
                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <div className="me-1">
                                    {new Array(vote ? vote : 5).fill(1).map((value, index) => (
                                        <FaStar key={index} color={`${vote ? 'yellow' : 'gray'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-auto">
                            <button
                                variant="outline-primary"
                                onClick={handleShow}
                                className="order_btn btn-outline-primary"
                                type="button"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                Đặt lịch khám
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Doctor;
