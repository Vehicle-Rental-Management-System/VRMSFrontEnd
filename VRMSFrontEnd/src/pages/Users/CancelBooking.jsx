import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CancelBooking() {

  const bookingId = sessionStorage.getItem("bookingId");

  const [reason, setReason] = useState('');
const navigate = useNavigate()
  const cancelBookingHandler = ()=>{

    const cancelBookingObj = { bookingId, reason}
    // validation remaining
    axios.delete("http://localhost:7070/booking/cancel_booking",{
        data: cancelBookingObj
      })
    .then(response => {
        // Handle successful response
        console.log('Response data:', response.data);

        navigate('/myBooking')
    })
    .catch(error => {
        // Handle error
        console.error('An error occurred:', error);
    });
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Reason For Cancellation</h2>
              <p className="text-white-50 mb-3">Please enter your required Information</p>

            
              <MDBTextArea wrapperClass='mb-4 w-100' label='Enter Reason' id='formControlLg' type='text-area' size="lg" onChange={(e) => {
                                        setReason(e.target.value)
                                    }}/>
            
              <button className="LoginRegisterButton text-white btn-lg mb-3" onClick={cancelBookingHandler}>Confirm Cancel Booking</button>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default CancelBooking;

