import React from "react"
import hayat from "./imgs/hayat.png"
import zahgan from "./imgs/zahgan.jpg"


const Projects = () => {
    return (
        <div className="container">

            <div className="row">
                <div className="col-lg-5"><a href="https://github.com/ashrafJebril/7ayatbox" target="blank"><img src={hayat} /></a></div>
                <div className="col-lg-7"><h2>HayatBox</h2>
                    <div className="row">
                        <div className="col-lg-10"><p>HayatBox is a solution for those who wants to get married and they want to plan their wedding by reserving what ever they need from it </p></div>
                    </div>
                </div>
            </div>
            <hr/>


            <div className="row">
            <div className="col-lg-6"><h2>Zahgan</h2><p>Platform for adding all type of events  to help the user attend any event he want and allow the events providers

to check all the attendees</p></div>
               
                    
                        <div className="col-lg-6">
                        
                        <a href="https://github.com/ashrafJebril/Zahgan" target="blank"><img src={zahgan} /></a>
                </div>
            </div>

        </div>

    )
}

export default Projects

