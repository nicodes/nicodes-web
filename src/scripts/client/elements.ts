import {
  drawerId,
  headerLogoAnchorId,
  headerBorderId,
  headerButtonId,
  homeLinkId,
  headerToggleButtonId,
} from "../elementIds";

export const getDrawer = () => document.getElementById(drawerId);

export const getHeaderLogoAnchor = () =>
  document.getElementById(headerLogoAnchorId);

export const getHeaderToggleButton = () =>
  document.getElementById(headerToggleButtonId);

export const getHeaderBorder = () => document.getElementById(headerBorderId);

export const getHeaderButton = () => document.getElementById(headerButtonId);

export const getHomeLink = () => document.getElementById(homeLinkId);
