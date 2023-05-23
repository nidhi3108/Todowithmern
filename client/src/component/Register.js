import React from "react"
import {Formik} from "formik";
import Swal from "sweetalert2";

const Register = () => {


    const registerSubmit = async(formdata) => {
        console.log(formdata);
        const response=await fetch('http://localhost:5000/user/register',{
            method:'post',
            body: JSON.stringify(formdata),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log(response.status);
        
        if(response.status===200){
            console.log("Register Successful");
            Swal.fire({
                title:"Register Suuceesful",
                icon:"success",
                timer: 2000
              })
        }
        else{
            console.log("Register failed");
            Swal.fire({
                title:"oops something wrong",
                icon:"error",
                timer: 2000
              })
        }
    }

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>

                                            < Formik
                                                initialValues={{ name: "", email: "", password: "",repeatpassword:"" }}
                                                onSubmit={registerSubmit}>
                                                {
                                                    ({ values, handleChange, handleSubmit }) => (
                                                        <form onSubmit={handleSubmit}
                                                            className="mx-1 mx-md-4">
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                                <div className=" mb-0">
                                                                    <label className="form-label" htmlFor="form3Example1c">
                                                                        Your Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        // id="name"
                                                                        onChange={handleChange}
                                                                        value={values.name}
                                                                        id="name"
                                                                        className="form-control"
                                                                        
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                                <div className="mb-0">
                                                                    <label className="form-label" htmlFor="form3Example3c">
                                                                        Your Email
                                                                    </label>
                                                                    <input
                                                                        value={values.email}
                                                                        onChange={handleChange}
                                                                        type="email"
                                                                        id="email"
                                                                        className="form-control"
                                                                    />

                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                                <div className=" mb-0">
                                                                    <label className="form-label" htmlFor="form3Example4c">
                                                                        Password
                                                                    </label>
                                                                    <input
                                                                        value={values.password}
                                                                        onChange={handleChange}
                                                                        type="password"
                                                                        id="password"
                                                                        className="form-control"
                                                                    />

                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                                <div className="mb-0">
                                                                    <label className="form-label" htmlFor="form3Example4cd">
                                                                        Repeat your password
                                                                    </label>
                                                                    <input
                                                                        value={values.repeatpassword}
                                                                        onChange={handleChange}
                                                                        type="repeatpassword"
                                                                        id="repeatpassword"
                                                                        className="form-control"
                                                                    />

                                                                </div>
                                                            </div>

                                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                                <button type="submit" className="btn btn-primary btn-lg">
                                                                    Register
                                                                </button>
                                                            </div>
                                                        </form>
                                                    )
                                                }

                                            </Formik>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Register