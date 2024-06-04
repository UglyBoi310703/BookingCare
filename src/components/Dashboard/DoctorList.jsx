import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaStar, FaTrash } from 'react-icons/fa';
import { FaTimes, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import EditDoctorModel from './EditDoctorModel';

const schema = yup.object({
    name: yup.string().required(),
    role: yup.string().required(),
    academic_rank: yup.string().required(),
    degree: yup.string().required(),
});

function DoctorList() {
    const [doctorData, setDoctorData] = useState([]);
    const [openAddDoctorArea, setOpenAddDoctorArea] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [direction, setDirection] = useState('next');
    const [field, setField] = useState('id');
    const [order, setOrder] = useState('asc');
    const [temporaryPhoto, setTemporaryPhoto] = useState();
    const [selectFile, setSelectFile] = useState();
    const [uploading, setUploading] = useState(false);
    const [selectDoctor, setSelectDotor] = useState();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [selectProduct, setSelectProduct] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem('doctorData');
        if (storedData) {
            setDoctorData(JSON.parse(storedData));
        }
    }, []);

    const handleCloseAddProductArea = () => {
        setOpenAddDoctorArea(false);
        reset();
        setSelectFile();
        setTemporaryPhoto();
    };

    const handleAddNewDoctor = (data) => {
        if (!data?.img) {
            Swal.fire({
                title: 'Alert!',
                text: 'You need to upload a photo first!',
                icon: 'warning',
            });
            return;
        }

        const newDoctor = { ...data, id: uuidv4() };
        const updatedDoctorData = [...doctorData, newDoctor];

        localStorage.setItem('doctorData', JSON.stringify(updatedDoctorData));
        setDoctorData(updatedDoctorData);
        reset();
        setSelectFile(null);
        setTemporaryPhoto(null);
        toast.success('Doctor added successfully!');
    };

    const handleSelectDoctor = (doctor) => {
        console.log(1);
        // setSelectDotor(doctor);
        // console.log(selectDoctor);
    };

    const handleRemoveDoctor = (doctor) => {
        const doctorData = JSON.parse(localStorage.getItem('doctorData'));
        const updatedDoctorData = doctorData.filter((d) => d.id !== doctor.id);
        localStorage.setItem('doctorData', JSON.stringify(updatedDoctorData));
        setDoctorData(updatedDoctorData);
    };

    const handleSelectPhoto = (e) => {
        if (e.target.files[0]?.name) {
            const fake_photo = URL.createObjectURL(e.target.files[0]);
            setTemporaryPhoto(fake_photo);
            setSelectFile(e.target.files[0]);
        }
    };

    const handleUploadPhoto = async (e) => {
        e.stopPropagation();
        setUploading(true);
        const formData = new FormData();
        formData.append('file', selectFile);
        formData.append('upload_preset', 'ycufnlwr');
        let uploadResult = await axios.post('https://api.cloudinary.com/v1_1/djoawum55/image/upload', formData);
        setTemporaryPhoto(uploadResult?.data?.secure_url);
        setValue('img', uploadResult?.data?.secure_url);
        toast.success('Photo uploaded success!');
        setUploading(false);
    };

    return (
        <div className="container">
            <div className="row product-title">
                <div className="col-lg-12 d-flex align-items-center justify-content-between">
                    <h5>Danh sách bác sĩ</h5>
                    <button
                        className="btn btn-warning btn-sm d-flex align-items-center"
                        onClick={() => setOpenAddDoctorArea(true)}
                    >
                        <FaPlus size={15} className="me-2" />
                        Thêm mới bác sĩ
                    </button>
                </div>
            </div>
            {openAddDoctorArea && (
                <div className="product-form my-1">
                    <form onSubmit={handleSubmit(handleAddNewDoctor)} className="row">
                        <div className="col-md-4">
                            <div className="form-group mb-4">
                                <label className="form-label">Tên bác sĩ</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.name?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="tên bác sĩ"
                                    {...register('name')}
                                />
                                <span className="invalid-feedback">{errors?.name?.message}</span>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Chuyên khoa</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.role?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Chuyên khoa"
                                    {...register('role')}
                                />
                                <span className="invalid-feedback">{errors?.role?.message}</span>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label"></label>
                                <div className="d-flex">
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-sm flex-grow-1 me-2 d-flex align-items-center justify-content-center"
                                    >
                                        <FaPlus className="me-2" />
                                        Add
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCloseAddProductArea}
                                        className="btn btn-dark btn-sm flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FaTimes className="me-2" />
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group mb-4">
                                <label className="form-label">Học hàm</label>
                                <select
                                    className={`form-select form-select-sm form-control-sm ${
                                        errors?.academic_rank?.message ? 'is-invalid' : ''
                                    }`}
                                    defaultValue={''}
                                    {...register('academic_rank')}
                                >
                                    <option value={''} disabled>
                                        Chọn học hàm
                                    </option>
                                    <option value={'Giáo sư'}>Giáo sư</option>
                                    <option value={'Phó giáo sư'}>Phó giáo sư</option>
                                </select>
                                <span className="invalid-feedback">{errors?.academic_rank?.message}</span>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Học vị</label>
                                <select
                                    className={`form-select form-select-sm form-control-sm ${
                                        errors?.degree?.message ? 'is-invalid' : ''
                                    }`}
                                    defaultValue={''}
                                    {...register('degree')}
                                >
                                    <option value={''} disabled>
                                        Chọn học vị
                                    </option>
                                    <option value={'Tiến sĩ'}>Tiến sĩ</option>
                                    <option value={' Thạc sĩ'}>Thạc sĩ</option>
                                    <option value={' Bác sĩ nội trú'}>Bác sĩ nội trú</option>
                                </select>
                                <span className="invalid-feedback">{errors?.degree?.message}</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="border-dashed w-100 h-100"
                                onClick={() => document.getElementById('file-photo').click()}
                            >
                                {temporaryPhoto ? (
                                    <div
                                        role="button"
                                        className="d-flex flex-column align-items-center justify-content-between w-100 h-100 text-secondary"
                                    >
                                        <img
                                            style={{ maxWidth: '90%', maxHeight: '70%' }}
                                            src={temporaryPhoto}
                                            alt=""
                                        />
                                        {uploading ? (
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-sm d-flex align-items-center mt-2"
                                                disabled
                                            >
                                                <FaUpload className="me-3" />
                                                Uploading...
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-sm d-flex align-items-center mt-2"
                                                onClick={handleUploadPhoto}
                                            >
                                                <FaUpload className="me-3" />
                                                Upload
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div
                                        role="button"
                                        className="d-flex flex-column align-items-center justify-content-center w-100 h-100 text-secondary"
                                    >
                                        <FaUpload size={50} className="mb-2" />
                                        <span className="text-decoration-underline">Browse a photo</span>
                                    </div>
                                )}
                                <input
                                    id="file-photo"
                                    type="file"
                                    accept="image/*"
                                    className="d-none"
                                    onChange={handleSelectPhoto}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}
            <div className="row product-list">
                <table className="table table-striped product-table">
                    <thead>
                        <tr>
                            <th className="text-center">Tên bác sĩ</th>
                            <th className="text-start">Chuyên khoa</th>
                            <th className="text-start">Học hàm</th>
                            <th className="text-end">Học vị</th>
                            <th className="text-center">Đánh giá</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorData?.map((doctor) => (
                            <tr key={doctor.id}>
                                <td className="text-start align-middle" style={{ minWidth: '250px' }}>
                                    <div className="d-flex align-items-center">
                                        <img style={{ width: '50px' }} src={doctor.img} alt="" />
                                        <span className="ms-2">{doctor.name}</span>
                                    </div>
                                </td>
                                <td className="text-start align-middle">{doctor.role}</td>
                                <td className="text-start align-middle">{doctor.academic_rank}</td>
                                <td className="text-end align-middle">
                                    <div className="d-flex flex-column">
                                        <span>{doctor.degree}</span>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                        <div className="d-flex align-items-center">
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <FaTrash
                                            className="text-danger"
                                            role="button"
                                            onClick={() => handleRemoveDoctor(doctor)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex align-items-center justify-content-between"></div>
            </div>
        </div>
    );
}

export default DoctorList;
