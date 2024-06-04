import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaStar, FaTrash, FaTimes, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import EditSpecialistModel from './EditSpecialistModel';
const schema = yup.object({
    name: yup.string().required('tên là trường bắt buộc'),
    content: yup.string().required('nội dung là trường bắt buộc'),
});

function SpecialistList() {
    const [SpecialistData, setSpecialistData] = useState([]);
    const [openAddSpecialistArea, setOpenAddSpecialistArea] = useState(false);
    const [temporaryPhoto, setTemporaryPhoto] = useState();
    const [selectFile, setSelectFile] = useState();
    const [uploading, setUploading] = useState(false);
    const [selectSpecialist, setSelectDotor] = useState();
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
        const storedData = localStorage.getItem('SpecialistData');
        if (storedData) {
            setSpecialistData(JSON.parse(storedData));
        }
    }, []);

    const handleCloseAddSpecialistArea = () => {
        setOpenAddSpecialistArea(false);
        reset();
        setSelectFile();
        setTemporaryPhoto();
    };

    const handleAddNewSpecialist = (data) => {
        if (!data?.img) {
            Swal.fire({
                title: 'Alert!',
                text: 'You need to upload a photo first!',
                icon: 'warning',
            });
            return;
        }
        Swal.fire({
            title: 'Confirm add Specialist',
            text: `Bạn có chắc chắn muốn thêm chuyên khoa: ${data.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const newSpecialist = { ...data, id: uuidv4() };
                const updatedSpecialistData = [...SpecialistData, newSpecialist];

                localStorage.setItem('SpecialistData', JSON.stringify(updatedSpecialistData));
                setSpecialistData(updatedSpecialistData);
                reset();
                setSelectFile(null);
                setTemporaryPhoto(null);
                toast.success('Specialist added successfully!');
                setOpenAddSpecialistArea(false);
            }
        });
    };

    const handleSelectSpecialist = (Specialist) => {
        setSelectDotor(Specialist);
    };

    const handleRemoveSpecialist = (Specialist) => {
        Swal.fire({
            title: 'Confirm remove Specialist',
            text: `Bạn có chắc chắn muốn xóa chuyên khoa: ${Specialist.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const SpecialistData = JSON.parse(localStorage.getItem('SpecialistData'));
                const updatedSpecialistData = SpecialistData.filter((d) => d.id !== Specialist.id);
                localStorage.setItem('SpecialistData', JSON.stringify(updatedSpecialistData));
                setSpecialistData(updatedSpecialistData);
                toast(`Thông tin chuyên khoa ${Specialist.name} đã được xóa thành công!`);
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

    const filteredSpecialists = SpecialistData.filter((Specialist) =>
        Specialist.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className="container">
            <EditSpecialistModel selectSpecialist={selectSpecialist} setSelectSpecialist={setSelectDotor} />
            <div className="row product-title">
                <div className="col-lg-12 d-flex align-items-center justify-content-between">
                    <h5 className="title_list">Danh sách chuyên khoa</h5>
                    <button
                        className="btn btn-warning btn-sm d-flex align-items-center"
                        onClick={() => setOpenAddSpecialistArea(true)}
                    >
                        <FaPlus size={15} className="me-2" />
                        Thêm mới chuyên khoa
                    </button>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-lg-12">
                    <input
                        type="text"
                        className="form-control dashboard_search"
                        placeholder="Tìm kiếm chuyên khoa"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            {openAddSpecialistArea && (
                <div className="product-form my-1">
                    <form onSubmit={handleSubmit(handleAddNewSpecialist)} className="row">
                        <div className="col-md-4">
                            <div className="form-group mb-4">
                                <label className="form-label">Tên chuyên khoa</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.name?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="tên chuyên khoa"
                                    {...register('name')}
                                />
                                <span className="invalid-feedback">{errors?.name?.message}</span>
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
                                        onClick={handleCloseAddSpecialistArea}
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
                                <label className="form-label">Nội dung</label>
                                <textarea
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.content?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Nội dung"
                                    {...register('content')}
                                />
                                <span className="invalid-feedback">{errors?.content?.message}</span>
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
                            <th className="text-start">Tên chuyên khoa</th>
                            <th className="text-start">Nội dung</th>
                            <th className="text-start">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSpecialists.map((Specialist) => (
                            <tr key={Specialist.id}>
                                <td className="text-start align-middle" style={{ minWidth: '250px' }}>
                                    <div className="d-flex align-items-center">
                                        <img style={{ width: '50px' }} src={Specialist.img} alt="" />
                                    </div>
                                </td>
                                <td className="text-start align-middle">{Specialist.name}</td>
                                <td className="text-start align-middle">{Specialist.content}</td>

                                <td className="text-center align-middle">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <FaEdit
                                            className="text-success me-1"
                                            role="button"
                                            onClick={() => handleSelectSpecialist(Specialist)}
                                        />
                                        <FaTrash
                                            className="text-danger"
                                            role="button"
                                            onClick={() => handleRemoveSpecialist(Specialist)}
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

export default SpecialistList;
