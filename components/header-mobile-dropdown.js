import {pointer} from "../assets/svg/icons.js";

export function headerMobileDropdown(props){
  const {title, children} = props

  const links = children.map(child => {
    return `<a href="${child.href}" class="header-mobile-dropdown-link">${child.title}</a>`
  }).join('')

  return `<div class="header-mobile-dropdown">
        <div class="header-mobile-dropdown-toggle">
            <div>${title}</div>
            <div class="pointer">${pointer()}</div>
        </div>
        <div class="header-mobile-dropdown-list">
            ${links}
        </div>
    </div>`
}