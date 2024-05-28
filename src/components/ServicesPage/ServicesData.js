import { Description } from '@mui/icons-material';

const ServicesData = [
    {
        id: 1,
        img: 'https://cdn.medon.vn/images/2023/05/30/573594e3-017f-4ea1-9184-3e274dc8c39e.png',
        name: 'GÓI XÉT NGHIỆM THEO DÕI SỐT',
        price: '450.000',
        gender: 'Nam, nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                    <h2>Mô tả</h2>
        * Địa điểm áp dụng: Tại các Bệnh viện phòng khám và Các đơn vị lấy mẫu tại nhà trên địa bàn Hà Nội<br></br>* Thời gian áp dụng: Từ ngày 01/4/2023 đến 31/12/2024<br/>* Ý nghĩa gói khám:<br/>- Các xét nghiệm đánh giá tình trạng sức khỏe của người bệnh trong quá trình theo dõi và điều trị sốt xuất huyết tại nhà để có thái độ xử trí phù hợp
    </div>
            )
        },
    },
    {
        id: 2,
        img: 'https://cdn.medon.vn/images/2023/04/06/b94ee63f-9947-4182-944f-1cf55c0d4099.png',
        name: 'GÓI XÉT NGHIỆM SÀNG LỌC VIRUS HỢP BÀO',
        price: '1.610.000',
        gender: 'Nam, nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                    <h2>Mô tả</h2>
                    * Địa điểm áp dụng: Tại các Bệnh viện phòng khám và Các đơn vị lấy mẫu tại nhà trên địa bàn Hà Nội<br/>* Thời gian áp dụng: Từ ngày 01/4/2023 đến 31/12/2024<br/>* Ý nghĩa gói khám:<br/>- Các xét nghiệm đánh giá tình trạng sức khỏe của người bệnh để có thái độ xử trí phù hợp<br/>- Các xét nghiệm xác định tác nhân thường gặp có thể phát hiện được kể từ mốc 24h (sau sốt- hạn chế nguy cơ âm tính giả), gồm:<br/>+ Sốt XH Dengue: Test Dengue NS1/IgM/IgG,&nbsp;<br/>&nbsp;
                </div>
            )
        },
    },
    {
        id: 3,
        img: 'https://cdn.medon.vn/images/2023/04/06/47a25eb5-4dd3-4486-b7a6-23eb87938178.png',
        name: 'GÓI XÉT NGHIỆM SÀNG LỌC VIRUS CÚM AB',
        price: '1.290.000',
        gender: 'Nam, nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                    <h2>Mô tả</h2>
                    * Địa điểm áp dụng: Tại các Bệnh viện phòng khám và Các đơn vị lấy mẫu tại nhà trên địa bàn Hà Nội<br/>* Thời gian áp dụng: Từ ngày 01/4/2023 đến 31/12/2024<br/>* Ý nghĩa gói khám:<br/>- Các xét nghiệm đánh giá tình trạng sức khỏe của người bệnh để có thái độ xử trí phù hợp<br/>- Các xét nghiệm xác định tác nhân thường gặp có thể phát hiện được kể từ mốc 24h (sau sốt- hạn chế nguy cơ âm tính giả), gồm:<br/>+ Sốt XH Dengue: Test Dengue NS1/IgM/IgG,&nbsp;<br/>&nbsp;
                </div>
            )
        },
    },
    {
        id: 4,
        img: 'https://cdn.medon.vn/images/2023/01/16/d1f89230-4f99-4512-bff5-75e47c584aa1.png',
        name: 'GÓI XÉT NGHIỆM SÀNG LỌC VIRUS HỢP BÀO HÔ HẤP',
        price: '960.000',
        gender: 'Nam, nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                    <h2>Mô tả</h2>
                    * Địa điểm áp dụng: Tại các Bệnh viện phòng khám và Các đơn vị lấy mẫu tại nhà trên địa bàn Hà Nội<br/>* Thời gian áp dụng: Từ ngày 01/4/2023 đến 31/12/2024<br/>* Ý nghĩa gói khám:<br/>- Các xét nghiệm đánh giá tình trạng sức khỏe của người bệnh để có thái độ xử trí phù hợp<br/>- Các xét nghiệm xác định tác nhân thường gặp có thể phát hiện được kể từ mốc 24h (sau sốt- hạn chế nguy cơ âm tính giả), gồm:<br/>+ Sốt XH Dengue: Test Dengue NS1/IgM/IgG,&nbsp;<br/>&nbsp;
                </div>
            )
        },
    },
    {
        id: 5,
        img: 'https://cdn.medon.vn/images/2023/04/06/124fbb80-cebf-49a8-95b0-d2eb2886b926.png',
        name: 'GÓI XÉT NGHIỆM SÀNG LỌC BỆNH LÝ DO VIRUS EV71',
        price: '725.000 ',
        gender: 'Nam, nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description: ()=> (
            <div >
                    
            * Địa điểm áp dụng: Tại các Bệnh viện phòng khám và Các đơn vị lấy mẫu tại nhà trên địa bàn Hà Nội<br></br>* Thời gian áp dụng: Từ ngày 01/4/2023 đến 31/12/2024<br/>* Ý nghĩa gói khám:<br/>- Các xét nghiệm đánh giá tình trạng sức khỏe của người bệnh trong quá trình theo dõi và điều trị sốt xuất huyết tại nhà để có thái độ xử trí phù hợp
            </div>
        ),
    },
    {
        id: 6,
        img: 'https://cdn.medon.vn/images/2023/04/12/f03cab67-38ee-4d6e-b18f-5072192de31f.png',
        name: 'GÓI VI CHẤT TRẺ EM TỔNG QUÁT NÂNG CAO',
        price: '1.778.000',
        gender: 'Nam, nữ',
        age: '0-16',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 7,
        img: 'https://cdn.medon.vn/images/2023/03/09/93a7f1b3-7b46-462d-9369-b9bac89ba7a5.png',
        name: 'GÓI TỔNG QUÁT NÂNG CAO NAM - HÀ NỘI',
        price: '4.055.000',
        gender: 'Nam',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 8,
        img: 'https://cdn.medon.vn/images/2023/03/09/7ecfe136-f525-43ae-8e52-ee226986d5bd.png',
        name: 'GÓI TỔNG QUÁT CƠ BẢN NỮ',
        price: '2.570.000',
        gender: 'Nữ',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 9,
        img: 'https://cdn.medon.vn/images/2023/03/09/510b41cb-5cfd-4b66-a97f-36c8293c4743.png',
        name: 'GÓI TẦM SOÁT UNG THƯ VÚ NÂNG CAO',
        price: '5.285.000',
        gender: 'Nữ ',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 10,
        img: 'https://cdn.medon.vn/images/2023/04/12/7d06368b-4268-420f-a211-0766abf4483a.png',
        name: 'GÓI TẦM SOÁT BỆNH LÝ UNG THƯ CHO NỮ',
        price: '1.805.000 đ',
        gender: 'Nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 11,
        img: 'https://cdn.medon.vn/images/2023/04/27/6e4cb143-26c1-4388-a4e1-5589f4110a66.png',
        name: 'SLTS không xâm lấn(NIPT-BasicSave) thường',
        price: '2.900.000 ₫',
        gender: 'Nữ',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 12,
        img: 'https://cdn.medon.vn/images/2023/03/01/7f8008e3-7260-4ee9-83ff-b505a2a35f78.png',
        name: 'GÓI TẦM SOÁT BỆNH LÝ UNG THƯ CHO NAM',
        price: '2.460.000 ₫',
        gender: 'Nam',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 13,
        img: 'https://cdn.medon.vn/images/2023/02/21/d0c726f4-9b01-42fb-a56d-cb2db1ed1053.png',
        name: 'Gói sàng lọc trước sinh không xâm lấn (NIPT-Twin)',
        price: '5.130.000 ₫',
        gender: 'Nữ',
        age: '18-55 tuổi',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 14,
        img: 'https://cdn.medon.vn/images/2023/02/21/74e95f25-f7b3-41e8-9a20-ff9e57a4efca.png',
        name: 'Gói SLTS không xâm lấn(NIPT-ExtraSave)',
        price: '3.150.000 ₫',
        gender: 'Nữ',
        age: '18-55 tuổi',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 15,
        img: 'https://cdn.medon.vn/images/2023/02/21/268c0de7-86f2-4e16-8426-a30e7c547c92.png',
        name: 'Gói sàng lọc trước sinh không xâm lấn(NIPT-ProSave)',
        price: '4.050.000 ₫',
        gender: 'Nữ',
        age: '18-55 tuổi',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 16,
        img: 'https://cdn.medon.vn/images/2023/03/31/c9a1e275-6b61-447d-9258-8bf4903822ec.png',
        name: 'GÓI KIỂM TRA SỨC KHOẺ TỔNG QUÁT',
        price: '765.000 ₫',
        gender: 'Nam, nữ',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 17,
        img: 'https://cdn.medon.vn/images/2023/04/06/813a6b58-83dd-4cf1-a130-b20fba5a152d.png',
        name: 'GÓI SÀNG LỌC TÁC NHÂN GÂY SỐT TỔNG HỢP',
        price: '2.800.000 ₫',
        gender: 'Nam, nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 18,
        img: 'https://cdn.medon.vn/images/2023/06/13/2700c75c-91ae-4840-8d9f-b7b25d29ab12.png',
        name: 'GÓI UNG THƯ NAM',
        price: '1.960.000 ₫',
        gender: 'Nam',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 19,
        img: 'https://cdn.medon.vn/images/2023/06/13/e7fe8e16-e5fe-4cda-95cb-78c2f6708ca1.png',
        name: 'GÓI UNG THƯ NỮ',
        price: '2.480.000 ₫',
        gender: 'Nữ',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 20,
        img: 'https://cdn.medon.vn/images/2023/06/29/0f915452-efdc-4acf-bea0-8cfb7aac6d2c.png',
        name: 'GÓI TỔNG QUÁT VI CHẤT NÂNG CAO ',
        price: '1.935.000 ₫',
        gender: 'Nữ',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 21,
        img: 'https://cdn.medon.vn/images/2023/06/30/6f14051d-ac23-4230-85b1-690c298e9e82.png',
        name: 'GÓI TỔNG QUÁT VI CHẤT NÂNG CAO',
        price: '2.595.000 ₫',
        gender: 'Nam,nữ',
        age: '0+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 22,
        img: 'https://cdn.medon.vn/images/2023/06/30/9a134778-f2a0-4cc7-a7c3-51eff3b796dd.png',
        name: 'GÓI TẦM SOÁT UNG THƯ NAM - CẦN THƠ',
        price: '1.965.000 ₫',
        gender: 'Nam',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 23,
        img: 'https://cdn.medon.vn/images/2023/06/30/e48bff42-f0aa-4023-a77e-3d0eb0d19c1f.png',
        name: 'GÓI TẦM SOÁT UNG THƯ NỮ - CẦN THƠ',
        price: '2.040.000 ₫',
        gender: 'Nữ',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
    {
        id: 24,
        img: 'https://cdn.medon.vn/images/2023/06/13/2700c75c-91ae-4840-8d9f-b7b25d29ab12.png',
        name: 'GÓI UNG THƯ NAM',
        price: '1.960.000 ₫',
        gender: 'Nam',
        age: '16+',
        location: 'Hà Nội',
        DescriptionTitle: '',
        Description(){
            return (
                <div >
                <h2>Mô tả</h2>
                <strong>Địa điểm áp dụng:</strong><em>&nbsp;&nbsp;Áp dụng đối với dịch vụ lấy mẫu tận nơi và tại văn phòng trên địa bàn tỉnh Hà Nội</em><br/><strong>Thời gian áp dụng:</strong>&nbsp;<em>09/03/2023 đến 31/12/2024</em><br/><strong>** Gói xét nghiệm bao gồm:</strong><p><em>- Phát hiện sớm các bệnh lý ung thư thường gặp của nam<br/>- Đánh giá bệnh lý về máu<br/>- Đánh giá tổng quát tình trạng sức khoẻ( bệnh lý gan, thận, mật; các rối loạn chuyển hoá: đái tháo đường, rối loạn lipid máu, gút,...<br/>- Kiểm tra nồng độ Sắt,<br/>- Sàng lọc viêm gan Virus B- C,<br/>- Đo tải lượng kháng thể VGB)<br/>- Đánh giá chức năng tuyến giáp</em><br/><strong>***Khuyến cáo:</strong><br/><em>- Dành cho NAM, đặc biệt nam ở độ tuổi cận trung niên và trung niên (tuổi từ 35 trở lên).<br/>-Các xét nghiệm kiểm tra các chỉ số dấu ấn ung thư các cơ quan chỉ có giá trị sàng lọc, kết quả các chỉ số này không dùng đơn độc để chẩn đoán ung thư, cũng không dùng đơn độc để loại trừ hoàn toàn nguy cơ ung thư của cơ quan bộ phận tương ứng.</em></p>
            </div>
            )
        },
    },
];

export default ServicesData;
