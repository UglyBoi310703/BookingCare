let DoctorDataJson = localStorage.getItem("doctorData");

DoctorDataJson = JSON.parse(DoctorDataJson);

const doctorDataWithFunction = DoctorDataJson.map(doctor => ({
    ...doctor,
    Description () {
        return (
            <div className="doctor-single-content">
                <h2>Hoạt động chuyên ngành</h2>
                <p>
                    <strong>Trình độ:</strong> Phó giáo sư
                </p>
                <p>
                    <strong>Chuyên khoa:</strong> Ung bướu
                </p>
                <p>
                    <strong>Số năm kinh nghiệm:</strong> 40 năm
                </p>
                <h3>Quá trình công tác</h3>
                <ul>
                    <ul>
                        <li>
                            <b>1979 - 1984:</b> Bác sĩ phẫu thuật, Khoa điều trị tổng hợp, Bệnh viện K.
                            <br />
                        </li>
                        <li>
                            <b>1993 - 2004:</b> Trưởng khoa Ngoại Tổng hợp, Bệnh viện K.
                        </li>
                        <li>
                            <b>1998 - 2004:</b> Phó giám đốc Bệnh viện K.
                        </li>
                        <li>
                            <b>2004 - 2014:</b> Giám đốc bệnh viện E.
                        </li>
                        <li>
                            <b>1997 - nay:</b> Phó chủ tịch hội Ung thư Hà Nội.
                        </li>
                        <li>
                            <span>
                                <b>1975 - 1979:</b>{' '}
                            </span>
                            Bác sĩ nội trú, Bệnh viện Việt Đức.
                            <br />
                        </li>
                    </ul>
                </ul>
                <h3>
                    <strong>Quá trình học tập</strong>
                </h3>
                <ul>
                    <ul>
                        <li>
                            <b>1969 - 1975:</b> Đại học Y Hà Nội.
                        </li>
                        <li>
                            <b>1975 - 1978:</b> Bác sĩ nội trú Ngoại, Đại học Y Hà Nội.
                        </li>
                        <li>
                            <b>1982 - 1983:</b> Đào tạo chuyên khoa phẫu thuật Ngoại khoa tại Cộng hòa Pháp.
                        </li>
                        <li>
                            <b>1992 - 1994:</b> Bảo vệ luận án BSCKII, Tiến sĩ, Đại học Y Hà Nội.
                        </li>
                        <li>
                            <b>2002:</b> Được Nhà nước Việt Nam phong hàm Phó Giáo sư.
                        </li>
                    </ul>
                </ul>
                <h3>
                    <strong>Danh hiệu, phần thưởng, công trình nghiên cứu khoa học</strong>
                </h3>
                <ul>
                    <ul>
                        <li>Năm 2013: Huân chương lao động hạng hai.</li>
                        <li>Năm 2010: Thầy thuốc nhân dân.</li>
                        <li>
                            Phó giáo sư đã có nhiều công trình nghiên cứu khoa học được công bố trong và ngoài nước
                            về Phẫu thuật và Ung thư
                        </li>
                    </ul>
                    <p>
                        - Thành viên đề tài nghiên cứu Dịch tễ học, chẩn đoán, điều trị phòng chống một số bệnh Ung
                        thư ở Việt Nam (vú, gan, dạ dày, phổi, máu) do Nhà nước quản lý
                    </p>
                    <p>
                        - Đồng chủ nhiệm đề tài nghiên cứu thử lâm sàng giai đoạn III thuốc ức chế u Panacrin dùng
                        trong điều trị bổ trợ ung thư trên người do Nhà nước quản lý&nbsp;
                    </p>
                </ul>

                <br />
                <p>
                    <span>Lưu ý: </span>Lịch làm việc của Chuyên gia có thể thay đổi tùy theo tình hình thực tế mà
                    không báo trước. Cảm ơn Quý khách đã thông cảm.
                </p>
                <br />
            </div>
        );
    }
}));
export default doctorDataWithFunction