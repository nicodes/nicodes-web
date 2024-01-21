import { navigate } from "astro:transitions/client";

import { delay } from "../utils";
import { headerBorderAnimate } from "./header";
import { navIsOpen, navToggle } from "./nav";

export async function navigateHome() {
  headerBorderAnimate("close");
  if (navIsOpen()) navToggle("close");

  await delay(500); // TODO set this time somewhere else
  navigate("/");
}
