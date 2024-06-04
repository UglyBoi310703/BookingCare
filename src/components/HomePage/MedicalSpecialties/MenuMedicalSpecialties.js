import React from 'react';
import MedicalSpecialtiesItem from './MedicalSpecialtiesItem';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import styles from './MedicalSpecialties.scss';
const menuMedicalSpecialties = [
    {
        id: 1,
        imgSrcMain: 'https://medlatec.vn/media/418/catalog/specialty13-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/156/catalog/service6-2.png?size=68',
        titile: 'Chẩn đoán hình ảnh',
    },
    {
        id: 2,
        imgSrcMain: 'https://medlatec.vn/media/369/catalog/specialty7-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/144/catalog/specialty7-2.png?size=72',
        titile: 'Tiêu hóa',
    },
    {
        id: 3,
        imgSrcMain: 'https://medlatec.vn/media/257/catalog/specialty14-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/158/catalog/specialty14-2.png?size=72',
        titile: 'Xương khớp',
    },
    {
        id: 4,
        imgSrcMain: 'https://medlatec.vn/media/503/catalog/specialty16-1-2.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/501/catalog/specialty16-2-2.png?size=72',
        titile: 'Thần kinh',
    },
    {
        id: 5,
        imgSrcMain: 'https://medlatec.vn/media/487/catalog/specialty8-1-2.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/485/catalog/specialty8-2-2.png?size=72',
        titile: 'Nội tiết',
    },
    {
        id: 6,
        imgSrcMain: 'https://medlatec.vn/media/372/catalog/specialty10-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/150/catalog/specialty10-2.png?size=72',
        titile: 'Tim mạch',
    },
    {
        id: 7,
        imgSrcMain: 'https://medlatec.vn/media/466/catalog/specialty1-1-2.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/464/catalog/speciality1-2-3.png?size=68',
        titile: 'Chuyên khoa nội',
    },
    {
        id: 8,
        imgSrcMain: 'https://medlatec.vn/media/472/catalog/specialty5-1-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/470/catalog/service2-2-1.png?size=68',
        titile: 'Xét nghiệm',
    },
    {
        id: 9,
        imgSrcMain: 'https://medlatec.vn/media/258/catalog/specialty2-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/134/catalog/speciality2-2.png?size=68',
        titile: 'Ung bướu',
    },
    {
        id: 10,
        imgSrcMain: 'https://medlatec.vn/media/369/catalog/specialty7-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/144/catalog/specialty7-2.png?size=72',
        titile: 'Tiêu hóa',
    },
    {
        id: 11,
        imgSrcMain: 'https://medlatec.vn/media/378/catalog/specialty18-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/166/catalog/specialty18-2.png?size=72',
        titile: 'Răng hàm mặt',
    },
    {
        id: 12,
        imgSrcMain: 'https://medlatec.vn/media/508/catalog/specialty9-1-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/506/catalog/specialty9-2-1.png?size=72',
        titile: 'Mắt',
    },
];

function MenuMedicalSpecialties() {
    return (
        <div className="MedicalSpecial">
            <div className="MedicalSpecial-title">
                <h2>
                    Các chuyên khoa y tế tại <span>MEDLATEC</span>
                </h2>
            </div>
            <div className='MedicalSpecial-Group'>

                    {menuMedicalSpecialties.map((items) => (
                        <MedicalSpecialtiesItem
                            key={items.id}
                            srcImgMain={items.imgSrcMain}
                            srcImgHover={items.imgSrcHover}
                            title={items.titile}
                        />
                    ))}
                
            </div>
        </div>
    );
}

export default MenuMedicalSpecialties;
