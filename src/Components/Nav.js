import React from "react"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container nav all" >
            <div className="row">
                <div className="col-lg-12">
                    <h2>Ashraf Jebril</h2>
                </div></div>
            <div className="row des">
                <div className="col-lg-4">
                    <p>Full Stack Software Engineer</p>
                </div>
                <div className="col-lg-8">
                    <ul><li>
                        <Link
                            to={{
                                pathname: "/"
                            }}
                        >

                            Home</Link></li><li> <Link to={{ pathname: "/Projects" }}>Projects </Link></li><li>            <Link
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