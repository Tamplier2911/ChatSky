import "./Sidenav.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidenavHidden } from "../../redux/sidenav/sidenav.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";
import { signUserOutStart } from "../../redux/user/user.actions";

const Sidenav = ({ hidden, toggleSidenav, user, signUserOutStart }) => {
  const { displayName, email, photoURL } = user ? user : {};
  const links = [
    { name: "Home", path: "/", action: (e) => toggleSidenav() },
    { name: "Chat", path: "/chat", action: (e) => toggleSidenav() },
  ];
  if (user)
    links.unshift({
      name: "Log Out",
      path: "/",
      action: (e) => {
        e.preventDefault();
        toggleSidenav(e);
        signUserOutStart();
      },
    });
  return ReactDOM.createPortal(
    hidden ? null : (
      <div className="sidenav" onClick={() => toggleSidenav()}>
        <div className="sidenav__box" onClick={(e) => e.stopPropagation()}>
          <div className="sidenav__content">
            {user ? (
              <React.Fragment>
                <div className="sidenav__content--userData">
                  <div className="sidenav__content--imgWrap">
                    <img
                      src={photoURL}
                      alt="happy user"
                      className="sidenav__content--img"
                    />
                  </div>
                  <div className="sidenav__content--name">{displayName}</div>
                  <div className="sidenav__content--email">{email}</div>
                </div>
              </React.Fragment>
            ) : null}

            <ul className="sidenav__content--ul">
              {links.map((link, i) => {
                const { name, path, action } = link;
                return (
                  <li className="sidenav__content--li">
                    <Link
                      to={path}
                      onClick={(e) => action(e)}
                      key={`${name}-${i}`}
                      className="sidenav__content--link"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    ),
    document.getElementById("sidenav")
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectSidenavHidden,
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { toggleSidenav, signUserOutStart })(
  Sidenav
);
