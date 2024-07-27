import {arrow} from "../assets/svg/icons.js";

export function arrowLink(props) {
  let {title,href} = props;
  return `<a class="arrow-link" href="${href}">
          <div class="button-icon">
          ${arrow()}
          </div>
          <div class="button-text">${title}</div>
      </a>`;
}