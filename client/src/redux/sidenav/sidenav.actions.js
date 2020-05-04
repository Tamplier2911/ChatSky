import sidenavTypes from "./sidenav.types";
const { TOGGLE_SIDENAV } = sidenavTypes;

export const toggleSidenav = () => ({
  type: TOGGLE_SIDENAV,
});
