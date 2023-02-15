import React from 'react'
import { Link, BrowserRouter, Routes} from 'react-router-dom'

export default function Navbar(props) {

    let { logo } = props.logos;

    return (
        <>
            <div className=" bg-light ">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand d-flex " href="#">
                            <img src={logo} alt={'image' + props.config.title} width="30" height="24" className='me-2'></img>
                            <p>{props.config.title}</p>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <BrowserRouter>
                                    <Routes>
                                        {/* <li className="nav-item"> */}
                                        {/* <Route> */}
                                            {/* <Link to={'/edit'} className="btn btn-warning" >Edit</Link> */}

                                        {/* </Route> */}
                                        {/* <Route>
                                        <li className="nav-item">
                                            <Link to={'/show'} className="btn btn-warning" >Show</Link>
                                        </li>

                                        </Route>
                                        <Route>
                                        <li className="nav-item">
                                            <Link to={'/create'} className="btn btn-warning" >Create</Link>
                                        </li>

                                        </Route> */}
                                    </Routes>
                                </BrowserRouter>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='text-center bg-dark text-white'>
                <h1 className='py-5'> {props.config.title}</h1>
            </div>
        </>
    )

}
