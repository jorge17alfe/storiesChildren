import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div className='px-5 pt-5 pb-1 bg-dark text-light text-center'>
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* <Link to={'/whoare'} className="btn btn-warning" >Who are</Link> */}
                </li>
            </ul>
            <h1>Footer</h1>
            <h2>{props.config.title}</h2>
            <a className='text-info' href='https://alocraise.com' target='__blank'> &copy; Alocraise-Shop 2022</a>
        </div>
    )
}
