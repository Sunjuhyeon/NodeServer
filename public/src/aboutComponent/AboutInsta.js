import React, { useState, useEffect } from 'react'
import abI from '../scss/aboutinsta.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

import Instar from './Instar';

import axios from 'axios'

export const AboutInsta = (props) => {
    const [showpopup, setShowpopup] = useState(-1);

    const openPopup = (index) => {
        setShowpopup(index);
    };

    const closePopup = () => {
        setShowpopup(-1);
    }

    // 데이터연동
    const [insta, instaUpdate] = useState([]);

    const dataSetting = async (tn) => {
        axios.get('/data', { params: { tablenm: tn } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        instaUpdate([...result.data]);
                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }
    useEffect(() => {
        dataSetting("ongadam_insta");
    }, [])

    return (
        <section id={props.id} className={`${abI.sectionbg} position-relative`}>
            <div className='sectioncontainer container-lg'>
                <div className={`${abI.title} d-sm-flex`}>
                    <p className={`${abI.maintitle} pb-1 pb-sm-0`}>INSTAGRAM</p>
                    <p className={`${abI.titlename} ms-sm-2`}>@ongadam_official</p>
                </div>
                <div>
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={0}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="mySwiper"
                    >
                        {
                            insta.map((v, i) => {
                                return (
                                    <SwiperSlide key={`sns${i}`} onClick={() => setShowpopup(v.i_id)}>
                                        <div className={`${abI.hoverbg} hoverbg`}>
                                            <img src={v.src} alt={v.alt} />
                                            <div className={`instatext`}>
                                                <span>@ongadam_official</span>
                                                <span>click Me!</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    {showpopup > -1 && (
                        <Instar 
                        className={`${abI.headpop}`} 
                        info={props.info.contentsdb.about.aboutInsta} 
                        num={showpopup}
                        closePopup={closePopup}
                        id="pop"
                        >
                        </Instar>
                        )}
                </div>
            </div>
        </section>
    )
}

export default AboutInsta