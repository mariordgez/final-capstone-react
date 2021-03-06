import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faClipboard,
  faSignOutAlt,
  faCalendarCheck,
  faCar,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { openForm } from '../../redux/car_list/addNewCarFormSlice';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { Page } = props;
  const openFormHandle = () => {
    dispatch(openForm());
  };
  return (
    <div className="container-fluid gap-0">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 ps-sm-2 px-0 bg-white">
          <div className="border-right d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
            <NavLink
              exact
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </NavLink>
            <ul
              className="w-100 nav nav-pills  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="px-0 nav-item w-100 hoverli">
                <NavLink
                  to="/"
                  className="w-100 nav-linke hoverlink  align-middle px-0"
                >
                  <FontAwesomeIcon className="icon-mx" icon={faHome} />
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </NavLink>
              </li>
              <li className="px-0 nav-item w-100 hoverli">
                <NavLink
                  to="/reservations"
                  className="w-100 nav-linke hoverlink  align-middle px-0"
                >
                  <FontAwesomeIcon className="icon-mx" icon={faCalendarCheck} />
                  <span className="ms-1 d-none d-sm-inline">Reservations</span>
                </NavLink>
              </li>
              <li className="px-0 nav-item w-100 hoverli">
                <NavLink
                  to="/myReservations"
                  className="w-100 nav-linke hoverlink  align-middle px-0"
                >
                  <FontAwesomeIcon className="icon-mx" icon={faClipboard} />
                  <span className="ms-1 d-none d-sm-inline">My Reservations</span>
                </NavLink>
              </li>
              <li className="px-0 nav-item w-100 hoverli">
                <NavLink
                  to="/"
                  onClick={openFormHandle}
                  className="hoverlink  align-middle px-0"
                >
                  <FontAwesomeIcon className="icon-mx" icon={faCar} />
                  <span className="ms-1 d-none d-sm-inline">Add new car</span>
                </NavLink>
              </li>
              <li className="px-0  nav-item w-100 hoverli">
                <NavLink
                  to="/detail/cars/delete"
                  className="w-100 nav-linke hoverlink  align-middle px-0"
                >
                  <FontAwesomeIcon className="icon-mx" icon={faTrashAlt} />
                  <span className="ms-1 d-none d-sm-inline">Delete</span>
                </NavLink>
              </li>
              <li className="px-0 nav-item w-100 hoverli">
                <NavLink
                  to="#"
                  className="w-100 hoverlink  align-middle px-0"
                >
                  <FontAwesomeIcon className="icon-mx" icon={faSignOutAlt} />
                  <span className="ms-1 d-none d-sm-inline">Sign Out</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col px-0 d-flex">
          <Page />
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  Page: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.elementType]),
};
Navbar.defaultProps = {
  Page: 'HomePage',
};
export default Navbar;
