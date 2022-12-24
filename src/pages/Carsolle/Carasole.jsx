import React from 'react'
import"./style.css"
function Carsole() {
  return (
    <>

    
    <div class="card ">
  <input type="radio" name="select" id="slide_1" checked/>
  <input type="radio" name="select" id="slide_2"/>
  <input type="radio" name="select" id="slide_3"/>
  <input type="checkbox" id="slideImg"/>

 

  <div class="inner_part">
    <label for="slideImg" class="img">
      <img class="img_1" src="indicate.png"/>
    </label>
    <div class="content content_1">
      <div class="title">Token Swap</div>
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consect.
        Lorem ipsum dolor sit amet consectetur .
        
      </div>
      
    </div>
  </div>

  <div class="inner_part">
    <label for="slideImg" class="img">
      <img class="img_2" src="indicate.png"/>
    </label>
    <div class="content content_2">
      <div class="title">Ankara</div>
      <div class="text">
        Ankara is Turkey's beating heart, second largest city, located in the Central Anatolia region and home to the Grand National Assembly of Turkey.
      </div>
      <button>Read More</button>
    </div>
  </div>

  <div class="inner_part">
    <label for="slideImg" class="img">
      <img class="img_3" src="indicate.png"/>
    </label>
    <div class="content content_3">
      <div class="title">İzmir</div>
      <div class="text">Located on the shores of the Aegean Sea, west of the Anatolian Peninsula, İzmir is the third-largest city in Turkey.
      </div>
      <button>Read More</button>
    </div>
  </div>
   <div class="slider">
    <label for="slide_1" class="slide slide_1"></label>
    <label for="slide_2" class="slide slide_2"></label>
    <label for="slide_3" class="slide slide_3"></label>
  </div>
</div>
</>
  );
}

export default Carsole;