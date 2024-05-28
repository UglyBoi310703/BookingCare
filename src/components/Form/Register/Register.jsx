import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './Register.scss';
import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBBtn,
    MDBFile,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtnGroup,
} from 'mdb-react-ui-kit';

// Định nghĩa schema validation với Yup
const schema = yup.object().shape({
    fullName: yup.string().required('Họ và tên là bắt buộc'),
    emailOrPhone: yup
        .string()
        .required('Email hoặc số điện thoại là bắt buộc')
        .test('emailOrPhone', 'Email hoặc số điện thoại không hợp lệ', function (value) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const phoneRegex = /^((\+84)|0)[1-9](\d{8,9})$/;
            return emailRegex.test(value) || phoneRegex.test(value);
        }),
    password: yup.string().required('Mật khẩu là bắt buộc').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp')
        .required('Xác nhận mật khẩu là bắt buộc'),
    avatar: yup
        .mixed()
        .required('Avatar là bắt buộc')
        .test('fileType', 'Tệp phải là ảnh định dạng jpg, jpeg, hoặc png', (value) => {
            if (!value.length) return true; // Nếu không có tệp nào được chọn thì không kiểm tra định dạng
            const file = value[0];
            return file && (file.type === 'image/jpeg' || file.type === 'image/png');
        }),
});

function RegisterForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        trigger,
        setError,
        clearErrors,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
    });

    const onSubmit = (data) => {
        console.log(data);
        alert('Đăng ký thành công');
    };

    const handleReset = () => {
        setValue('fullName', '');
        setValue('emailOrPhone', '');
        setValue('password', '');
        setValue('confirmPassword', '');
        setValue('avatar', null);
        clearErrors();
    };

    return (
        <MDBContainer className="RegisterForm">
            <MDBRow>
                <MDBCol md="8" className="mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="h5 text-center mb-4">Đăng ký tài khoản</p>
                        <div className="FormInputItem">
                        <MDBInput
              label="Họ và tên"
              {...register('fullName')}
              onBlur={() => trigger('fullName')}
            />
            {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
                        </div>
                        <div className="FormInputItem">
          
                            <MDBInput
                                label="Email/Số điện thoại"
                                {...register('emailOrPhone')}
                                onBlur={() => trigger('emailOrPhone')}
                            />
                            {errors.emailOrPhone && <p className="text-danger">{errors.emailOrPhone.message}</p>}
                        </div>

                        <div className="FormInputItem">
                            <MDBInput
                                label="Mật khẩu"
                                type="password"
                                {...register('password')}
                                onBlur={() => trigger('password')}
                            />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        </div>

                        <div className="FormInputItem">
                            <MDBInput
                                label="Nhập lại mật khẩu"
                                type="password"
                                {...register('confirmPassword')}
                                onBlur={() => trigger('confirmPassword')}
                            />
                            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                        </div>

                        <div className="FormInputItem">
                            <MDBFile
                                label="Chọn Avatar"
                                {...register('avatar')}
                                onBlur={() => trigger('avatar')}
                                inputProps={{
                                    accept: 'image/jpeg,image/png',
                                    onChange: (e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            if (file.type === 'image/jpeg' || file.type === 'image/png') {
                                                setValue('avatar', e.target.files);
                                                clearErrors('avatar');
                                            } else {
                                                setError('avatar', {
                                                    type: 'manual',
                                                    message: 'Tệp phải là ảnh định dạng jpg hoặc png',
                                                });
                                            }
                                        } else {
                                            setValue('avatar', null);
                                        }
                                    },
                                }}
                            />
                            {errors.avatar && <p className="text-danger">{errors.avatar.message}</p>}
                        </div>
                        <div className="text-center">
                            <MDBBtnGroup style={{height : "45px"}} className="text-center ">
                                <MDBBtn rounded color="primary" type="submit">
                                    Đăng ký
                                </MDBBtn>
                                <MDBBtn rounded color="info mx-2" type="button" onClick={handleReset}>
                                    Đặt lại
                                </MDBBtn>
                            </MDBBtnGroup>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default RegisterForm;
