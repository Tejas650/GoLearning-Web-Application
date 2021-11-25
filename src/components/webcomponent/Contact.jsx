import React, { useState } from "react";

const Contact = () => {

    const[data, setData] = useState({
        fname: "",
        mname: "",
        ename: "",
        msg: "",
    });

    const inputEvent = ((event) => {
        
        const{name, value} = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name] : value,
            };
        });
        
    });

    const onsubmits = (e) => {
       e.preventDefault();
       alert(`My Name is ${data.fname}. My mobile number is ${data.mname}. My e-mail id ${data.ename}, Here is I want to say ${data.msg}. `)
       setData({
        fname: "",
        mname: "",
        ename: "",
        msg: "",
    });
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_center">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <div className="mb-3">
                            <form onSubmit={onsubmits}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1">Full Name</label>
                                    <input type="name" className="form-control" id="exampleFormControlInput1" name="fname" onChange={inputEvent} value={data.fname} placeholder="Enter your name" />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1">Mobile Number</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" name="mname" onChange={inputEvent} value={data.mname} placeholder="Enter your number" />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="ename" onChange={inputEvent} value={data.ename} placeholder="Enter your email" />
                                </div>
    
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" name="msg" onChange={inputEvent} value={data.msg} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-outline-primary">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;