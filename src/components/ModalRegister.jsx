import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const initialUser = {
  email: "",
  password: "",
  fullname: "",
  gender: "",
  phone: "",
  address: ""
}

function ModalRegister( {handleClose, show} ) {
    const [isRegister, setIsRegister] = useState(true)

    
    const switchRegister = () => {
      setUserData(initialUser)
      setIsRegister(!isRegister)
    }
    const [userData, setUserData] = useState(initialUser)

    const handleChange = (e) => {
      setUserData((previousState) => ({
        ...previousState,
        [e.target.name]: e.target.value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      handleClose()
      if(isRegister) {
        localStorage.setItem("user", JSON.stringify(userData))

      }
    }

  return (
    <>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header className="bg-dark text-white border-0">
          <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form>
            {/* Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                className="mb-3 bg-secondary text-white formModal"
                name="email"
                onChange={handleChange}
                autoFocus
              />
              </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-3 bg-secondary text-white formModal"
                name="password"
                onChange={handleChange}
              />
              </Form.Group>
              {isRegister ? (
                <>

            {/* Fullname */}
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Control
                type="text"
                placeholder="Fullname"
                className="mb-3 bg-secondary text-white formModal"
                name="fullname"
                onChange={handleChange}
              />
              </Form.Group>

              {/* Gender */}
              <Form.Select
                type="text"
                placeholder="Gender"
                className="mb-3 bg-secondary text-white formModal"
                name="gender"
                onChange={handleChange}
              >

                <option disabled selected>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
                
              {/* Phone */}
              <Form.Group className="mb-3" controlId="phone"> 
              <Form.Control
                type="number"
                placeholder="Phone"
                className="mb-3 bg-secondary text-white formModal"
                name="phone"
                onChange={handleChange}
              />
              </Form.Group>
              
              {/* Address */}
            <Form.Group className="mb-3" controlId="address"> 
              <Form.Control
                type="text"
                placeholder="Address"
                className="mb-3 bg-secondary text-white formModal"
                name="address"
                onChange={handleChange}
              />
            </Form.Group>
              </>) : ("") }
            
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark border-0 mod-fot'>

 
          <Button variant="primary" onClick={handleSubmit} className="bg-white text-danger fw-bold border-0 btn-full" size="lg">
            {isRegister ? "Register" : "Login"}
          </Button>

        <p className='text-white text-muted'>Already Have Account? Klik<span onClick={switchRegister} className='here'> Here</span></p>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default ModalRegister