import { createSelector } from "reselect";

const selectSidenav = (state) => state.sidenav;

export const selectSidenavHidden = createSelector(
  [selectSidenav],
  (sidenav) => sidenav.sidenavHidden
);
