import { getHeaderBorderElement } from "../../scripts/elements";
import styles from "./header.module.scss";

export function borderAnimation() {
  const { pathname } = window.location;

  if (pathname === "/") {
    const headerBorder = getHeaderBorderElement();
    if (headerBorder) headerBorder.classList.add(styles.borderAnimation);
  }
}
