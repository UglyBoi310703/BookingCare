import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaStar, FaTrash, FaTimes, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import EditFacilityModel from './EditFacilityModel';

const schema = yup.object({
    name: yup.string().required('Tên là trường bắt buộc'),
});

function FacilitiesList() {
    const [FacilitiesData, setFacilitiesData] = useState([]);
    const [openAddFacilitiesArea, setOpenAddFacilitiesArea] = useState(false);
    const [temporaryPhoto, setTemporaryPhoto] = useState();
    const [selectFile, setSelectFile] = useState();
    const [uploading, setUploading] = useState(false);
    const [selectFacilities, setSelectFacilities] = useState();
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
        const storedData = localStorage.getItem('FacilitiesData');
        if (storedData) {
            setFacilitiesData(JSON.parse(storedData));
        }
    }, []);

    const handleCloseAddFacilitiesArea = () => {
        setOpenAddFacilitiesArea(false);
        reset();
        setSelectFile();
        setTemporaryPhoto();
    };

    const handleAddNewFacilities = (data) => {
        if (!data?.img) {
            Swal.fire({
                title: 'Alert!',
                text: 'You need to upload a photo first!',
                icon: 'warning',
            });
            return;
        }
        Swal.fire({
            title: 'Confirm add Facilities',
            text: `Bạn có chắc chắn muốn thêm thông tin: ${data.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const newFacilities = { ...data, id: uuidv4() };
                const updatedFacilitiesData = [...FacilitiesData, newFacilities];

                localStorage.setItem('FacilitiesData', JSON.stringify(updatedFacilitiesData));
                setFacilitiesData(updatedFacilitiesData);
                reset();
                setSelectFile(null);
                setTemporaryPhoto(null);
                toast.success('Thông itn cơ sở vật chất được thêm thành công!');
                setOpenAddFacilitiesArea(false);
            }
        });
    };

    const handleSelectFacilities = (Facilities) => {
        setSelectFacilities(Facilities);
    };

    const handleRemoveFacilities = (Facilities) => {
        Swal.fire({
            title: 'Confirm remove Facilities',
            text: `Bạn có chắc chắn muốn xóa thông tin: ${Facilities.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                const FacilitiesData = JSON.parse(localStorage.getItem('FacilitiesData'));
                const updatedFacilitiesData = FacilitiesData.filter((d) => d.id !== Facilities.id);
                localStorage.setItem('FacilitiesData', JSON.stringify(updatedFacilitiesData));
                setFacilitiesData(updatedFacilitiesData);
                toast(`Thông tin cơ sở vật chất ${Facilities.name} đã được xóa thành công!`);
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

    const filteredFacilities = FacilitiesData.filter((Facilities) =>
        Facilities.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className="container">
            <EditFacilityModel selectFacilities={selectFacilities} setSelectFacilities={setSelectFacilities} />
            <div className="row product-title">
                <div className="col-lg-12 d-flex align-items-center justify-content-between">
                    <h5 className="title_list">Danh sách cơ sở vật chất</h5>
                    <button
                        className="btn btn-warning btn-sm d-flex align-items-center"
                        onClick={() => setOpenAddFacilitiesArea(true)}
                    >
                        <FaPlus size={15} className="me-2" />
                        Thêm mới cơ sở vật chất
                    </button>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-lg-12">
                    <input
                        type="text"
                        className="form-control dashboard_search"
                        placeholder="Tìm kiếm cơ sở vật chất"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            {openAddFacilitiesArea && (
                <div className="product-form my-1">
                    <form onSubmit={handleSubmit(handleAddNewFacilities)} className="row">
                        <div className="col-md-4">
                            <div className="form-group mb-4">
                                <label className="form-label">Tên cơ sở vật chất</label>
                                <input
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.name?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="tên cơ sở vật chất"
                                    {...register('name')}
                                />
                                <span className="invalid-feedback">{errors?.name?.message}</span>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Mô tả</label>
                                <textarea
                                    type="text"
                                    className={`form-control form-control-sm ${
                                        errors?.describe?.message ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Mô tả"
                                    {...register('describe')}
                                />
                                <span className="invalid-feedback">{errors?.describe?.message}</span>
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
                                        onClick={handleCloseAddFacilitiesArea}
                                        className="btn btn-dark btn-sm flex-grow-1 d-flex align-items-center justify-content-center"
                                    >
                                        <FaTimes className="me-2" />
                                        Close
                                    </button>
                                </div>
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
                            <th className="text-start">Tên cơ sở vật chất</th>
                            <th className="text-center">Mô tả</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFacilities.map((facility) => (
                            <tr key={facility.id}>
                                <td className="text-start align-middle" style={{ minWidth: '250px' }}>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img style={{ width: '50px' }} src={facility.img} alt="" />
                                    </div>
                                </td>
                                <td className="text-start align-middle">{facility.name}</td>
                                <td className="text-start align-middle">{facility.describe}</td>
                                <td className="text-center align-middle">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <FaEdit
                                            className="text-success me-1"
                                            role="button"
                                            onClick={() => handleSelectFacilities(facility)}
                                        />
                                        <FaTrash
                                            className="text-danger"
                                            role="button"
                                            onClick={() => handleRemoveFacilities(facility)}
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

export default FacilitiesList;
