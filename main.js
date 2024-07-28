import {banner} from "./components/banner.js";
import {banner_data1, banner_data2} from "./data/banner-data.js";

export function Main(){
  return`<div class="cont">
        <p class="breadcrumb">მთავარი</p>
        
        ${banner(banner_data1)}
        ${banner(banner_data2)}
    </div>`
}