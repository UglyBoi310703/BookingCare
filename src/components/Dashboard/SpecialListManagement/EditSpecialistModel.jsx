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
    content: yup.string().required(),
    img: yup.string().required(),
});

function EditSpecialistModel({ selectSpecialist, setSelectSpecialist, setSpecialistData }) {
    const [currentSpecialist, setCurrentSpecialist] = useState({});
    const [temporaryChangePhoto, setTemporaryChangePhoto] = useState();
    const [selectedNewPhoto, setSelectedNewPhoto] = useState();
    const [reUploading, setReUploading] = useState(false);
    const [isFormChanged, setIsFormChanged] = useState(false);

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
        if (selectSpecialist?.id) {
            const Specialist = selectSpecialist;
            setCurrentSpecialist(Specialist);
            setValue('name', Specialist.name);
            setValue('role', Specialist.role);
            setValue('academic_rank', Specialist.academic_rank);
            setValue('degree', Specialist.degree);
            setValue('img', Specialist.img);
        }
    }, [selectSpecialist, setValue]);

    const handleCloseEditModel = () => {
        setSelectSpecialist({});
        reset();
        setSelectedNewPhoto();
        setTemporaryChangePhoto();
    };

    const handleSaveSpecialist = (data) => {
        const isDataChanged =
            data.name !== currentSpecialist.name ||
            data.role !== currentSpecialist.role ||
            data.academic_rank !== currentSpecialist.academic_rank ||
            data.degree !== currentSpecialist.degree ||
            data.img !== currentSpecialist.img;

        if (!isDataChanged) {
            Swal.fire({
                title: 'Alert',
                text: 'No changes detected!',
            });
            return;
        }
        if (selectedNewPhoto?.name) {
            Swal.fire({
                title: 'Alert',
                text: 'You need to upload the new photo first!',
            });
            return;
        }
        Swal.fire({
            title: 'Confirm remove Specialist',
            text: `Bạn có chắc chắn muốn sửa thông tin bác sĩ: ${data.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                let editSpecialist = {
                    ...currentSpecialist,
                    ...data,
                };
                console.log(editSpecialist);

                let SpecialistData = JSON.parse(localStorage.getItem('SpecialistData')) || [];

                const SpecialistIndex = SpecialistData.findIndex((Specialist) => Specialist.id === editSpecialist.id);
                console.log(SpecialistIndex);

                if (SpecialistIndex !== -1) {
                    SpecialistData[SpecialistIndex] = editSpecialist;
                } else {
                    SpecialistData.push(editSpecialist);
                }
                localStorage.setItem('SpecialistData', JSON.stringify(SpecialistData));
                toast.success(`Thông tin bác sĩ ${data.name} đã được sửa thành công`);
                setSelectSpecialist({});
                window.location.reload();
            }
        });
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
            formData.append('upload_preset', 'ycufnlwr');
            let uploadResult = await axios.post('https://api.cloudinary.com/v1_1/djoawum55/image/upload', formData);
            setTemporaryChangePhoto(uploadResult?.data?.secure_url);
            setValue('img', uploadResult?.data?.secure_url);
            toast.info('Photo changed successfully!');
            setSelectedNewPhoto();
            setReUploading(false);
            return;
        }
        Swal.fire({
            title: 'Alert',
            text: 'Please select another photo to upload!',
        });
    };

    return (
        <>
            <div className="modal fade show" style={{ display: selectSpecialist?.id ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleSaveSpecialist)}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modify Specialist</h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModel} />
                            </div>
                            <div className="modal-body">
                                {
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group mb-2">
                                                <label className="form-label">Tên bác sĩ</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.name?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Specialist Name"
                                                    {...register('name')}
                                                />
                                                <span className="invalid-feedback">{errors?.name?.message}</span>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label className="form-label">Nội dung</label>
                                                <textarea
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.role?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Specialization"
                                                    {...register('role')}
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
                                                        Select Academic Rank
                                                    </option>
                                                    <option value={'Giáo sư'}>Giáo sư</option>
                                                    <option value={'Phó giáo sư'}>Phó giáo sư</option>
                                                </select>
                                                <span className="invalid-feedback">
                                                    {errors?.academic_rank?.message}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="border-dashed d-flex flex-column align-items-center justify-content-between w-100 h-100">
                                                <img
                                                    style={{ maxWidth: '90%', maxHeight: '70%' }}
                                                    src={temporaryChangePhoto || currentSpecialist?.img}
                                                    alt=""
                                                />
                                                <div className="d-flex align-items-center justify-content-between">
                                                    {temporaryChangePhoto && (
                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-primary me-3"
                                                            onClick={handleReUploadPhoto}
                                                            disabled={reUploading}
                                                        >
                                                            <FaUpload className="me-2" />
                                                            {reUploading ? 'Uploading...' : 'Upload'}
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
                                }
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

export default EditSpecialistModel;
