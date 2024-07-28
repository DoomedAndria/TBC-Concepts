import {banner} from "./components/banner.js";
import {banner_data1, banner_data2} from "./data/banner-data.js";
import {arrow} from "./assets/svg/icons.js";

export function Main(){
  const imgs = [
    'https://static.tbcconcept.ge/desktop/media/mfvvitla.0j5430128849_7213815365374065_9017687812435872577_n.png',
    'https://static.tbcconcept.ge/desktop/media/0m25n3qt.w03prem.png',
    'https://static.tbcconcept.ge/desktop/media/nqeaa1rb.avl360.png'
  ]
  return`<div class="cont">
        <p class="breadcrumb">მთავარი</p>
        
        ${banner(banner_data1)}
        <p class="big-message-text">
            გამოიწერეთ თიბისი კონცეპტის ნაკრები და ისარგებლეთ როგორც საბანკო, ისე არასაბანკო უპირატესობებით.
        </p>
        
        <div class="grid">
            <div class="col">
                <div class="card" style="background-image: url('${imgs[0]}')">
                  <h4>ციფრული</h4>
                  <a>${arrow()} იხილე მეტი</a>
                </div>
                <div class="card" style="background-image: url('${imgs[1]}')">
                    <h4>პრემიუმი</h4>
                    <a>${arrow()} იხილე მეტი</a>
                </div>
            </div>
            
            <div class="card" style="background-image: url('${imgs[2]}')">
                <h4>360</h4>
                <a>${arrow()} იხილე მეტი</a>
            </div>
        </div>
        ${banner(banner_data2)}
    </div>`
}