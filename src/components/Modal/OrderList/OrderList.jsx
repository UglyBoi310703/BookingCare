import React, { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Button, Form, Row, Col, FormGroup } from 'react-bootstrap';
import OrderDoctorForm from '../../Form/Order/OrderDoctor';
import OrderListDoctor from './OrderListDoctor/OrderListDoctor';
import OrderListServices from './OrderListServices/OrderListServices';
import OrderMedicalSpecialtiesList from './OrderMedicalSpecialtiesList/OrderMedicalSpecialtiesList';
export default function OrderList({ Doctorname, Role }) {
    const [basicModal, setBasicModal] = useState(false);
    const [formDataArray, setFormDataArray] = useState([]);
    const [selectedFormData, setSelectedFormData] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('orderFormData'));
        if (Array.isArray(storedData)) {
            setFormDataArray(storedData);
        }
    }, []);

    const toggleOpen = (index = null) => {
        setBasicModal(!basicModal);
        if (index !== null) {
            setSelectedFormData({ ...formDataArray[index], index });
            setEditMode(false);
        }
    };

    const handleDelete = (id) => {
        const updatedFormDataArray = formDataArray.filter((p) => p.id !== id);
        setFormDataArray(updatedFormDataArray);
        localStorage.setItem('orderFormData', JSON.stringify(updatedFormDataArray));
    };

    const handleSave = () => {
        if (selectedFormData.index !== undefined) {
            const updatedFormDataArray = [...formDataArray];
            updatedFormDataArray[selectedFormData.index] = { ...selectedFormData };
            setFormDataArray(updatedFormDataArray);
            localStorage.setItem('orderDoctorFormData', JSON.stringify(updatedFormDataArray));
            setBasicModal(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedFormData({
            ...selectedFormData,
            [name]: value,
        });
    };

    return (
        <>
            {formDataArray.length > 0 ? (
                formDataArray.map((formData, index) =>
                    formData.doctor ? (
                        <div key={index}>
                            <div>Lịch khám cùng bác sĩ {formData.doctor}</div>
                            <div>{formData.specialty}</div>
                            <div>{formData.appointmentDate}</div>
                            <div>{formData.appointmentTime}</div>
                            <div>
                                <div>
                                    <MDBBtn onClick={() => toggleOpen(index)}>Chi tiết</MDBBtn>
                                    <MDBBtn color="danger" onClick={() => handleDelete(formData.id)}>
                                        Xóa
                                    </MDBBtn>
                                </div>
                                <MDBModal open={basicModal} onHide={() => setBasicModal(false)} tabIndex="-1">
                                    <MDBModalDialog size="xl">
                                        <MDBModalContent>
                                            <MDBModalHeader>
                                                <MDBModalTitle>LỊCH KHÁM CÙNG CHUYÊN GIA</MDBModalTitle>
                                                <MDBBtn
                                                    className="btn-close"
                                                    color="none"
                                                    onClick={() => setBasicModal(false)}
                                                ></MDBBtn>
                                            </MDBModalHeader>
                                            <MDBModalBody>
                                                <OrderListDoctor
                                                    formData={selectedFormData}
                                                    handleChange={handleChange}
                                                    editMode={editMode}
                                                />
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                {editMode ? (
                                                    <MDBBtn color="secondary" onClick={handleSave}>
                                                        Lưu thông tin
                                                    </MDBBtn>
                                                ) : (
                                                    <MDBBtn color="primary" onClick={() => setEditMode(true)}>
                                                        Chỉnh sửa
                                                    </MDBBtn>
                                                )}
                                                <MDBBtn color="secondary" onClick={() => setBasicModal(false)}>
                                                    Đóng
                                                </MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModalContent>
                                    </MDBModalDialog>
                                </MDBModal>
                            </div>
                        </div>
                    ) : formData.services ? (
                        <div key={index}>
                            <div>{formData.services}</div>
                            {/* <div>{formData.specialty}</div> */}
                            <div>{formData.appointmentDate}</div>
                            <div>{formData.appointmentTime}</div>
                            <div>
                                <div>
                                    <MDBBtn onClick={() => toggleOpen(index)}>Chi tiết</MDBBtn>
                                    <MDBBtn color="danger" onClick={() => handleDelete(formData.id)}>
                                        Xóa
                                    </MDBBtn>
                                </div>
                                <MDBModal open={basicModal} onHide={() => setBasicModal(false)} tabIndex="-1">
                                    <MDBModalDialog size="xl">
                                        <MDBModalContent>
                                            <MDBModalHeader>
                                                <MDBModalTitle>{formData.services}</MDBModalTitle>
                                                <MDBBtn
                                                    className="btn-close"
                                                    color="none"
                                                    onClick={() => setBasicModal(false)}
                                                ></MDBBtn>
                                            </MDBModalHeader>
                                            <MDBModalBody>
                                                <OrderListServices
                                                    formData={selectedFormData}
                                                    handleChange={handleChange}
                                                    editMode={editMode}
                                                />
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                {editMode ? (
                                                    <MDBBtn color="secondary" onClick={handleSave}>
                                                        Lưu thông tin
                                                    </MDBBtn>
                                                ) : (
                                                    <MDBBtn color="primary" onClick={() => setEditMode(true)}>
                                                        Chỉnh sửa
                                                    </MDBBtn>
                                                )}
                                                <MDBBtn color="secondary" onClick={() => setBasicModal(false)}>
                                                    Đóng
                                                </MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModalContent>
                                    </MDBModalDialog>
                                </MDBModal>
                            </div>
                        </div>
                    ) : (
                        <div key={index}>
                            <div>Lịch khám chuyên khoa {formData.medicalSpecial}</div>
                            {/* <div>{formData.specialty}</div> */}
                            <div>{formData.appointmentDate}</div>
                            <div>{formData.appointmentTime}</div>
                            <div>
                                <div>
                                    <MDBBtn onClick={() => toggleOpen(index)}>Chi tiết</MDBBtn>
                                    <MDBBtn color="danger" onClick={() => handleDelete(formData.id)}>
                                        Xóa
                                    </MDBBtn>
                                </div>
                                <MDBModal open={basicModal} onHide={() => setBasicModal(false)} tabIndex="-1">
                                    <MDBModalDialog size="xl">
                                        <MDBModalContent>
                                            <MDBModalHeader>
                                                <MDBModalTitle>Lịch khám chuyên khoa {formData.medicalSpecial}</MDBModalTitle>
                                                <MDBBtn
                                                    className="btn-close"
                                                    color="none"
                                                    onClick={() => setBasicModal(false)}
                                                ></MDBBtn>
                                            </MDBModalHeader>
                                            <MDBModalBody>
                                                <OrderMedicalSpecialtiesList
                                                    formData={selectedFormData}
                                                    handleChange={handleChange}
                                                    editMode={editMode}
                                                />
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                {editMode ? (
                                                    <MDBBtn color="secondary" onClick={handleSave}>
                                                        Lưu thông tin
                                                    </MDBBtn>
                                                ) : (
                                                    <MDBBtn color="primary" onClick={() => setEditMode(true)}>
                                                        Chỉnh sửa
                                                    </MDBBtn>
                                                )}
                                                <MDBBtn color="secondary" onClick={() => setBasicModal(false)}>
                                                    Đóng
                                                </MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModalContent>
                                    </MDBModalDialog>
                                </MDBModal>
                            </div>
                        </div>
                    ),
                )
            ) : (
                <div>Không có lịch khám nào.</div>
            )}
        </>
    );
}
