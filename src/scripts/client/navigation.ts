import { navigate } from "astro:transitions/client";

import { timeout } from "../utils";
import { headerBorderAnimate } from "../../components/header/header";
import { navIsOpen, navToggle } from "../../components/nav/nav";

export async function navigateHome() {
  headerBorderAnimate("close");
  if (navIsOpen()) navToggle("close");

  await timeout(500); // TODO set this time somewhere else
  navigate("/");
}
