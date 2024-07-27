import {arrowLink} from "./arrow-link.js";
import {globeIcon, searchIcon, tbcIcon, tbcIconSmall} from "../assets/svg/icons.js";
import {menu_buttons_data} from "../data/header-data.js";

export function createHeader() {
  const arrow_props = {
    title: 'გამოიწერეთ ნაკრები',
    href: 'https://tbcconcept.ge/ge/products/kits'
  }

  const header_menu = menu_buttons_data.map(menu => {
    const links = menu.children.map(child => `
      <a href="${child.href}" class="header-dropdown-link">${child.title}</a>
    `).join('');

    return `
      <div class="header-dropdown">
        <div class="header-dropdown-toggle">
            ${menu.title}
            <div class="header-dropdown-line"></div>
        </div>
        <nav class="header-dropdown-list">
          ${links}
        </nav>
      </div>
    `;
  }).join('');

  return `<div class="header-placeholder">
    <div class="header">
        <div class="header-container">
        
            <a class="header-logo-link" href="/">
              <div class="header-logo">
                  ${tbcIcon()}
              </div>      
              <div class="header-logo small">
                  ${tbcIconSmall()}
              </div>     
            </a>

            <nav class="header-menu">
                ${header_menu}
            </nav>

            <div class="header-buttons">
                <a href="https://tbcconcept.ge/ge/search" class="search-button">
                    ${searchIcon()}
                </a>
                
                ${arrowLink(arrow_props)}
                
                <div class="lang-toggle">
                    ${globeIcon()}
                    <div>ქარ</div>
                </div>
                
                <div id="hamburger">
                    <div class="up"></div>
                    <div class="mid"></div>
                    <div class="bot"></div>
                </div>
            </div>
        </div>
        
        <div class="header-dropdown-bg">
            <a  href="https://tbconline.ge/tbcrd/login?t=false">
                <img src="https://static.tbcconcept.ge/desktop/media/uz0y3tkf.idxFixed%20aspect%20ratio%20block%20[Utility].png" alt="">
            </a>
            ${arrowLink({title: 'ციფრული ბანკი', href: 'https://tbconline.ge/tbcrd/login?t=false'})}
        </div>
    </div>  
</div>`
}
