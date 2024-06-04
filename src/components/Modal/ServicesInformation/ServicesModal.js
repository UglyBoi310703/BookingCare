import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBCard,
    MDBRipple,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardSubTitle,
    MDBCardGroup,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from 'mdb-react-ui-kit';
import OrderServicesModal from '../OrderServices/OrderServices';
import styles from './ServicesModal.scss';
export default function ServicesModal({ DescriptionTitle, Description, name, img, price, gender, age, location }) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

    return (
        <>
            <MDBBtn  className='ServicesModal' onClick={toggleOpen}>Chi Tiết</MDBBtn>
            <MDBModal staticBackdrop  className="Test" open={basicModal} onClose={() => setBasicModal(false)} >
                <MDBModalDialog size='xl'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Thông tin chi tiết gói khám</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBCard className="ServicesModal-Item">
                                <MDBRipple rippleTag="div" className="">
                                    <MDBCardImage className="img-fluid" src={img} position="top" alt="..." />
                                </MDBRipple>
                                <MDBCardBody className="Services-Item-Cotent ServicesModal-Item-Cotent">
                                    <MDBBtn className="Services-Item-Cotent-price  ServicesModal-Item-Cotent-price " href="#">
                                        {price}
                                    </MDBBtn>
                                    <MDBCardTitle className="Services-Item-Cotent-Name  ServicesModal-Item-Cotent-name ">{name}</MDBCardTitle>
                                    <div className="Services-Item-Cotent-information  ServicesModal-Item-Cotent-information">
                                        <div className="Services-Gender">{gender}</div>
                                        <div className="Services-Age">{age}</div>
                                        <div className="Services-Location">{location}</div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                            <div className='ServicesModal-Description'>
                                <MDBTable bordered borderColor="primary">
                                    <MDBTableBody>
                                        <tr>
                                            <th scope="row">Hình thức</th>
                                            <td>Tại Medlatec</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">GIới tính</th>
                                            <td>{gender}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Độ tuổi</th>
                                            <td>{age}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Cơ sở</th>
                                            <td>Hà Nội</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                <MDBCard style={{boxShadow: "none"}}>
                                    <MDBCardBody>
                                        <MDBCardSubTitle>{DescriptionTitle}</MDBCardSubTitle>
                                        <MDBCardText>{Description}</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            <div class="package-details-price">
            <h2>Danh sách các xét nghiệm</h2>
            <div class="service-price-content">
                <div class="table-responsive">
                    <MDBTable  striped class="table">
                        <MDBTableHead dark>
                            <tr>
                                <th>STT</th>
                                <th class="title">Tên xét nghiệm</th>
                                <th>Giá xét nghiệm</th>
                                 
                            </tr>

                        </MDBTableHead>
                        <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Tổng phân tích tế bào máu ngoại vi bằng máy đếm Laser ( XN 1000 – Symex)</td>
									<td>155.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>CRP định lượng</td>
									<td>130.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>AST (GOT)</td>
									<td>45.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>ALT (GPT)</td>
									<td>45.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>GGT</td>
									<td>55.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Ure máu</td>
									<td>55.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Creatinin máu</td>
									<td>45.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Điện giải đồ (Na, K, CL)</td>
									<td>75.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>RSV Ag test nhanh</td>
									<td>460.000 ₫</td>
                                    
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Influenza virus A, B test nhanh</td>
									<td>370.000 ₫</td>
                                    
                                </tr>
                            
                        </tbody>
                    </MDBTable>
                </div>

            </div>
        </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <OrderServicesModal    Name={name}
                    Price = {price} title={"Đặt lịch khám"}/>
                            <MDBBtn color="info" onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
