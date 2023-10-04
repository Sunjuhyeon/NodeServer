import React from 'react'
import eb from '../scss/eventbanner.module.css'

function EventBanner(props) {
    return (
        <section id={props.id} className={`${eb.section}`}>
            <div className={`${eb.box}`}>
                <p className={`${eb.text}`}>
                    카카오채널 친구 추가하고 <br />
                    3000원 할인쿠폰 받으러 가자!
                </p>
                <img className={`${eb.img}`} src="/img/coupon.png" alt="couponImg" />
            </div>
        </section>
    )
}

export default EventBanner
