// import "./Sidenav.scss";
import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSidenavHidden } from "../../redux/sidenav/sidenav.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { toggleSidenav } from "../../redux/sidenav/sidenav.actions";
import { signUserOutStart } from "../../redux/user/user.actions";

// js render css
import {
  SidenavContainer,
  SidenavBox,
  SidenavContent,
  SidenavUserData,
  SidenavImgWrap,
  SidenavImg,
  SidenavName,
  SidenavEmail,
  SidenavUL,
  SidenavLI,
  SidenavLink,
} from "./SidenavStyles";

const Sidenav = ({
  location: { pathname },
  hidden,
  toggleSidenav,
  user,
  signUserOutStart,
}) => {
  const { displayName, email, photoURL } = user ? user : {};

  const links = [
    { name: "Home", path: "/", action: (e) => toggleSidenav() },
    { name: "Channels", path: "/channels", action: (e) => toggleSidenav() },
    { name: "Chat", path: "/chat", action: (e) => toggleSidenav() },
  ];

  if (user)
    links.unshift({
      name: "Log Out",
      path: "/logout",
      action: (e) => {
        e.preventDefault();
        toggleSidenav(e);
        signUserOutStart();
      },
    });

  return ReactDOM.createPortal(
    hidden ? null : (
      <SidenavContainer onClick={() => toggleSidenav()}>
        <SidenavBox onClick={(e) => e.stopPropagation()}>
          <SidenavContent>
            {user ? (
              <React.Fragment>
                <SidenavUserData>
                  <SidenavImgWrap>
                    <SidenavImg src={photoURL} alt="happy user" />
                  </SidenavImgWrap>
                  <SidenavName>{displayName}</SidenavName>
                  <SidenavEmail>{email}</SidenavEmail>
                </SidenavUserData>
              </React.Fragment>
            ) : null}

            <SidenavUL>
              {links.map((link, i) => {
                const { name, path, action } = link;
                return (
                  <SidenavLI key={`${name}-${i}`}>
                    <SidenavLink
                      to={path}
                      onClick={(e) => action(e)}
                      active={pathname === path ? 1 : 0}
                    >
                      {name}
                    </SidenavLink>
                  </SidenavLI>
                );
              })}
            </SidenavUL>
          </SidenavContent>
        </SidenavBox>
      </SidenavContainer>
    ),
    document.getElementById("sidenav")
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectSidenavHidden,
  user: selectCurrentUser,
});

export default withRouter(
  connect(mapStateToProps, { toggleSidenav, signUserOutStart })(Sidenav)
);
