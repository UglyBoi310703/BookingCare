import React from 'react';
import { FaCartArrowDown, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import cartSlice from '../../slices/cartSlice';
import { toast } from 'react-toastify';

function Doctor({ product }) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card d-flex align-items-center pt-2">
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ width: '100%', minHeight: '210px' }}
                >
                    <img
                        src="https://medlatec.vn/media/1505/catalog/quocdung-1.png?size=256"
                        className="card-image-top"
                        alt=""
                        style={{ width: '70%' }}
                    />
                </div>

                <div className="card-body">
                    <p className="fw-bolder">ABC</p>
                    <div className="d-flex align-items-center mb-2">
                        <div className="fs-10"></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between"></div>
                </div>
            </div>
        </div>
    );
}

export default Doctor;
