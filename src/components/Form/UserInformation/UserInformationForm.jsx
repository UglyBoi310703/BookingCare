import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import AvatarChanger from './Avatar/AvatarChange';

const UserInformationForm = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (event) => {
        event.preventDefault();
        setIsEditing(false);
        // Add your save logic here
    };

    return (
        <div className="UserInformationForm">
            <AvatarChanger />
            <Form className="bg-light" onSubmit={handleSaveClick}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="fullName">
                        <Form.Label>Họ và tên</Form.Label>
                        <Form.Control type="text" placeholder="Nhập họ và tên" required disabled={!isEditing} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="dateOfBirth">
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control type="date" required disabled={!isEditing} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="phoneNumber">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control type="text" placeholder="Nhập số điện thoại" required disabled={!isEditing} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập email" required disabled={!isEditing} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="gender">
                        <Form.Label>Giới tính</Form.Label>
                        <Form.Control as="select" required disabled={!isEditing}>
                            <option>Chọn giới tính</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                            <option>Khác</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="city">
                        <Form.Label>Tỉnh/Thành phố</Form.Label>
                        <Form.Control as="select" required disabled={!isEditing}>
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
                        <Form.Control as="select" required disabled={!isEditing}>
                            <option>Chọn Quận/Huyện</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="address">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control type="text" placeholder="Nhập địa chỉ" required disabled={!isEditing} />
                    </Form.Group>
                </Row>

                <div className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={handleEditClick} className="me-2">
                        Sửa thông tin
                    </Button>
                    <Button variant="primary" type="submit" disabled={!isEditing}>
                        Lưu thông tin
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default UserInformationForm;