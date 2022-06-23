import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen  bg-dark mt-5 ">
                <div className="container py-5">
                    <h1 className="text-center mb-5 text-white fn">Education</h1>
                    <div className="row">
                        <div className="col-md-4 " >
                            <div className="card mb-3 member">
                                <div className="card-body eduboxht">
                                    <h5 className="card-title fw-bold">SSC <span className="h6"> at Madhav vidhya vihar</span></h5>
                                    <p className="mb-0">March 2017 - March 2018</p>
                                    <small></small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card mb-3 member">
                                <div className="card-body eduboxht">
                                    <h5 className="card-title fw-bold">HSC <span className="h6"> at Devasya International School</span></h5>
                                    <p className="mb-0">March 2019 - March 2020</p>
                                    <small></small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 member">
                                <div className="card-body eduboxht">
                                    <h5 className="card-title fw-bold">B.Tech <span className="h6"> at SilverOak University</span></h5>
                                    <p className="mb-0">March 2020 - March 2024</p>
                                    <small>Engineers are good at taking risks (The last night study ).
                                    </small>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-white d-flex justify-content-center mt-4 fn"> Hobby</h1>
                        <div id="my-pie-chart-container" className="justify-content-center mt-3 " >

                            <div id="my-pie-chart"></div>

                            <div id="legenda">
                                <div class="entry">
                                    <div id="color-brown" class="entry-color"></div>
                                    <div class="entry-text">Hiking</div>
                                </div>
                                <div class="entry">
                                    <div id="color-black" class="entry-color"></div>
                                    <div class="entry-text">Photography</div>
                                </div>
                                <div class="entry">
                                    <div id="color-green" class="entry-color"></div>
                                    <div class="entry-text">Reading</div>
                                </div>
                                <div class="entry">
                                    <div id="color-yellow" class="entry-color"></div>
                                    <div class="entry-text">Games</div>
                                </div>
                                <div class="entry">
                                    <div id="color-orange" class="entry-color"></div>
                                    <div class="entry-text">Traveling</div>
                                </div>
                                <div class="entry">
                                    <div id="color-red" class="entry-color"></div>
                                    <div class="entry-text">Music</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;