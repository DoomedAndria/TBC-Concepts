import {arrow} from "../assets/svg/icons.js";

export function banner(props){
  const {title,description,btnTxt,image} = props
  return `<div class="banner" style="background-image: url('${image}')">
    <div class="banner-content">
        <div class="banner-inner">
            <h1> ${title}</h1>
            <p>${description}</p>
            <button>${arrow()} <div>${btnTxt}</div></button>
        </div>
    </div>
</div>`
}