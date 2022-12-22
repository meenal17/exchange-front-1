import React from 'react'
import"./style.css"
function Carsole() {
  return (
    <div class="card">
    <input type="radio" name="select" id="slide_1" checked/>
    <input type="radio" name="select" id="slide_2"/>
    <input type="radio" name="select" id="slide_3"/>
    <input type="checkbox" id="slideImg"/>
  
    <div class="slider">
      <label for="slide_1" class="slide slide_1"></label>
      <label for="slide_2" class="slide slide_2"></label>
      <label for="slide_3" class="slide slide_3"></label>
    </div>
  
    <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_1" src="https://c4.wallpaperflare.com/wallpaper/978/131/617/kiz-kulesi-turkey-istanbul-maiden-s-tower-wallpaper-preview.jpg"/>
      </label>
      <div class="content content_1">
        <div class="title">İstanbul</div>
        <div class="text">
          Istanbul, a fascinating city built on two Continents, divided by the Bosphorus Strait. This is one of the greatest cities in the world.
        </div>
    
      </div>
    </div>
  
    <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_2" src="https://c4.wallpaperflare.com/wallpaper/649/96/56/ankara-cityscape-night-night-sky-wallpaper-preview.jpg"/>
      </label>
      <div class="content content_2">
        <div class="title">Ankara</div>
        <div class="text">
          Ankara is Turkey's beating heart, second largest city, located in the Central Anatolia region and home to the Grand National Assembly of Turkey.
        </div>
    
      </div>
    </div>
  
    <div class="inner_part">
      <label for="slideImg" class="img">
        <img class="img_3" src="https://c4.wallpaperflare.com/wallpaper/620/34/558/turkey-izmir-mountains-wallpaper-preview.jpg"/>
      </label>
      <div class="content content_3">
        <div class="title">İzmir</div>
        <div class="text">Located on the shores of the Aegean Sea, west of the Anatolian Peninsula, İzmir is the third-largest city in Turkey.
        </div>
    
      </div>
    </div>
  </div>
  );
}

export default Carsole;