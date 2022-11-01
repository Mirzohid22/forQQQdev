import React, { useEffect } from 'react'
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import m from './Create.module.css'
import { Collapse } from '../components/Collapse';

export const CreatePage = () => {

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
      });
    });
  }, [])


  return (
    <div className={m.container} id={m.carousel} style={{ paddingTop: 30 }}>
      <div className="carousel carousel-slider center" id={m.maincenter}>
        <a href='/links'>
        <div id={m.carousel_item} className="carousel-item  white-text" href="#one!">
          <img src='https://avatars.mds.yandex.net/i?id=57b2075ca7f5ee4feead84758aeefdb6-5590531-images-thumbs&n=13' className={m.img} />
          <div className={m.info}>
            <h2>Third Panel</h2>
            <p>This is your third panel</p>
          </div>
        </div>
        </a>
        <div id={m.carousel_item} className="carousel-item  white-text" href="#two!">
          <img src='https://avatars.mds.yandex.net/i?id=752998cf25b7f8d92ae08bab1eb251cc-6295814-images-thumbs&n=13' className={m.img}/>
          <div className={m.info}>
            <h2>Third Panel</h2>
            <p>This is your third panel</p>
          </div>
        </div>
        <div id={m.carousel_item} className="carousel-item  white-text" href="#three!">
          <img src='https://avatars.mds.yandex.net/i?id=17d086bbac58c8f40aba5cce599d38eb-4936060-images-thumbs&n=13' className={m.img} />
          <div className={m.info}>
            <h2>Third Panel</h2>
            <p>This is your third panel</p>
          </div>
        </div>
        <div id={m.carousel_item} className="carousel-item  white-text" href="#four!">
          <img src='https://avatars.mds.yandex.net/i?id=93cb3910b1c24f761b239d2f5aae2c7e-5244292-images-thumbs&n=13' className={m.img} />
          <div className={m.info}>
            <h2>Third Panel</h2>
            <p>This is your third panel</p>
          </div>
        </div>
      </div>
      <Collapse />
    </div>
  )
}