import { getNav } from "../../scripts/client/elements";
import type { OpenClose } from "../../types";

import navStyles from "./nav.module.scss";

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
