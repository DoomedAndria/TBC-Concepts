import {arrowLink} from "./arrow-link.js";
import {
  fbIcon,
  globeIcon, instaIcon,
  locationIcon,
  mailIcon,
  phoneIcon,
  searchIcon,
  tbcIcon,
  tbcIconSmall, tbcIconSmaller
} from "../assets/svg/icons.js";
import {menu_buttons_data} from "../data/header-data.js";
import {headerMobileDropdown} from "./header-mobile-dropdown.js";

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


  const header_menu_mobile = menu_buttons_data.map( b => {
    return headerMobileDropdown(b)
  }).join('')

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
        
        <div class="header-overlay">
            ${header_menu_mobile}
            <div class="header-menu-mobile-contacts">
                <p class="h">დაგვიკავშირდით:</p>
                <div class="footer_contact-list">
                    <a href="#">${phoneIcon()} +995 32 2 27 27 00</a>
                    <a href="#">${mailIcon()} info@tbcconcept.ge</a>
                    <a href="#">${locationIcon()} ფილიალები</a>
                </div>
                <p class="h">სოციალური ქსელები:</p>
                <div class="social">
                    <div>${fbIcon()}</div>
                    <div>${instaIcon()}</div>
                </div>
            </div>
            <div class="header-menu-mobile-bottom">
                <div class="bottom-icon-wrap">
                    <div style="width: 20px">${tbcIconSmaller()}</div>
                    <p>2024 ყველა უფლება დაცულია</p>
                </div>
                <div class="bottom-links">
                    <p>კონფიდენციალურობა</p>
                    <p>წესები და პირობები</p>
                </div>
            </div>
        </div>
    </div>  
</div>`
}
