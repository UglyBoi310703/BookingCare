let ServicesDataJson = localStorage.getItem("ServiceData");

ServicesDataJson = JSON.parse(ServicesDataJson);

const servicesDataWithFunction = ServicesDataJson.map(doctor => ({
    ...doctor,
    Description() {
        return (
            <div>
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong>
                <em>
                    &nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội
                </em>
                <br />
                <strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em>
                <br />
                <strong>** Gói xét nghiệm bao gồm:</strong>
                <p>
                    <em>
                        - Phát hiện sớm các bệnh lý ung thư thường gặp của nam
                        <br />- Đánh giá bệnh lý về máu
                        <br />- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển
                        hoá: đái tháo đường, rối loạn lipid máu, gút,...
                        <br />- Kiểm tra nồng độ Sắt,
                        <br />- Sàng lọc viêm gan Virus B- C,
                        <br />- Đo tải lượng kháng thể VGB)
                        <br />- Đánh giá chức năng tuyến giáp
                    </em>
                    <br />
                    <strong>***Khuyến cáo:</strong>
                    <br />
                    <em>
                        - Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).
                        <br />
                        -Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết
                        quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại
                        trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.
                    </em>
                </p>
            </div>
        );
    },
}));
export default servicesDataWithFunction