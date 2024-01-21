import {
  navId,
  headerLogoAnchorId,
  headerBorderId,
  headerButtonId,
  headerToggleButtonId,
  navIndexAnchorId,
} from "../elementIds";

export function getNav() {
  return document.getElementById(navId);
}

export function getHeaderLogoAnchor() {
  return document.getElementById(headerLogoAnchorId);
}

export function getHeaderToggleButton() {
  return document.getElementById(headerToggleButtonId);
}

export function getHeaderBorder() {
  return document.getElementById(headerBorderId);
}

export function getHeaderButton() {
  return document.getElementById(headerButtonId);
}

export function getNavIndexAnchor() {
  return document.getElementById(navIndexAnchorId);
}
