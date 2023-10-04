import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import main from '../scss/slide.module.css'

import axios from 'axios'

function Slide(props) {
    const [slide, slideUpdate] = useState([]);

    const dataSetting = async () => {
        axios.get('/data', { params: { tablenm: "ongadam_mainslide" } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        slideUpdate([...result.data]);
                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }
    useEffect(() => {
        dataSetting();
    }, [])
    return (
        <section id={props.id}>
            <Swiper
                navigation={true}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                loopedSlides={2}
                spaceBetween={0}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    650: {
                        slidesPerView: 1.3
                    }
                    , 1400: {
                        slidesPerView: 1.2
                    }
                }}

                modules={[Autoplay, Navigation]}
                className={`mySwiper`}
            >
                {
                    slide.map((v, i) => {
                        return (
                            <SwiperSlide key={v.m_id} className={`${main.swiperslide}`}>
                                <a href={v.link} className={`${v.backgroundcls}`}>
                                    <div className={`${main.textbox}`}>
                                        <div className='categorybox'>
                                            <span className={`${main.category}`}>{v.category}</span>
                                        </div>
                                        <div className='titlebox'>
                                            <p className={`mb-0 ${v.titlecls} ${main.title}`}>
                                                {
                                                    v.title.split("<em>").map((em, idx) => {
                                                        if (idx % 2 === 0) {
                                                            return em
                                                        } else {
                                                            return <em key={idx}>{em}</em>
                                                        }
                                                    })
                                                }
                                            </p>
                                            <p className={`mb-0 ${main.subtitle}`}>{v.subtitle}</p>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Slide;