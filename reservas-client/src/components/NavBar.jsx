import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import ModalContacto from './ModalContacto';

const BasicExample = () => {
    const username = localStorage.getItem('username')
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState()

    const navegar = (ruta) => {
        navigate(ruta)
    }

    const editarPerfil = () => {
        navigate(`/editar-perfil/${username}`)
    }

    const handleCloseSesion = () => {
        localStorage.clear()
        navigate('/')
    }
    return (
        <Navbar expand="lg" className="bg-white">
            <Container fluid className='px-6'>
                <Navbar.Brand>☕ El Mirador</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex justify-content-between w-100">
                        <div className='d-flex'>
                            <Nav.Link href="#" onClick={() => navigate('/home')}>Home</Nav.Link>
                            <Nav.Link href='#' disabled='false' onClick={() => navegar('/menu')}>Menú</Nav.Link>
                            <Nav.Link href='#' onClick={() => navegar('/sobre-nosotros')}>Sobre Nosotros</Nav.Link>
                            <Nav.Link href='#' onClick={() => setShowModal(true)}>Contacto</Nav.Link>
                            <NavDropdown title="Reservas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" onClick={() => navegar('/reservas')}>Elegir una mesa</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item disabled='true' href="#">Eventos Especiales</NavDropdown.Item>
                            </NavDropdown>
                        </div>

                        {
                            username &&
                            <div>
                                <NavDropdown style={{ fontWeight: `bold` }} title="Mi Perfil" id="basic-nav-dropdown" align="end">
                                    <NavDropdown.Item style={{ fontWeight: `bold` }} href="#">{username ? <><i className="bi bi-person-circle"></i>  {username}</> : ''}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={editarPerfil}>Editar mi perfil</NavDropdown.Item>
                                    <NavDropdown.Item disabled='true' href="#">Eliminar mi cuenta</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleCloseSesion}>Cerrar mi sesión 🔻</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ModalContacto className='text-black' show={showModal} handleClose={() => setShowModal(false)} />

        </Navbar>
    );
}

export default BasicExample;