import React, { useState } from 'react';

const Contactus=()=> {
  const[data, setData]= useState({
    fullname:"",
    phone:"",
    email:"",
    message:"",

  });
  const InputEvent=(event)=>{
    const{name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value
      }
    })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`My Name is ${data.fullname}. My phone number is ${data.phone}. My email id is ${data.email}. My message is ${data.message}`) 
   }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center" >Our Services</h1>
      </div>
      <div className="conatainer contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label class="form-label">Full Name</label>
                  <input type="text" onChange={InputEvent} class="form-control" name="fullname" value={data.fullname}  placeholder="Enter your fullname"/>
                  
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone Number</label>
                  <input type="text" onChange={InputEvent} class="form-control" name="phone" value={data.phone} placeholder="Enter phone number"/>
                </div>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input type="email" onChange={InputEvent} class="form-control" name="email" value={data.email} placeholder="Enter emailid"/>
                </div>
                <div class="mb-3">
                  <label class="form-label">Message</label>
                  <textarea name="" name="message" rows="2" value={data.message} onChange={InputEvent} class="form-control"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" class="btn btn-outline-primary">Submit form</button>
                </div>
                
              </form>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
