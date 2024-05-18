import React, { useEffect, useRef } from 'react';
import { SmoothHorizontalScrolling } from '../../utils';
import doctorData from '~/assets/data/DoctorData';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
function Doctors() {
    const sliderRef = useRef();
    const movieRef = useRef();

    //         <h5 className="title-doctors">Đội ngũ chuyên gia</h5>
    //         <div className="row d-flex justify-content-around g-5">
    //             <div className="card col-md-3">
    //                 <img
    //                     src="https://medlatec.vn/media/1505/catalog/quocdung-1.png?size=256"
    //                     class="card-img-top"
    //                     alt="Fissure in Sandstone"
    //                 />
    //                 <div class="card-body">
    //                     <h5 className="card-title doctor-name">PGS.TS.BSCC Nguyễn Quốc Dũng</h5>
    //                     <h5 class="card-title">Chuyên khoa - Chẩn đoán hình ảnh</h5>
    //                     <p class="card-text">
    //                         Phó Chủ tịch hội Điện quang và Y học hạt nhân Việt Nam, Phó Chủ tịch Hội đồng Khoa học công
    //                         nghệ và đào tạo MEDLATEC GROUP, Giám đốc Chuyên môn Trung tâm Chẩn đoán hình ảnh MEDLATEC
    //                     </p>
    //                     <a href="#!" className="btn btn-primary book" data-mdb-ripple-init>
    //                         Đặt lịch
    //                     </a>
    //                 </div>
    //             </div>
    //             <div className="card col-md-3">
    //                 <img
    //                     src="https://medlatec.vn/media/1599/catalog/20210311_avt-BS+Ngh%e1%bb%8b.png?size=256"
    //                     className="card-img-top"
    //                     alt="Fissure in Sandstone"
    //                 />
    //                 <div class="card-body">
    //                     <h5 className="card-title doctor-name">TTND.PGS.TS Đoàn Hữu Nghị</h5>
    //                     <h5 className="card-title">Chuyên khoa - Ung bướu</h5>
    //                     <p className="card-text">
    //                         - Thành viên đề tài nghiên cứu Dịch tễ học, chẩn đoán, điều trị phòng chống một số bệnh Ung
    //                         thư ở Việt Nam (vú, gan, dạ dày, phổi, máu) do Nhà nước quản lý
    //                     </p>
    //                     <a href="#!" className="btn btn-primary book" data-mdb-ripple-init>
    //                         Đặt lịch
    //                     </a>
    //                 </div>
    //             </div>
    //             <div className="card col-md-3 d-flex-column justify-content-between">
    //                 <img
    //                     src="https://medlatec.vn/media/28692/catalog/pgs-ts-le-chinh-dai.png?size=256"
    //                     className="card-img-top"
    //                     alt="Fissure in Sandstone"
    //                 />
    //                 <div className="card-body">
    //                     <h5 className="card-title doctor-name">PGS.TS Lê Chính Đại</h5>
    //                     <h5 className="card-title">Chuyên khoa - Ung bướu</h5>
    //                     <p className="card-text">
    //                         Nguyên Phó giám đốc Trung tâm Y học hạt nhân và ung bướu, Bệnh viện Bạch Mai; Nguyên Trưởng
    //                         khoa Xạ, Bệnh viện K Trung ương
    //                     </p>
    //                     <a href="#!" className="btn btn-primary book" data-mdb-ripple-init>
    //                         Đặt lịch
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };
    const handleShowDetail = (movie) => {};

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    return doctorData.length > 0 ? (
        <div className="ContentsSection bg-white">
            <h1 className="heading">Đội ngũ y bác sĩ</h1>
            <div
                className="MoviesSlider"
                ref={sliderRef}
                style={{ gridTemplateColumns: `repeat(${doctorData.length}, 300px)` }}
            >
                {doctorData.map((doctor, index) => (
                    <div
                        key={index}
                        className="movieItem"
                        style={{ padding: '30px' }}
                        ref={movieRef}
                        onClick={() => handleShowDetail()}
                    >
                        <img src={`${doctor.img}`} alt="" />
                    </div>
                ))}
            </div>
            <div className="btnLeft">
                <FaChevronLeft onClick={handleScrollLeft} />
            </div>
            <div className="btnRight">
                <FaChevronRight onClick={handleScrollRight} />
            </div>
        </div>
    ) : (
        <div className="ContentsSection bg-black text-white fs-18"></div>
    );
}

export default Doctors;
