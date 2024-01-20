import { navigate } from "astro:transitions/client";

import { getDrawerElement, getHeaderBorderElement } from "./elements";
import { delay } from "./utils";

import headerStyles from "../components/header/header.module.scss";

export function isDrawerOpen() {
  const drawer = getDrawerElement();
  return drawer?.style?.opacity === "1";
}

export function toggleDrawer() {
  const drawer = getDrawerElement();

  if (drawer?.style?.transform === "translateX(-100%)") {
    drawer.style.transform = "translateX(0)";
    drawer.style.opacity = "1";
  } else if (drawer?.style?.transform) {
    drawer.style.transform = "translateX(-100%)";
    drawer.style.opacity = "0";
  }
}

export async function navigateHome() {
  if (isDrawerOpen()) {
    toggleDrawer();
    await delay(500); // TODO set this time somewhere else
  }

  navigate("/");
}

export function animateHeaderBorder() {
  const { pathname } = window.location;

  if (pathname === "/") {
    const headerBorder = getHeaderBorderElement();
    if (headerBorder)
      headerBorder.classList.add(headerStyles.animateHeaderBorder);
  }
}
