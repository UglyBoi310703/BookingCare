import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
  MDBRow,MDBCol,MDBListGroup
} from 'mdb-react-ui-kit';
import ContactInformationItem from './ContactInformationItem';
import styles from "./ContactInformationList.scss"

const ContactInfomationData = [
    {
        id: 1,
        title: "Đường dây nóng",
        describe:"0999999999",
        icon: "phone"
    },
    {
        id: 2,
        title:"Liên hệ qua Gmail",
        describe: "medlatec@gmail.com",
        icon: "envelope"
    }
]

export default function ContactInformationList(){
    return (
        <MDBRow className='ContactInformationList navbar-nav col mb-2 mb-lg-0 ml-4'>
        {
            ContactInfomationData.map((item) => (
                <MDBCol className='ContactInformation-Item' xl={4} lg={6} >
                <ContactInformationItem title = {item.title} describe = {item.describe} icon = {item.icon} />
                </MDBCol>
            )    
            )
        }
        
        </MDBRow>
    );
}
