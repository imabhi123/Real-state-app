import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="p-5 bg-light text-md">
        <div className="row bg-white m-5 p-5">
          <div className="col-md-6">
            <div className="">
              <h1>
                Hey there! <span className="d-block">Welcome back</span>
              </h1>
            </div>
          </div>
          <div className="col-md-6 pt-5">
            <div className="d-grid gap-2 col-md-6 mx-auto">
              <button className="btn btn-outline-primary" type="button">
                Sign in with Google
              </button>
              <button className="btn btn-outline-primary" type="button">
                Sign in with Facebook
              </button>
            </div>
            <div className="container">
            <form className="">
              <div className="">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="">
                <div className="row">
                        <label for="exampleInputPassword1" className="col-6 form-label">
                        Password
                        </label>
                        <span className="col-6 form-text text-end">
                            <Link to="/forget" className="text-danger">
                            Forget password ?
                            </Link>
                        </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
               <div className="mx-auto">
                    <button className="btn btn-danger" type="button">
                        Submit
                    </button>
               </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
