import React from "react";


function Skills() {
    return (
        <React.Fragment>
            <div className="min-h-screen  bg-dark mt-5 fn">
                <div className="container py-5">
                    <h1 className="text-center mb-5 text-white">Skills</h1>
                    <div class="container">

                        <div class="container__progressbars">

                            <div class="progressbar">
                                <svg class="progressbar__svg">
                                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
                                </svg>
                                <span class="progressbar__text shadow-html">HTML</span>
                            </div>

                            <div class="progressbar">
                                <svg class="progressbar__svg">
                                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
                                </svg>
                                <span class="progressbar__text shadow-css">CSS</span>
                            </div>

                            <div class="progressbar">
                                <svg class="progressbar__svg">
                                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-java shadow-java"> </circle>
                                </svg>
                                <span class="progressbar__text shadow-java">Java</span>
                            </div>

                            <div class="progressbar">
                                <svg class="progressbar__svg">
                                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-python shadow-python"> </circle>
                                </svg>
                                <span class="progressbar__text shadow-python">Python</span>
                            </div>  
                            <div class="progressbar">
                                <svg class="progressbar__svg">
                                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-react shadow-react"> </circle>
                                </svg>
                                <span class="progressbar__text shadow-react">ReactJs</span>
                            </div> 
                        </div>
                    </div>
                    <div id="main-container-social" class="main-container-social"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Skills;
