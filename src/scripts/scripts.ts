import { navigate } from "astro:transitions/client";
import { getDrawerElement } from "./elements";

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
  const drawer = getDrawerElement();
  const drawerOpen = drawer?.style?.opacity === "1";

  if (drawerOpen) {
    toggleDrawer();
    await delay(500); // TODO set this time somewhere else
  }

  navigate("/");
}
