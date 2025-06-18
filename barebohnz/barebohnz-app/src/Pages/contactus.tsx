import React from 'react'


const Registration = () => {
  return (

 <section className='container my-5'>

  <div className="row">


    <div className="col-12 text d-flex flex-column align-items-center justify-content-center bg-light p-5">
      <h1>Name</h1>
      <input className="form-input" name='name' type='text'  />
      <h1>Email</h1>
      <input className="form-input" name='email' type='email'  />
      <h1>Message/Question</h1>
      <input className="form-input" name='message' type='message' />


      <button className="mt-3 padding-10px" >Contact US</button>
    </div>
  </div>
</section>


   
   
  );
}

export default Registration;
 