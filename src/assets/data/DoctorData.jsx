let doctorData = [
    {
        id: 1,
        img: 'https://medlatec.vn/media/1555/catalog/thaytri-removebg-preview.png?size=256',
        name: 'TTND.GS.AHLĐ Nguyễn Anh Trí',
        role: 'Chuyên khoa - Huyết học',
        degree: 'Thạc sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 2,
        img: 'https://medlatec.vn/media/1505/catalog/quocdung-1.png?size=256',
        name: 'TTND.PGS.TS Đoàn Hữu Nghị',
        role: 'Chuyên khoa - Ung bướu',
        degree: 'Tiến sĩ',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 3,
        img: 'https://medlatec.vn/media/28692/catalog/pgs-ts-le-chinh-dai.png?size=256',
        name: 'PGS.TS Lê Chính Đại',
        role: 'Chuyên khoa - Xét nghiệm',
        degree: 'Bác sĩ nội trú',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 4,
        img: '	https://medlatec.vn/media/28692/catalog/pgs-ts-le-chinh-dai.png?size=256',
        name: 'TTND.GS.AHLĐ Nguyễn Anh Trí',
        role: 'Chuyên khoa - Răng hàm mặt',
        degree: 'Thạc sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 5,
        img: '	https://medlatec.vn/media/1593/catalog/20210305_BS+Van+Hong+tieu+hoa.png?size=256',
        name: 'PGS.TS Nguyễn Thị Vân Hồng',
        role: 'Chuyên khoa - Ung bướu',
        degree: 'Tiến sĩ',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 6,
        img: 'https://medlatec.vn/media/1590/catalog/20191129_2+(2)-1.png?size=256',
        name: 'TTND.GS.AHLĐ Nguyễn Anh Trí',
        role: 'Chuyên khoa - Huyết học',
        degree: 'Bác sĩ nội trú',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 7,
        img: 'https://medlatec.vn/media/42900/catalog/pham-thi-hong-thi.png?size=256',
        name: 'TPGS.TS Trịnh Thị Ngọc',
        role: 'Chuyên khoa - Răng hàm mặt',
        degree: 'Thạc sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 8,
        img: 'https://medlatec.vn/media/1595/catalog/20191205_PGS.TS+Ho%c3%a0ng+Th%e1%bb%8b+Ph%c6%b0%e1%bb%a3ng+-+H%c3%b4+h%e1%ba%a5p.png?size=256',
        name: 'TTND.THƯT.PGS.TS Phạm Thị Hồng Thi',
        role: 'Chuyên khoa - Huyết học',
        degree: 'Tiến sĩ',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 9,
        img: 'https://medlatec.vn/media/1594/catalog/20200718_PGS.TS+Nguy%e1%bb%85n+Mai+H%e1%bb%93ng.png?size=256',
        name: 'PGS.TS Hoàng Thị Phượng',
        role: 'Chuyên khoa - Xét nghiệm',
        degree: 'Bác sĩ nội trú',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 10,
        img: 'https://medlatec.vn/media/42246/catalog/nguyen-van-doan.png?size=256',
        name: 'PGS.TS Nguyễn Mai Hồng',
        role: 'Chuyên khoa - Răng hàm mặt',
        degree: 'Thạc sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 11,
        img: 'https://medlatec.vn/media/41018/catalog/Th%e1%ba%a7y+%c3%81nh.png?size=256',
        name: 'TPGS.TS Đặng Thị Minh Nguyệt',
        role: 'Chuyên khoa - Ung bướu',
        degree: 'Tiến sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 12,
        img: 'https://medlatec.vn/media/1596/catalog/20200720_BS+Hoang+Thi+Ngoc+Lan.png?size=256',
        name: 'PGS.TS Nguyễn Văn Đoàn',
        role: 'Chuyên khoa - Xét nghiệm',
        degree: 'Bác sĩ nội trú',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 13,
        img: 'https://medlatec.vn/media/41174/catalog/Th%e1%ba%a7y-Tr%e1%ba%a7n-Ng%e1%bb%8dc-D%c5%a9ng.png?size=256',
        name: 'PGS.TS Đỗ Ngọc Ánh',
        role: 'Chuyên khoa - Huyết học',
        degree: 'Thạc sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 14,
        img: 'https://medlatec.vn/media/41174/catalog/Th%e1%ba%a7y-Tr%e1%ba%a7n-Ng%e1%bb%8dc-D%c5%a9ng.png?size=256',
        name: 'PGS.TS Đỗ Ngọc Ánh',
        role: 'Chuyên khoa - Huyết học',
        degree: 'Bác sĩ nội trú',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 15,
        img: 'https://medlatec.vn/media/39768/catalog/PGS+Huy+tach+nen+(2).png?size=256',
        name: 'PGS.TS Hoàng Thị Ngọc Lan',
        role: 'Chuyên khoa - Răng hàm mặt',
        degree: 'Tiến sĩ',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 16,
        img: 'https://medlatec.vn/media/41272/catalog/pgs-thai-son-medlatec-removebg-preview-1.png?size=256',
        name: 'TS.BSCKII Trần Ngọc Dũng',
        role: 'Chuyên khoa - Xét nghiệm',
        degree: 'Thạc sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 17,
        img: 'https://medlatec.vn/media/27506/catalog/zyro-image.png?size=256',
        name: 'PGS.TS. Vũ Quang Huy',
        role: 'Chuyên khoa - Răng hàm mặt',
        degree: 'Bác sĩ nội trú',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 18,
        img: 'https://medlatec.vn/media/41017/catalog/C%c3%b4+H%c3%a0.png?size=256',
        name: 'PGS.TS Nguyễn Thái Sơn',
        role: 'Chuyên khoa - Huyết học',
        degree: 'Tiến sĩ',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 19,
        img: 'https://medlatec.vn/media/41017/catalog/C%c3%b4+H%c3%a0.png?size=256',
        name: 'BSCKII Phạm Kim Bình',
        role: 'Chuyên khoa - Ung bướu',
        degree: 'Bác sĩ nội trú',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 20,
        img: 'https://medlatec.vn/media/41017/catalog/C%c3%b4+H%c3%a0.png?size=256',
        name: 'TS.BS Phạm Hoàng Ngọc Hoa',
        role: 'Chuyên khoa - Răng hàm mặt',
        degree: 'Tiến sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
        
    },
    {
        id: 21,
        img: 'https://medlatec.vn/media/41017/catalog/C%c3%b4+H%c3%a0.png?size=256',
        name: 'TS. Trần Thị Hồng Hà',
        role: 'Chuyên khoa - Huyết học',
        degree: 'Thạc sĩ',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 22,
        img: 'https://medlatec.vn/media/1514/catalog/conghoan-2.png?size=256',
        name: 'TTND.TTƯT.PGS.TSKH Nguyễn Đình Tuấn',
        role: 'Chuyên khoa - Xét nghiệm',
        degree: 'Tiến sĩ',
        academic_rank: 'Phó giáo sư',
        vote: 5,
        
    },
    {
        id: 23,
        img: 'https://medlatec.vn/media/1509/catalog/khachau-3.png?size=256',
        name: 'PGS.TS.TTƯT Thái Khắc Châu',
        role: 'Chuyên khoa - Răng hàm mặt',
        degree: 'Tiến sĩ',
        academic_rank: 'Giáo sư',
        vote: 5,
    },
];

// const doctorDataJson = JSON.stringify(doctorData);
// localStorage.setItem('doctorData', doctorDataJson);
export default doctorData;
