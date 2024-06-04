import React, { useEffect, useState } from 'react';
import { FaExchangeAlt, FaSave, FaUndo, FaUpload } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';

const schema = yup.object({
    name: yup.string().required('tên là trường bắt buộc'),
    price: yup.number().required('Giá tiền là trường bắt buộc').positive().typeError('Giá tiền là trường bắt buộc'),
    gender: yup.string().required('Giới tính là trường bắt buộc'),
    location: yup.string().required('địa chỉ là trường bắt buộc'),
    age: yup.string().required('Tuổi là trường bắt buộc'),
});

function EditServiceModel({ selectService, setSelectService, setServiceData }) {
    const [currentService, setCurrentService] = useState({});
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
        if (selectService?.id) {
            const Service = selectService;
            setCurrentService(Service);
            setValue('name', Service.name);
            setValue('price', Service.price);
            setValue('gender', Service.gender);
            setValue('age', Service.age);
            setValue('location', Service.location);
            setValue('DescriptionTitle', Service.DescriptionTitle);
        }
    }, [selectService, setValue]);

    const handleCloseEditModel = () => {
        setSelectService({});
        reset();
        setSelectedNewPhoto();
        setTemporaryChangePhoto();
    };

    const handleSaveService = (data) => {
        const isDataChanged =
            data.name !== currentService.name ||
            data.price !== currentService.price ||
            data.age !== currentService.age ||
            data.gender !== currentService.gender ||
            data.DescriptionTitle !== currentService.DescriptionTitle ||
            data.img !== currentService.img;

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
            title: 'Confirm remove Service',
            text: `Bạn có chắc chắn muốn sửa thông tin dịch vụ: ${data.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                let editService = {
                    ...currentService,
                    ...data,
                };
                console.log(editService);

                let ServiceData = JSON.parse(localStorage.getItem('ServiceData')) || [];

                const ServiceIndex = ServiceData.findIndex((Service) => Service.id === editService.id);

                if (ServiceIndex !== -1) {
                    ServiceData[ServiceIndex] = editService;
                } else {
                    ServiceData.push(editService);
                }
                localStorage.setItem('ServiceData', JSON.stringify(ServiceData));
                toast.success(`Thông tin dịch vụ ${data.name} đã được sửa thành công`);
                setSelectService({});
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
            <div className="modal fade show" style={{ display: selectService?.id ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleSaveService)}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modify Service</h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModel} />
                            </div>
                            <div className="modal-body">
                                {
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group mb-4">
                                                <label className="form-label">Tên dịch vụ</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.name?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Service Name"
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
                                                    placeholder="Giá tiền"
                                                    {...register('price')}
                                                />
                                                <span className="invalid-feedback">{errors?.price?.message}</span>
                                            </div>
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
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group mb-4">
                                                <label className="form-label">Tuổi</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.age?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Tuổi"
                                                    {...register('age')}
                                                />
                                                <span className="invalid-feedback">{errors?.age?.message}</span>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="form-label">Mô tả tiêu đề</label>
                                                <textarea
                                                    type="number"
                                                    className={`form-control form-control-sm ${
                                                        errors?.DescriptionTitle?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Mô tả tiêu đề"
                                                    {...register('DescriptionTitle')}
                                                />
                                                <span className="invalid-feedback">
                                                    {errors?.DescriptionTitle?.message}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="border-dashed d-flex flex-column align-items-center justify-content-between w-100 h-100">
                                                <img
                                                    style={{ maxWidth: '90%', maxHeight: '70%' }}
                                                    src={temporaryChangePhoto || currentService?.img}
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

export default EditServiceModel;
