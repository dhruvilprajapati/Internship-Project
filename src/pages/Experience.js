import React from "react";
import certificate1 from './../images/certificate1.JPG';
import certificate2 from './../images/certificate2.JPG';
function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen  bg-dark  mt-5 ">
                <div className="container py-5">
                    <h1 className="text-center mb-5 text-white fn">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5 member">
                                <div className="card-body ">
                                    <h5 className="card-title fw-bold">Web Development <span className="h6">Intern at Coding Gujju</span></h5>
                                    <p className="mb-0">June-2022</p>
                                    <small>During my internship, I learned how to communicate and build relationships with
                                         the people I worked with. I learned how to introduce myself, talk about my interests,
                                        knowledge and skills with entrepreneurs And also I learned HTML,CSS,Js,Bootstrap 5 and implementation
                                        of ReactJs+NodeJs.
                                        
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5 member">
                                <div className="card-body ">
                                    <h5 className="card-title fw-bold">HTML course <span className="h6">from sololearn</span></h5>
                                    <img src={certificate1} width={300} alt="certificate"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3 member">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">CSS course <span className="h6">from sololearn</span></h5>
                                    <img src={certificate2} width={300} alt="certificate"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;