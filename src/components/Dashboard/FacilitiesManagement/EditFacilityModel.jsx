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
});

function EditFacilityModel({ selectFacilities, setSelectFacilities }) {
    const [currentFacilities, setCurrentFacilities] = useState({});
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
        if (selectFacilities?.id) {
            const Facilities = selectFacilities;
            setCurrentFacilities(Facilities);
            setValue('name', Facilities.name);
            setValue('describe', Facilities.describe);
            setValue('img', Facilities.img);
        }
    }, [selectFacilities, setValue]);

    const handleCloseEditModel = () => {
        setSelectFacilities({});
        reset();
        setSelectedNewPhoto();
        setTemporaryChangePhoto();
    };

    const handleSaveFacilities = (data) => {
        const isDataChanged =
            data.name !== currentFacilities.name ||
            data.describe !== currentFacilities.describe ||
            data.img !== currentFacilities.img;
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
            title: 'Confirm remove Facilities',
            text: `Bạn có chắc chắn muốn sửa thông tin: ${data.name}?`,
            showCancelButton: true,
            confirmButtonColor: '#d33',
        }).then((result) => {
            if (result.isConfirmed) {
                let editFacilities = {
                    ...currentFacilities,
                    ...data,
                };
                console.log(editFacilities);

                let FacilitiesData = JSON.parse(localStorage.getItem('FacilitiesData')) || [];

                const FacilitiesIndex = FacilitiesData.findIndex((Facilities) => Facilities.id === editFacilities.id);
                console.log(FacilitiesIndex);

                if (FacilitiesIndex !== -1) {
                    FacilitiesData[FacilitiesIndex] = editFacilities;
                } else {
                    FacilitiesData.push(editFacilities);
                }
                localStorage.setItem('FacilitiesData', JSON.stringify(FacilitiesData));
                toast.success(`Thông tin cơ sở vật chất ${data.name} đã được sửa thành công`);
                setSelectFacilities({});
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
            <div className="modal fade show" style={{ display: selectFacilities?.id ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleSaveFacilities)}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modify Facilities</h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModel} />
                            </div>
                            <div className="modal-body">
                                {
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="form-label">Tên cơ sở vật chất</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.name?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Facilities Name"
                                                    {...register('name')}
                                                />
                                                <span className="invalid-feedback">{errors?.name?.message}</span>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label className="form-label">Mô tả</label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-sm ${
                                                        errors?.describe?.message ? 'is-invalid' : ''
                                                    }`}
                                                    placeholder="Specialization"
                                                    {...register('describe')}
                                                />
                                                <span className="invalid-feedback">{errors?.describe?.message}</span>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="border-dashed d-flex flex-column align-items-center justify-content-between w-100 h-100">
                                                <img
                                                    style={{ maxWidth: '90%', maxHeight: '70%' }}
                                                    src={temporaryChangePhoto || currentFacilities?.img}
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

export default EditFacilityModel;
