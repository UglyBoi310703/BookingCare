import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ServicesItem from '../Services/ServicesItem/ServicesItem';
import Scroll from 'react-scroll-component';
import {
    MDBCard,
    MDBBtn,
    MDBRipple,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardSubTitle,
    MDBCardGroup,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from 'mdb-react-ui-kit';
import ServicesData from '../Services/ServicesData';
import { Description } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

export default function TestComponent({ DescriptionTitle, Description, name, img, price, gender, age, location }) {
    console.log(typeof ServicesData[0].Description);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <MDBCard className="Services-Item">
                            <MDBRipple rippleTag="div" className="hover-zoom hover-overlay">
                                <MDBCardImage className="img-fluid" src={img} position="top" alt="..." />
                                <div className="mask" style={{ backgroundColor: 'rgba(28, 138, 214, 0.7)' }}>
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <TestComponent />
                                    </div>
                                </div>
                            </MDBRipple>
                            <MDBCardBody className="Services-Item-Cotent">
                                <MDBBtn className="Services-Item-Cotent-price" href="#">
                                    {price}
                                </MDBBtn>
                                <MDBCardTitle className="Services-Item-Cotent-Name">{name}</MDBCardTitle>
                                <div className="Services-Item-Cotent-information">
                                    <div className="Services-Gender">{gender}</div>
                                    <div className="Services-Age">{age}</div>
                                    <div className="Services-Location">{location}</div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        <div>
                            <MDBTable bordered borderColor="primary">
                                <MDBTableBody>
                                    <tr>
                                        <th scope="row">Hình thức</th>
                                        <td>Tại Medlatec</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GIới tính</th>
                                        <td>{gender}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Độ tuổi</th>
                                        <td>{age}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cơ sở</th>
                                        <td>Hà Nội</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardSubTitle>{DescriptionTitle}</MDBCardSubTitle>
                                    <MDBCardText>{Description}</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
