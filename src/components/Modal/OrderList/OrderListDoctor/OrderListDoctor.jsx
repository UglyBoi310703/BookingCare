import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const OrderListDoctor = ({ formData, handleChange, editMode }) => {
    if (!formData) return null;

    return (
        <Form className="bg-light mb-4">
            <Row className="mb-3">
                <Form.Group as={Col} controlId={`fullName-${formData.index}`}>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId={`phoneNumber-${formData.index}`}>
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId={`dateOfBirth-${formData.index}`}>
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId={`email-${formData.index}`}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId={`gender-${formData.index}`}>
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Control
                        as="select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        readOnly={!editMode}
                    >
                        <option>{formData.gender}</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId={`city-${formData.index}`}>
                    <Form.Label>Tỉnh/Thành phố</Form.Label>
                    <Form.Control
                        as="select"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        readOnly={!editMode}
                    >
                        <option>{formData.city}</option>
                    </Form.Control>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId={`district-${formData.index}`}>
                    <Form.Label>Quận/Huyện</Form.Label>
                    <Form.Control
                        as="select"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        readOnly={!editMode}
                    >
                        <option>{formData.district}</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId={`address-${formData.index}`}>
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        readOnly={!editMode}
                    />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId={`specialty-${formData.index}`}>
                    <Form.Label>Chuyên khoa</Form.Label>
                    <Form.Control
                        as="select"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        readOnly={!editMode}
                    >
                        <option>{formData.specialty}</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId={`clinic-${formData.index}`}>
                    <Form.Label>Bác sĩ</Form.Label>
                    <Form.Control
                        as="select"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        readOnly={!editMode}
                    >
                        <option>{formData.doctor}</option>
                    </Form.Control>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId={`appointmentDate-${formData.index}`}>
                <Form.Label>Ngày khám</Form.Label>
                <Form.Control
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    readOnly={!editMode}
                />
            </Form.Group>

            <Form.Group as={Col} controlId={`appointmentTime-${formData.index}`}>
                <Form.Label>Giờ khám</Form.Label>
                <Form.Control
                    type="time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    readOnly={!editMode}
                />
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} controlId={`notes-${formData.index}`}>
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control
                    as="textarea"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    readOnly={!editMode}
                />
            </Form.Group>
        </Row>
    </Form>
    );
};

export default OrderListDoctor;