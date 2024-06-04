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
                formDataArray.map((formData, index) => (
                    formData.doctor ? (<div key={index}>
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
                                            {selectedFormData && (
                                                <Form className="bg-light mb-4">
                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`fullName-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Họ và tên</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="fullName"
                                                                value={selectedFormData.fullName}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`phoneNumber-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Số điện thoại</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="phoneNumber"
                                                                value={selectedFormData.phoneNumber}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group>
                                                            <Form.Label>Ngày sinh</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                name="dateOfBirth"
                                                                value={selectedFormData.dateOfBirth}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`email-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                name="email"
                                                                value={selectedFormData.email}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`gender-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Giới tính</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="gender"
                                                                value={selectedFormData.gender}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.gender}</option>
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`city-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Tỉnh/Thành phố</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="city"
                                                                value={selectedFormData.city}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.city}</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`district-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Quận/Huyện</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="district"
                                                                value={selectedFormData.district}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.district}</option>
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`address-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Địa chỉ</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="address"
                                                                value={selectedFormData.address}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`specialty-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Chuyên khoa</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="specialty"
                                                                value={selectedFormData.specialty}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.specialty}</option>
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`clinic-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Bác sĩ</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="doctor"
                                                                value={selectedFormData.doctor}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.doctor}</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`appointmentDate-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Ngày khám</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                name="appointmentDate"
                                                                value={selectedFormData.appointmentDate}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`appointmentTime-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Giờ khám</Form.Label>
                                                            <Form.Control
                                                                type="time"
                                                                name="appointmentTime"
                                                                value={selectedFormData.appointmentTime}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                    <Form.Group controlId={`notes-${selectedFormData.index}`}>
                                                        <Form.Label>Ghi chú</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            name="notes"
                                                            value={selectedFormData.notes}
                                                            onChange={handleChange}
                                                            readOnly={!editMode}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            )}
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
                        
                    </div>) : (<div key={index}>
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
                                            {selectedFormData && (
                                                <Form className="bg-light mb-4">
                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`fullName-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Họ và tên</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="fullName"
                                                                value={selectedFormData.fullName}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`phoneNumber-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Số điện thoại</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="phoneNumber"
                                                                value={selectedFormData.phoneNumber}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group>
                                                            <Form.Label>Ngày sinh</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                name="dateOfBirth"
                                                                value={selectedFormData.dateOfBirth}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`email-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                name="email"
                                                                value={selectedFormData.email}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`gender-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Giới tính</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="gender"
                                                                value={selectedFormData.gender}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.gender}</option>
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`city-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Tỉnh/Thành phố</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="city"
                                                                value={selectedFormData.city}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.city}</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`district-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Quận/Huyện</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="district"
                                                                value={selectedFormData.district}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.district}</option>
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`address-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Địa chỉ</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="address"
                                                                value={selectedFormData.address}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`servicesprice-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Giá gói khám</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="serviceprice"
                                                                value={selectedFormData.serviceprice}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.serviceprice}</option>
                                                            </Form.Control>
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`services-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Bác sĩ</Form.Label>
                                                            <Form.Control
                                                                as="select"
                                                                name="services"
                                                                value={selectedFormData.services}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            >
                                                                <option>{selectedFormData.services}</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mb-3">
                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`appointmentDate-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Ngày khám</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                name="appointmentDate"
                                                                value={selectedFormData.appointmentDate}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            controlId={`appointmentTime-${selectedFormData.index}`}
                                                        >
                                                            <Form.Label>Giờ khám</Form.Label>
                                                            <Form.Control
                                                                type="time"
                                                                name="appointmentTime"
                                                                value={selectedFormData.appointmentTime}
                                                                onChange={handleChange}
                                                                readOnly={!editMode}
                                                            />
                                                        </Form.Group>
                                                    </Row>

                                                    <Form.Group controlId={`notes-${selectedFormData.index}`}>
                                                        <Form.Label>Ghi chú</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            name="notes"
                                                            value={selectedFormData.notes}
                                                            onChange={handleChange}
                                                            readOnly={!editMode}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            )}
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
                        
                    </div>) 
                ))
            ) : (
                <div>Không có lịch khám nào.</div>
            )}
        </>
    );
}
