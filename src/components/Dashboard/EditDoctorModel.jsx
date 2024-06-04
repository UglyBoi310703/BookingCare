import React, { useEffect, useState } from 'react';
import { FaExchangeAlt, FaSave, FaUndo, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';

const schema = yup.object({
    name: yup.string().required(),
    role: yup.number().string().required(),
    academic_rank: yup.string().required(),
    degree: yup.string().required(),
    img: yup.string().required(),
});

function EditDoctorModel({ selectDoctor, setSelectDotor }) {
    const [currentDoctor, setCurrentDoctor] = useState({});
    const [loading, setLoading] = useState(false);
    const [temporayChangePhoto, setTemporaryChangePhoto] = useState();
    const [selectedNewPhoto, setSelectedNewPhoto] = useState();
    const [reUploading, setReUploading] = useState(false);

    useEffect(() => {
        setLoading(true);
        function getProductById() {
            const doctor = selectDoctor;
            setCurrentDoctor(currentDoctor);
            setLoading(false);
            setValue('name', doctor.name);
            setValue('role', doctor.role);
            setValue('academic_rank', doctor.academic_rank);
            setValue('degree', doctor.degree);
            setValue('img', doctor.img);
        }
        getProductById();
    }, [selectDoctor?.id]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleCloseEditModel = () => {
        setSelectDotor({});
        reset();
        setSelectedNewPhoto();
        setTemporaryChangePhoto();
    };

    const handleSaveProduct = (data) => {
        if (selectedNewPhoto?.name) {
            Swal.fire({
                title: 'Alert',
                text: 'You need upload new photo first!',
            });
            return;
        }
        let editProduct = {
            ...currentDoctor,
            ...data,
        };

        toast.success('Product updated success');
        setSelectDotor({});
    };

    const handleChangePhoto = (e) => {
        if (e.target.files[0]?.name) {
            const fake_photo_url = URL.createObjectURL(e.target.files[0]);
            setTemporaryChangePhoto(fake_photo_url);
            setSelectedNewPhoto(e.target.files[0]);
        }
    };

    const handleReUploadPhoto = async (e) => {
        e.stopPropagation();
        if (selectedNewPhoto?.name) {
            setReUploading(true);
            const formData = new FormData();
            formData.append('file', selectedNewPhoto);
            formData.append('upload_preset', 'lhih0wco');
            let uploadResult = await axios.post('https://api.cloudinary.com/v1_1/dikortveg/image/upload', formData);
            setTemporaryChangePhoto(uploadResult?.data?.secure_url);
            setValue('img', uploadResult?.data?.secure_url);
            toast.info('Photo changed success!');
            setSelectedNewPhoto();
            setReUploading(false);
            return;
        }
        Swal.fire({
            title: 'Alert',
            text: 'You actually upload, please select another photo!',
        });
    };

    return (
        <>
            <div className="modal fade show" style={{ display: `${selectDoctor?.id ? 'block' : 'none'}` }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleSaveProduct)}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modify Product</h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModel} />
                            </div>
                            <div className="modal-body">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group mb-2">
                                                <label className="form-label">Tên bác sĩ</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.name?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Tên bác sĩ"
                                                    {...register('name')}
                                                />
                                                <span className="invalid-feedback ">{errors?.name?.message}</span>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label className="form-label">Price</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.role?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Chuyên khoa"
                                                    {...register('Chuyên khoa')}
                                                />
                                                <span className="invalid-feedback">{errors?.role?.message}</span>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label className="form-label">Học hàm</label>
                                                <select
                                                    className={`form-select form-select-sm ${
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
                                                <span className="invalid-feedback">{errors?.color?.message}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-2">
                                                <label className="form-label">Category</label>
                                                <select
                                                    className={`form-select form-select-sm ${
                                                        errors?.degree?.message ? 'is-invalid' : ''
                                                    }`}
                                                    defaultValue={''}
                                                    {...register('category')}
                                                >
                                                    <option value={''} disabled>
                                                        Chọn học vị
                                                    </option>
                                                    <option value={'Tiến sĩ'} disabled>
                                                        Tiến sĩ
                                                    </option>
                                                    <option value={'Thạc sĩ'} disabled>
                                                        Thạc sĩ
                                                    </option>
                                                    <option value={'Bác sĩ nội trú'} disabled>
                                                        Bác sĩ nội trú
                                                    </option>
                                                </select>
                                                <span className="invalid-feedback">{errors?.degree?.message}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="border-dashed d-flex flex-column align-items-center justify-content-between w-100 h-100">
                                                <img
                                                    style={{ maxWidth: '90%', maxHeight: '70%' }}
                                                    src={temporayChangePhoto || currentDoctor?.img}
                                                    alt=""
                                                />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    {temporayChangePhoto && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-primary me-3"
                                                            onClick={handleReUploadPhoto}
                                                            {...`${reUploading ? 'disabled' : ''}`}
                                                        >
                                                            <FaUpload className="me-2" />
                                                            {`${reUploading ? 'Uploading...' : 'Upload'}`}
                                                        </button>
                                                    )}
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-secondary"
                                                        onClick={() =>
                                                            document.getElementById('file-change-photo').click()
                                                        }
                                                    >
                                                        <FaExchangeAlt className="me-2" />
                                                        Change
                                                    </button>
                                                </div>
                                                <input
                                                    id="file-change-photo"
                                                    type="file"
                                                    accept="image/*"
                                                    className="d-none"
                                                    onChange={handleChangePhoto}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-dark d-flex align-items-center"
                                    onClick={handleCloseEditModel}
                                >
                                    <FaUndo className="me-2" />
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-success d-flex align-items-center">
                                    <FaSave className="me-2" />
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditDoctorModel;
