import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const AppointmentForm = ({ show, handleClose }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title className="text-primary">ĐẶT LỊCH KHÁM CÙNG CHUYÊN GIA</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light">
                    <Form className="bg-light">
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
                                    <option>Huyết học</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="clinic">
                                <Form.Label>Cơ sở khám</Form.Label>
                                <Form.Control as="select" required>
                                    <option>Chọn cơ sở khám</option>
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
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AppointmentForm;
