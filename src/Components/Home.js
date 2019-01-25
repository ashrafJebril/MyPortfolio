import React from "react"
import img from "./imgs/profile.jpg"
import { Link } from "react-router-dom";

const Home = () => {
    return (

        <div className="container">
            <div className="row all">
     
                <div className="row">
                    <div className="col-lg-4">
                        <img src={img} className="home-img"></img>
                    </div>
                    <div className="col-lg-8">
                        <h1>Hello, </h1><span>A bit About Me</span>
                        <div className="row"><div className="col-lg-2 red" >My Resume</div>
                         <Link to={{pathname:"/Projects"}}> <div className="col-lg-2 blue" >My Work</div></Link>  
                            <Link to={{pathname:"/Skills"}}>   <div className="col-lg-2 yellow">My Skills</div></Link>

                        </div>
                     <div className="row">
                     <div className="col-lg-8"> I am a passionate with front end specially , strong in design , good problem solving skills , always seek to learn more </div></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home

