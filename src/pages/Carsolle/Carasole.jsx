import React from 'react'
import"./style.css"
function Carsole() {
  return (
    <>

    
    <div className="card ">
  <input type="radio" name="select" id="slide_1" checked/>
  <input type="radio" name="select" id="slide_2"/>
  <input type="radio" name="select" id="slide_3"/>
  <input type="checkbox" id="slideImg"/>

 

  <div className="inner_part">
    <label for="slideImg" className="img">
      <img className="img_1" src="indicate.png"/>
    </label>
    <div className="content content_1">
      <div className="title">Token Swap</div>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consect.
        Lorem ipsum dolor sit amet consectetur .
        
      </div>
      
    </div>
  </div>

  <div className="inner_part">
    <label for="slideImg" className="img">
      <img className="img_2" src="indicate.png"/>
    </label>
    <div className="content content_2">
      <div className="title">Ankara</div>
      <div className="text">
        Ankara is Turkey's beating heart, second largest city, located in the Central Anatolia region and home to the Grand National Assembly of Turkey.
      </div>
     
    </div>
  </div>

  <div className="inner_part">
    <label for="slideImg" className="img">
      <img className="img_3" src="indicate.png"/>
    </label>
    <div className="content content_3">
      <div className="title">İzmir</div>
      <div className="text">Located on the shores of the Aegean Sea, west of the Anatolian Peninsula, İzmir is the third-largest city in Turkey.
      </div>
 
    </div>
  </div>
   <div className="slider">
    <label for="slide_1" className="slide slide_1"></label>
    <label for="slide_2" className="slide slide_2"></label>
    <label for="slide_3" className="slide slide_3"></label>
  </div>
</div>
</>
  );
}

export default Carsole;