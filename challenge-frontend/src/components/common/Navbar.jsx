import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { deleteItem} from '../../utils/localStorage';

export const Navbar = () => {
   const history = useHistory();

    const handleLogout = () => {
        deleteItem("userLogged")
        history.push('/login')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/app/home"
                                activeClassName="active"
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/app/search" activeClassName="active" className="nav-link">Search</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-primary" type="button" onClick={handleLogout}>Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

