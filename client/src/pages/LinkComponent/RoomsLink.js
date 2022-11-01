import React from 'react'
import img6 from '../img/6.jpg'
import img5 from '../img/5.jpg'
import img4 from '../img/4.jpg'
import img3 from '../img/3.jpg'
import img2 from '../img/2.jpg'
import img1 from '../img/1.jpg'
import m from './RoomsLink.module.css'
import 'materialize-css'

export const RoomsLink = () => {
  return (
    <>
      <div className={m.rooms}>
        <div className={m.grid}>
          <div className={m.block}>
            <div className={m.left}>
              <img src={img1} />
            </div>
            <div className={m.right}>
              <h6>information about rooms</h6>
              <a  href='https://t.me/jjjjjooooojjjj' class="waves-effect waves-light btn-small">Booking</a>
            </div>
          </div>
          <div className={m.block}>
            <div className={m.left}>
              <img src={img1} />
            </div>
            <div className={m.right}>
              <h6>information about rooms</h6>
              <a  href='https://t.me/jjjjjooooojjjj' class="waves-effect waves-light btn-small">Booking</a>
            </div>
          </div>
          <div className={m.block}>
            <div className={m.left}>
              <img src={img1} />
            </div>
            <div className={m.right}>
              <h6>information about rooms</h6>
              <a  href='https://t.me/jjjjjooooojjjj' class="waves-effect waves-light btn-small">Booking</a>
            </div>
          </div>
          <div className={m.block}>
            <div className={m.left}>
              <img src={img1} />
            </div>
            <div className={m.right}>
              <h6>information about rooms</h6>
              <a  href='https://t.me/jjjjjooooojjjj' class="waves-effect waves-light btn-small">Booking</a>
            </div>
          </div>
          <div className={m.block}>
            <div className={m.left}>
              <img src={img1} />
            </div>
            <div className={m.right}>
              <h6>information about rooms</h6>
              <a  href='https://t.me/jjjjjooooojjjj' class="waves-effect waves-light btn-small">Booking</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
