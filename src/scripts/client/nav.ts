import { getNav } from "./elements";

import navStyles from "../../components/nav/nav.module.scss";
import type { OpenClose } from "../../types";

function navOpen() {
  const nav = getNav();
  if (!nav) return;

  nav.classList.add(navStyles.navOpen);
}

function navClose() {
  const nav = getNav();
  if (!nav) return;

  nav.classList.remove(navStyles.navOpen);
}

export function navIsOpen() {
  const nav = getNav();
  if (!nav) return;

  return nav.classList.contains(navStyles.navOpen);
}

export function navToggle(state?: OpenClose) {
  if (state === "open") return navOpen();
  if (state === "close") return navClose();

  navIsOpen() ? navClose() : navOpen();
}
