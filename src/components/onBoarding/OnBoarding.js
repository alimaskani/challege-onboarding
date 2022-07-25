import React, {useState} from "react";
import "../../assets/css/onboarding.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import step1 from '../../assets/images/step1.gif';
import step2 from '../../assets/images/step2.gif';
import step3 from '../../assets/images/step3.gif';

const OnBoarding = () => {

    const [countCir, setCountCir] = useState(4)
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()


    return (
        <div className="row onboard">
            <div className={counter === 3 ? "col-lg-4 col-md-6 col-12 box" : "col-lg-8 col-md-9 col-12 box"}>
                <div className="row h-100">
                    <div className={counter === 3 ? "col-md-5 h-100 w-100" : "col-md-5 h-100"}>
                        <div className="info">
                            {
                                counter === 0 ?
                                    <>
                                        <h4 className="fw-bold">Let's Start Challenge !!</h4>
                                        <p>
                                            The reason for our presence in this section is this. To show our abilities
                                            and say that we can grow and improve the knowledge level of ourselves and
                                            our team.
                                        </p>
                                    </>
                                    :
                                    <></>

                            }

                            {
                                counter === 1 ?
                                    <>
                                        <h4 className="fw-bold">Team Work !!!</h4>
                                        <p>
                                            This is one of the most important characteristics of every person. who can
                                            have a very good card and help his colleagues in doing their work, we will
                                            experience this at this stage.
                                        </p>
                                    </>
                                    :
                                    <></>

                            }

                            {
                                counter === 2 ?
                                    <>
                                        <h4 className="fw-bold"> successful person !!!</h4>
                                        <p>
                                            We are trying so that every person can grow here and become a successful
                                            person with excellent knowledge.
                                        </p>
                                    </>
                                    :
                                    <></>

                            }

                            {
                                counter === 3 ?
                                    <>
                                        <h4>Let's go to start !!!</h4>
                                        <p>
                                            I hope you experience a good start, thank you for accompanying us so far.
                                        </p>
                                    </>
                                    :
                                    <></>
                            }

                            <div className="next">
                                <button className={counter === 3 ? "d-none" : "btn btn-next w-25"}
                                        onClick={() => setCounter(counter + 1)}> NEXT
                                </button>
                                <div className={counter === 3 ? "d-none" : "circle"}>
                                    <span className={counter === 0 ? "cir active" : "cir"}
                                          onClick={() => setCounter(0)}> </span>
                                    <span className={counter === 1 ? "cir active" : "cir"}
                                          onClick={() => setCounter(1)}> </span>
                                    <span className={counter === 2 ? "cir active" : "cir"}
                                          onClick={() => setCounter(2)}> </span>
                                    <span className={counter === 3 ? "cir active" : "cir"}
                                          onClick={() => setCounter(3)}> </span>
                                </div>

                                <button className={counter === 3 ? "btn btn-next w-50 m-0 m-auto" : "d-none"}
                                        onClick={() => navigate("page1")}> Finish
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={counter === 3 ? "d-none" : "col-md-7 images"}>
                        {
                            counter === 0 ? <img src={step1} className="img-fluid" alt=""/> : <></>
                        }

                        {
                            counter === 1 ? <img src={step2} className="img-fluid" alt=""/> : <></>
                        }

                        {
                            counter === 2 ? <img src={step3} className="img-fluid" alt=""/> : <></>
                        }

                    </div>
                </div>
                <button className={counter === 3 ? " d-none" : " btn btn-circle-next"}
                        onClick={() => setCounter(counter + 1)}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
                <button className={counter === 0 ? " d-none" : " btn btn-circle-prev"}
                        onClick={() => setCounter(counter - 1)}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
            </div>
        </div>
    )
}

export default OnBoarding