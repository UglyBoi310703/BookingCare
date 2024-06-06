import React, { useEffect, useState } from 'react';
import { FaExchangeAlt, FaSave, FaUndo, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';

const schema = yup.object({
    name: yup.string().required('Tên là trường bắt buộc'),
    role: yup.string().required('Chuyên khoa là trường bắt buộc'),
    academic_rank: yup.string().required('Học hàm là trường bắt buộc'),
    degree: yup.string().required('Học vị là trường bắt buộc'),
    img: yup.string().required(),
});

function EditDoctorModel({ selectDoctor, setSelectDoctor, setDoctorData }) {
    const [currentDoctor, setCurrentDoctor] = useState({});
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
        if (selectDoctor?.id) {
            const doctor = selectDoctor;
            setCurrentDoctor(doctor);
            setValue('name', doctor.name);
            setValue('role', doctor.role);
            setValue('academic_rank', doctor.academic_rank);
            setValue('degree', doctor.degree);
            setValue('img', doctor.img);
        }
    }, [selectDoctor, setValue]);

    const handleCloseEditModel = () => {
        setSelectDoctor({});
        reset();
        setSelectedNewPhoto();
        setTemporaryChangePhoto();
    };

    const handleSaveDoctor = (data) => {
        const isDataChanged =
            data.name !== currentDoctor.name ||
            data.role !== currentDoctor.role ||
            data.academic_rank !== currentDoctor.academic_rank ||
            data.degree !== currentDoctor.degree ||
            data.img !== currentDoctor.img;

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
            title: 'Confirm remove doctor',
            text: `Bạn có chắc chắn muốn sửa thông tin bác sĩ: ${data.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                let editDoctor = {
                    ...currentDoctor,
                    ...data,
                };
                console.log(editDoctor);

                let doctorData = JSON.parse(localStorage.getItem('doctorData')) || [];

                const doctorIndex = doctorData.findIndex((doctor) => doctor.id === editDoctor.id);
                console.log(doctorIndex);

                if (doctorIndex !== -1) {
                    doctorData[doctorIndex] = editDoctor;
                } else {
                    doctorData.push(editDoctor);
                }
                localStorage.setItem('doctorData', JSON.stringify(doctorData));
                toast.success(`Thông tin bác sĩ ${data.name} đã được sửa thành công`);
                setSelectDoctor({});
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
            <div className="modal fade show" style={{ display: selectDoctor?.id ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleSaveDoctor)}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modify Doctor</h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModel} />
                            </div>
                            <div className="modal-body">
                                {
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group mb-4">
                                                <label className="form-label">Tên bác sĩ</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.name?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Doctor Name"
                                                    {...register('name')}
                                                />
                                                <span className="invalid-feedback">{errors?.name?.message}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="form-label">Chuyên khoa</label>
                                                <select
                                                    className={`form-select form-select-sm form-control-sm ${
                                                        errors?.degree?.message ? 'is-invalid' : ''
                                                    }`}
                                                    defaultValue={''}
                                                    {...register('role')}
                                                >
                                                    <option value={''} disabled>
                                                        Chọn chuyên khoa
                                                    </option>
                                                    <option value={'Chuyên khoa - Tiêu hóa'}>Tiêu hóa</option>
                                                    <option value={'Chuyên khoa - Chẩn đoán hình ảnh'}>
                                                        Chẩn đoán hình ảnh
                                                    </option>
                                                    <option value={'Chuyên khoa - Tiêu hóa'}>Xương khớp</option>
                                                    <option value={'Chuyên khoa - Thần kinh'}>Thần kinh</option>
                                                    <option value={'Chuyên khoa - Nội tiết'}>Nội tiết</option>
                                                    <option value={'Chuyên khoa - Tim mạch'}>Tim mạch</option>
                                                    <option value={'Chuyên khoa - Chuyên khoa nội'}>
                                                        Chuyên khoa nội
                                                    </option>
                                                    <option value={'Chuyên khoa - Xét nghiệm'}>Xét nghiệm</option>
                                                    <option value={'Chuyên khoa - Ung bướu'}>Ung bướu</option>
                                                    <option value={'Chuyên khoa - Mắt'}>Mắt</option>
                                                    <option value={'Chuyên khoa - Tai mũi họng'}>Tai mũi họng</option>
                                                    <option value={'Chuyên khoa - Răng hàm mặt'}>Răng hàm mặt</option>
                                                </select>
                                                <span className="invalid-feedback">{errors?.degree?.message}</span>
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
                                            <div className="form-group mb-3">
                                                <label className="form-label">Học vị</label>
                                                <select
                                                    className={`form-select form-select-sm ${
                                                        errors?.degree?.message ? 'is-invalid' : ''
                                                    }`}
                                                    defaultValue={''}
                                                    {...register('degree')}
                                                >
                                                    <option value={''} disabled>
                                                        Chọn học vị
                                                    </option>
                                                    <option value={'Bác sĩ nội trú'}>Bác sĩ nội trú</option>
                                                    <option value={'Tiến sĩ'}>Tiến sĩ</option>
                                                    <option value={'Thạc sĩ'}>Thạc sĩ</option>
                                                </select>
                                                <span className="invalid-feedback">{errors?.degree?.message}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="border-dashed d-flex flex-column align-items-center justify-content-between w-100 h-100">
                                                <img
                                                    style={{ maxWidth: '90%', maxHeight: '70%' }}
                                                    src={temporaryChangePhoto || currentDoctor?.img}
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

export default EditDoctorModel;
