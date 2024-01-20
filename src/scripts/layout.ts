import { navigate } from "astro:transitions/client";

import { getDrawerElement, getHeaderBorderElement } from "./elements";
import { delay } from "./utils";

import headerStyles from "../components/header/header.module.scss";
import navStyles from "../components/nav/nav.module.scss";

export function isDrawerOpen() {
  const drawer = getDrawerElement() as HTMLElement;
  return drawer.classList.contains(navStyles.drawerOpen);
}

export function closeDrawer() {
  const drawer = getDrawerElement() as HTMLElement;
  drawer.classList.remove(navStyles.drawerOpen);
}

export function openDrawer() {
  const drawer = getDrawerElement() as HTMLElement;
  drawer.classList.add(navStyles.drawerOpen);
}

export function toggleDrawer() {
  if (isDrawerOpen()) {
    closeDrawer();
    return;
  }

  openDrawer();
}

export function openHeaderBorder() {
  if (window.location.pathname !== "/") return;

  const headerBorder = getHeaderBorderElement() as HTMLElement;

  headerBorder.classList.remove(headerStyles.headerBorderClose);
  headerBorder.classList.add(headerStyles.headerBorderOpen);
}

export function closeHeaderBorder() {
  const headerBorder = getHeaderBorderElement() as HTMLElement;

  headerBorder.classList.remove(headerStyles.headerBorderOpen);
  headerBorder.classList.add(headerStyles.headerBorderClose);
}

export function animateHeaderBorder(direction: "open" | "close") {
  const { pathname } = window.location;

  if (direction === "open") {
    if (pathname !== "/") return;

    openHeaderBorder();
    return;
  }

  closeHeaderBorder();
}

export async function navigateHome() {
  closeHeaderBorder();
  if (isDrawerOpen()) toggleDrawer();

  await delay(500); // TODO set this time somewhere else
  navigate("/");
}
