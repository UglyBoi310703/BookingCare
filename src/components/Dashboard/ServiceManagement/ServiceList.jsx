import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaStar, FaTrash, FaTimes, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import EditServiceModel from './EditServiceModel';

const schema = yup.object({
    name: yup.string().required('tên là trường bắt buộc'),
    price: yup.number().required('Giá tiền là trường bắt buộc').positive().typeError('Giá tiền là trường bắt buộc'),
    gender: yup.string().required('Giới tính là trường bắt buộc'),
    location: yup.string().required('địa chỉ là trường bắt buộc'),
    age: yup.string().required('Tuổi là trường bắt buộc'),
});

function ServiceList() {
    const [ServiceData, setServiceData] = useState([]);
    const [openAddServiceArea, setOpenAddServiceArea] = useState(false);
    const [temporaryPhoto, setTemporaryPhoto] = useState();
    const [selectFile, setSelectFile] = useState();
    const [uploading, setUploading] = useState(false);
    const [selectService, setSelectDotor] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const storedData = localStorage.getItem('ServiceData');
        if (storedData) {
            setServiceData(JSON.parse(storedData));
        }
    }, []);

    const handleCloseAddServiceArea = () => {
        setOpenAddServiceArea(false);
        reset();
        setSelectFile();
        setTemporaryPhoto();
    };

    const handleAddNewService = (data) => {
        if (!data?.img) {
            Swal.fire({
                title: 'Alert!',
                text: 'You need to upload a photo first!',
                icon: 'warning',
            });
            return;
        }
        Swal.fire({
            title: 'Confirm add Service',
            text: `Bạn có chắc chắn muốn thêm dịch vụ: ${data.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const newService = { ...data, id: uuidv4() };
                const updatedServiceData = [...ServiceData, newService];

                localStorage.setItem('ServiceData', JSON.stringify(updatedServiceData));
                setServiceData(updatedServiceData);
                reset();
                setSelectFile(null);
                setTemporaryPhoto(null);
                toast.success('Service added successfully!');
                setOpenAddServiceArea(false);
            }
        });
    };

    const handleSelectService = (Service) => {
        setSelectDotor(Service);
    };

    const handleRemoveService = (Service) => {
        Swal.fire({
            title: 'Confirm remove Service',
            text: `Bạn có chắc chắn muốn xóa dịch vụ: ${Service.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const ServiceData = JSON.parse(localStorage.getItem('ServiceData'));
                const updatedServiceData = ServiceData.filter((d) => d.id !== Service.id);
                localStorage.setItem('ServiceData', JSON.stringify(updatedServiceData));
                setServiceData(updatedServiceData);
                toast(`Thông tin dịch vụ ${Service.name} đã được xóa thành công!`);
            }
        });
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

    const filteredServices = ServiceData.filter((Service) =>
        Service.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className="container">
            <EditServiceModel selectService={selectService} setSelectService={setSelectDotor} />
            <div className="row product-title">
                <div className="col-lg-12 d-flex align-items-center justify-content-between">
                    <h5 className="title_list">Danh sách dịch vụ</h5>
                    <button
                        className="btn btn-warning btn-sm d-flex align-items-center"
                        onClick={() => setOpenAddServiceArea(true)}
                    >
                        <FaPlus size={15} className="me-2" />
                        Thêm mới dịch vụ
                    </button>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-lg-12">
                    <input
                        type="text"
                        className="form-control dashboard_search"
                        placeholder="Tìm kiếm dịch vụ"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            {openAddServiceArea && (
                <div className="product-form my-1">
                    <form onSubmit={handleSubmit(handleAddNewService)} className="row">
                        <div className="col-md-4">
                            <div className="form-group mb-4">
                                <label className="form-label">Tên dịch vụ</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.name?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="tên dịch vụ"
                                    {...register('name')}
                                />
                                <span className="invalid-feedback">{errors?.name?.message}</span>
                            </div>
                            <div className="form-group mb-4">
                                <label className="form-label">Giá tiền(đ)</label>
                                <input
                                    type="number"
                                    className={`form-control form-control-sm ${
                                        errors?.price?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="giá tiền"
                                    {...register('price')}
                                />
                                <span className="invalid-feedback">{errors?.price?.message}</span>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">địa chỉ</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.location?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="địa chỉ"
                                    {...register('location')}
                                />
                                <span className="invalid-feedback">{errors?.location?.message}</span>
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
                                        onClick={handleCloseAddServiceArea}
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
                                <label className="form-label">Giới tính</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.gender?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Giới tính"
                                    {...register('gender')}
                                />
                                <span className="invalid-feedback">{errors?.gender?.message}</span>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Tuổi</label>
                                <input
                                    type="number"
                                    className={`form-control form-control-sm ${
                                        errors?.age?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="tuổi"
                                    {...register('age')}
                                />
                                <span className="invalid-feedback">{errors?.age?.message}</span>
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
                            <th className="text-center">Ảnh</th>
                            <th className="text-start">Tên gói khám</th>
                            <th className="text-start">Giá tiền(đ)</th>
                            <th className="text-end">Giới tính</th>
                            <th className="text-center">Tuổi</th>
                            <th className="text-center">Địa chỉ</th>
                            <th className="text-center">Tiêu đề mô tả</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredServices.map((Service) => (
                            <tr key={Service.id}>
                                <td className="text-start align-middle" style={{ minWidth: '250px' }}>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img style={{ width: '50px' }} src={Service.img} alt="" />
                                    </div>
                                </td>
                                <td className="text-start align-middle">{Service.name}</td>
                                <td className="text-start align-middle">{Service.price}</td>
                                <td className="text-end align-middle">
                                    <div className="d-flex flex-column">
                                        <span>{Service.gender}</span>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex flex-column">
                                        <span>{Service.age}</span>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex flex-column">
                                        <span>{Service.location}</span>
                                    </div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="d-flex flex-column">
                                        <span>{Service.DescriptionTitle}</span>
                                    </div>
                                </td>

                                <td className="text-center align-middle">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <FaEdit
                                            className="text-success me-1"
                                            role="button"
                                            onClick={() => handleSelectService(Service)}
                                        />
                                        <FaTrash
                                            className="text-danger"
                                            role="button"
                                            onClick={() => handleRemoveService(Service)}
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

export default ServiceList;
