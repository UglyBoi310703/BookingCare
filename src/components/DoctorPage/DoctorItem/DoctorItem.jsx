import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { FaCartArrowDown, FaStar } from 'react-icons/fa';
import styles from './DoctorItem.scss';
import DoctorInformationModal from '~/components/Modal/DoctorInformation/DoctorInformationModal';
import { Description } from '@mui/icons-material';

import OrderDoctorModal from '~/components/Modal/OrderDoctor/OrderDoctorModal';
export default function DoctorItem({ img, name, role, vote, Description }) {
    return (
        <MDBCard className="DoctorItem">
            <div className="DoctorImg">
                <MDBCardImage src={img} position="top" alt="..." />
            </div>
            <MDBCardBody className="Doctor-Item-Cotent">
                <MDBCardTitle className="Doctor-Item-Cotent-Name">{name}</MDBCardTitle>
                <div className="Doctor-Item-Cotent-information">
                    <MDBCardText>{role}</MDBCardText>
                </div>
                <div>
                    {' '}
                    {new Array(vote ? vote : 5).fill(1).map((value, index) => (
                        <FaStar key={index} color={`${vote ? 'yellow' : 'gray'}`} />
                    ))}
                </div>
                <div className='DoctorItem-Btn'>
                    <OrderDoctorModal Doctorname={name} Role = {role} />
                    <DoctorInformationModal img={img} name={name} role={role} Description={Description} />
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}
