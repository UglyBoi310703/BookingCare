import React, { useEffect, useState } from 'react';
import { FaEdit, FaEye, FaPlus, FaStar, FaTimes, FaTrash, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import doctorData from '~/assets/data/DoctorData';

const schema = yup.object({
    title: yup.string().required(),
    newPrice: yup.number().positive().required().typeError('price is a required field'),
    category: yup.string().required(),
    color: yup.string().required(),
    company: yup.string().required(),
    // img: yup.string().required(),
});

function DoctorList() {
    const [openAddProductArea, setOpenAddProductArea] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [direction, setDirection] = useState('next');
    const [field, setField] = useState('id');
    const [order, setOrder] = useState('asc');
    const [temporaryPhoto, setTemporaryPhoto] = useState();
    const [selectFile, setSelectFile] = useState();
    const [uploading, setUploading] = useState(false);

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

    const handleCloseAddProductArea = () => {
        setOpenAddProductArea(false);
        reset();
        setSelectFile();
        setTemporaryPhoto();
    };
    const handleAddNewProduct = (data) => {
        if (!data?.img) {
            Swal.fire({
                title: 'Alert!',
                text: 'You need upload a photo first!',
            });
            return;
        }
        let newProduct = {
            ...data,
            prevPrice: 0,
            star: 0,
            reviews: 0,
        };

        reset();
        setSelectFile();
        setTemporaryPhoto();
        toast.success('Product added success!');
    };

    const handleSelectProduct = (product) => {
        setSelectProduct(product);
    };

    const handleChangePageSize = (e) => {};

    const handleRemoveProduct = (product) => {};

    const handleSelectPhoto = (e) => {
        if (e.target.files[0]?.name) {
            const fake_photo = URL.createObjectURL(e.target.files[0]);
            setTemporaryPhoto(fake_photo);
            setSelectFile(e.target.files[0]);
        }
    };

    return (
        <div className="container">
            <div className="row product-title">
                <div className="col-lg-12 d-flex align-items-center justify-content-between">
                    <h5>Doctor List Management</h5>
                    <button
                        className="btn btn-warning btn-sm d-flex align-items-center"
                        onClick={() => setOpenAddProductArea(true)}
                    >
                        <FaPlus size={15} className="me-2" />
                        Add new Doctor
                    </button>
                </div>
            </div>

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
                            <tr>
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
                                        <span>{doctor.academic_rank}</span>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex flex-column align-items-center justify-content-center">
                                        <div className="d-flex align-items-center">
                                            <span className="me-1">{doctor.star}</span>
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                            <FaStar color="yellow" />
                                        </div>
                                        <div>
                                            <span className="me-1">{doctor.reviews}</span>
                                            <FaEye color="green" />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <FaEdit
                                            className="text-success me-1"
                                            role="button"
                                            onClick={() => handleSelectProduct(doctor)}
                                        />
                                        <FaTrash
                                            className="text-danger"
                                            role="button"
                                            onClick={() => handleRemoveProduct(doctor)}
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
