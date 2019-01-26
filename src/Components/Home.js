import React from "react"
import img from "./imgs/profile.jpg"
import { Link } from "react-router-dom";

const Home = () => {
    return (

       
            <div className="row ">
     
              
                    <div className="col-lg-5 col-sm-5">
                        <img src={img} className="home-img"></img>
                    </div>
                    <div className="col-lg-7 col-sm-7">
                        <h1>Hello, </h1><span>A bit About Me</span>
                        <div className="row">  <Link to={{pathname:"/Resume"}}> <div className="col-lg-2  red col-sm-2" > My Resume</div></Link>  
                         <Link to={{pathname:"/Projects"}}> <div className="col-lg-2 blue" >My Work</div></Link>  
                            <Link to={{pathname:"/Skills"}}>   <div className="col-lg-2 yellow">My Skills</div></Link>

                        </div>
                  
                     <div className="col-lg-10 col-sm-10"> I am a passionate with front end specially , strong in design , good problem solving skills , always seek to learn more </div></div>
            
         
            </div>
      
    )

}

export default Home

