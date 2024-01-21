import { getHeaderBorder } from "./elements";
import type { OpenClose } from "../../types";

import headerStyles from "../../components/header/header.module.scss";

export function headerBorderOpen() {
  // todo bad place for this logic
  if (window.location.pathname !== "/") return;

  const headerBorder = getHeaderBorder() as HTMLElement;

  headerBorder.classList.remove(headerStyles.headerBorderClose);
  headerBorder.classList.add(headerStyles.headerBorderOpen);
}

export function headerBorderClose() {
  const headerBorder = getHeaderBorder() as HTMLElement;

  headerBorder.classList.remove(headerStyles.headerBorderOpen);
  headerBorder.classList.add(headerStyles.headerBorderClose);
}

export function headerBorderAnimate(direction: OpenClose) {
  if (direction === "open") return headerBorderOpen();
  headerBorderClose();
}
