import { getDrawer } from "./elements";

import navStyles from "../../components/nav/nav.module.scss";
import type { OpenClose } from "../../types";

function navOpen() {
  const drawer = getDrawer() as HTMLElement;
  drawer.classList.add(navStyles.drawerOpen);
}

function navClose() {
  const drawer = getDrawer() as HTMLElement;
  drawer.classList.remove(navStyles.drawerOpen);
}

export function navIsOpen() {
  const drawer = getDrawer() as HTMLElement;
  return drawer.classList.contains(navStyles.drawerOpen);
}

export function navToggle(state?: OpenClose) {
  if (state === "open") return navOpen();
  if (state === "close") return navClose();

  if (navIsOpen()) return navClose();
  navOpen();
}
