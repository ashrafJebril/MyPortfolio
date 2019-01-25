import React from "react"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container Nav" >
        <div className="row">
            <div className="col-lg-12">
                <h2>Ashraf Jebril</h2>
            </div></div>
        <div className="row des">
            <div className="col-lg-4">
                <p>Full Stack Software Engineer</p>
            </div>
            <div className="col-lg-8">
                <ul><a href><li>
                <Link
                    to={{
                        pathname: "/"
                    }}
                >

                   Home</Link></li></a><a href><li>Projects</li></a><li>            <Link
                    to={{
                        pathname: "/Intereists"
                    }}
                >

                    Intereists </Link></li> </ul>

            </div>
        </div>
        </div>

    )
}
export default Nav