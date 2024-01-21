import { getHeaderBorder } from "../../scripts/client/elements";
import type { OpenClose } from "../../types";

import headerStyles from "../../components/header/header.module.scss";

function headerBorderOpen() {
  const headerBorder = getHeaderBorder();
  if (!headerBorder) return;

  headerBorder.classList.remove(headerStyles.headerBorderClose);
  headerBorder.classList.add(headerStyles.headerBorderOpen);
}

function headerBorderClose() {
  const headerBorder = getHeaderBorder();
  if (!headerBorder) return;

  headerBorder.classList.remove(headerStyles.headerBorderOpen);
  headerBorder.classList.add(headerStyles.headerBorderClose);
}

export function headerBorderAnimate(direction: OpenClose) {
  direction === "open" ? headerBorderOpen() : headerBorderClose();
}
