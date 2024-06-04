import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
const saveToLocalStorage = (formData) => {
    let existingData = JSON.parse(localStorage.getItem('orderFormData'));
    
    if (!Array.isArray(existingData)) {
        existingData = [];
    }
    
    existingData.push(formData);
    localStorage.setItem('orderFormData', JSON.stringify(existingData));
};


const OrderDoctorForm = ({DoctorName,Role,offModal}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        const formData = {
            id: uuidv4(),
            fullName: e.target.elements.fullName.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            dateOfBirth: e.target.elements.dateOfBirth.value,
            email: e.target.elements.email.value,
            gender: e.target.elements.gender.value,
            city: e.target.elements.city.value,
            district: e.target.elements.district.value,
            address: e.target.elements.address.value,
            specialty: e.target.elements.specialty.value,
            doctor: e.target.elements.doctor.value,
            appointmentDate: e.target.elements.appointmentDate.value,
            appointmentTime: e.target.elements.appointmentTime.value,
            notes: e.target.elements.notes.value,
        };
        saveToLocalStorage(formData);
        alert("Đặt lịch khám thành công");
        offModal();
        console.log(formData)
    };
    return (
        <>
                    <Form onSubmit={handleSubmit} className="bg-light">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="fullName">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ và tên" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="phoneNumber">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="text" placeholder="Nhập số điện thoại" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="dateOfBirth">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control type="date" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="gender">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Control as="select" required>
                                    <option>Chọn giới tính</option>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                    <option>Khác</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="city">
                                <Form.Label>Tỉnh/Thành phố</Form.Label>
                                <Form.Control as="select" required>
                                    <option>Chọn Tỉnh/Thành phố</option>
                                    <option>Hà Nội</option>
                                    <option>TP Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="district">
                                <Form.Label>Quận/Huyện</Form.Label>
                                <Form.Control as="select" required>
                                    <option>Chọn Quận/Huyện</option>
                                    <option>Quận Hai Bà Trưng</option>
                                    <option>Quận Hoàng Mai</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="address">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control type="text" placeholder="Nhập địa chỉ" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="specialty">
                                <Form.Label>Chuyên khoa</Form.Label>
                                <Form.Control as="select" required>
                                    <option>{Role}</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="doctor">
                                <Form.Label>Bác sĩ</Form.Label>
                                <Form.Control as="select" required>
                                   <option>{DoctorName}</option>
                                  
                                </Form.Control>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="appointmentDate">
                                <Form.Label>Ngày khám</Form.Label>
                                <Form.Control type="date" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="appointmentTime">
                                <Form.Label>Chọn giờ</Form.Label>
                                <Form.Control type="time" required />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="notes" className="mb-3">
                            <Form.Label>Nội dung yêu cầu</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tôi cảm thấy..." required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Đặt lịch
                        </Button>
                    </Form>
             
        </>
    );
};

export default OrderDoctorForm;
