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
import OrderDoctorForm from '../../Form/Order/OrderDoctor';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
export default function OrderList({ Doctorname, Role }) {
    const [basicModal, setBasicModal] = useState(false);
    const [formDataArray, setFormDataArray] = useState([]);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('orderDoctorFormData'));
        if (Array.isArray(storedData)) {
            setFormDataArray(storedData);
        }
    }, []);
    const toggleOpen = () => {
        setBasicModal(!basicModal);
    };

    return (
        <>
            {formDataArray.length > 0
                ? formDataArray.map((formData, index) => (
                      <div key={index}>
                          <div>Lịch khám cùng bác sĩ {formData.doctor}</div>
                          <div>{formData.specialty}</div>
                          <div>{formData.appointmentDate}</div>
                          <div>{formData.appointmentTime}</div>
                          {/* Hiển thị thêm các trường dữ liệu khác nếu cần */}
                          <div>
                              <MDBBtn onClick={toggleOpen}></MDBBtn>
                              <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex="-1">
                                  <MDBModalDialog size="xl">
                                      <MDBModalContent>
                                          <MDBModalHeader>
                                              <MDBModalTitle>LỊCH KHÁM CÙNG CHUYÊN GIA</MDBModalTitle>
                                              <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                                          </MDBModalHeader>
                                          <MDBModalBody>
                                              <Form key={index} className="bg-light mb-4">
                                                  <Row className="mb-3">
                                                      <Form.Group as={Col} controlId={`fullName-${index}`}>
                                                          <Form.Label>Họ và tên</Form.Label>
                                                          <Form.Control
                                                              type="text"
                                                              value={formData.fullName}
                                                              readOnly
                                                          />
                                                      </Form.Group>

                                                      <Form.Group as={Col} controlId={`phoneNumber-${index}`}>
                                                          <Form.Label>Số điện thoại</Form.Label>
                                                          <Form.Control
                                                              type="text"
                                                              value={formData.phoneNumber}
                                                              readOnly
                                                          />
                                                      </Form.Group>
                                                  </Row>

                                                  <Row className="mb-3">
                                                      <Form.Group as={Col} controlId={`dateOfBirth-${index}`}>
                                                          <Form.Label>Ngày sinh</Form.Label>
                                                          <Form.Control
                                                              type="date"
                                                              value={formData.dateOfBirth}
                                                              readOnly
                                                          />
                                                      </Form.Group>

                                                      <Form.Group as={Col} controlId={`email-${index}`}>
                                                          <Form.Label>Email</Form.Label>
                                                          <Form.Control type="email" value={formData.email} readOnly />
                                                      </Form.Group>
                                                  </Row>

                                                  <Row className="mb-3">
                                                      <Form.Group as={Col} controlId={`gender-${index}`}>
                                                          <Form.Label>Giới tính</Form.Label>
                                                          <Form.Control as="select" value={formData.gender} readOnly>
                                                              <option>{formData.gender}</option>
                                                          </Form.Control>
                                                      </Form.Group>

                                                      <Form.Group as={Col} controlId={`city-${index}`}>
                                                          <Form.Label>Tỉnh/Thành phố</Form.Label>
                                                          <Form.Control as="select" value={formData.city} readOnly>
                                                              <option>{formData.city}</option>
                                                          </Form.Control>
                                                      </Form.Group>
                                                  </Row>

                                                  <Row className="mb-3">
                                                      <Form.Group as={Col} controlId={`district-${index}`}>
                                                          <Form.Label>Quận/Huyện</Form.Label>
                                                          <Form.Control as="select" value={formData.district} readOnly>
                                                              <option>{formData.district}</option>
                                                          </Form.Control>
                                                      </Form.Group>

                                                      <Form.Group as={Col} controlId={`address-${index}`}>
                                                          <Form.Label>Địa chỉ</Form.Label>
                                                          <Form.Control type="text" value={formData.address} readOnly />
                                                      </Form.Group>
                                                  </Row>

                                                  <Row className="mb-3">
                                                      <Form.Group as={Col} controlId={`specialty-${index}`}>
                                                          <Form.Label>Chuyên khoa</Form.Label>
                                                          <Form.Control as="select" value={formData.specialty} readOnly>
                                                              <option>{formData.specialty}</option>
                                                          </Form.Control>
                                                      </Form.Group>

                                                      <Form.Group as={Col} controlId={`clinic-${index}`}>
                                                          <Form.Label>Bác sĩ</Form.Label>
                                                          <Form.Control as="select" value={formData.clinic} readOnly>
                                                              <option>{formData.doctor}</option>
                                                          </Form.Control>
                                                      </Form.Group>
                                                  </Row>

                                                  <Row className="mb-3">
                                                      <Form.Group as={Col} controlId={`appointmentDate-${index}`}>
                                                          <Form.Label>Ngày khám</Form.Label>
                                                          <Form.Control
                                                              type="date"
                                                              value={formData.appointmentDate}
                                                              readOnly
                                                          />
                                                      </Form.Group>

                                                      <Form.Group as={Col} controlId={`appointmentTime-${index}`}>
                                                          <Form.Label>Giờ khám</Form.Label>
                                                          <Form.Control
                                                              type="time"
                                                              value={formData.appointmentTime}
                                                              readOnly
                                                          />
                                                      </Form.Group>
                                                  </Row>

                                                  <Form.Group controlId={`notes-${index}`}>
                                                      <Form.Label>Ghi chú</Form.Label>
                                                      <Form.Control
                                                          as="textarea"
                                                          rows={3}
                                                          value={formData.notes}
                                                          readOnly
                                                      />
                                                  </Form.Group>
                                              </Form>
                                          </MDBModalBody>

                                          <MDBModalFooter>
                                              <MDBBtn color="secondary" onClick={toggleOpen}>
                                                  Sửa
                                              </MDBBtn>
                                              <MDBBtn color="secondary" onClick={toggleOpen}>
                                                  Lưu thông tin
                                              </MDBBtn>
                                          </MDBModalFooter>
                                      </MDBModalContent>
                                  </MDBModalDialog>
                              </MDBModal>
                          </div>
                          <div>Xóa</div>
                      </div>
                  ))
                : 'Danh sách trống :))'}
        </>
    );
}
