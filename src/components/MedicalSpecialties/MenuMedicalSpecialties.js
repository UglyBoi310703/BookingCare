import React from 'react';
import MedicalSpecialtiesItem from './MedicalSpecialtiesItem';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';
import styles from './MedicalSpecialties.scss';
const menuMedicalSpecialties = [
    {
        id: 1,
        imgSrcMain: 'https://medlatec.vn/media/418/catalog/specialty13-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/156/catalog/service6-2.png?size=68',
        titile: 'Chuẩn đoán hình ảnh',
    },
    {
        id: 2,
        imgSrcMain: 'https://medlatec.vn/media/479/catalog/specialty6-1-1.png?size=72',
        imgSrcHover: 'https://medlatec.vn/media/477/catalog/specialty6-2-1.png?size=72',
        titile: 'Khoa ngoại',
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
];

function MenuMedicalSpecialties() {
    return (
        <div className='MedicalSpecial'>
            <div className="MedicalSpecial-title">
                <h2>
                    Các chuyên khoa y tế tại <span>MEDLATEC</span>
                </h2>
            </div>
            <MDBCardGroup className="CardGroup">
                {menuMedicalSpecialties.map((items) => (
                    <MedicalSpecialtiesItem
                        key={items.id}
                        srcImgMain={items.imgSrcMain}
                        srcImgHover={items.imgSrcHover}
                        title={items.titile}
                    />
                ))}
            </MDBCardGroup>
        </div>
    );
}

export default MenuMedicalSpecialties;
