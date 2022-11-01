import React, {useEffect} from 'react'
import img1 from '../pages/img/1.jpg'
import img2 from '../pages/img/2.jpg'
import img3 from '../pages/img/3.jpg'
import img4 from '../pages/img/4.jpg'
import img5 from '../pages/img/5.jpg'
import m from './LinkCard.module.css'
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import { Collapse } from './Collapse'

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems,{});
});

export const Rooms = () => {
  return (
    <>
      <div className={m.rooms}>
        <div className={m.grid}>
            <img class="materialboxed" width="650" src={img1}/>
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img3} />
        </div>
        <Collapse />
      </div>
    </>
  )
}
