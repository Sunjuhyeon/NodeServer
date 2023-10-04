import React, { useEffect, useState } from 'react'
import re from '../scss/review.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode, Mousewheel } from 'swiper/modules';

import axios from 'axios'



function Review(props) {
    const [review, reviewUpdate] = useState([]);
    const [reviewcheckbox, reviewcheckboxUpdate] = useState([]);

    const dataSetting = async (tn) => {
        axios.get('/data', { params: { tablenm: tn } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        reviewUpdate([...result.data]);
                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }

    const reviewdataSetting = async (tn) => {
        axios.get('/data', { params: { tablenm: tn } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        reviewcheckboxUpdate([...result.data]);
                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }
    useEffect(() => {
        dataSetting("ongadam_reviewList");
        reviewdataSetting("ongadam_reviewCheckbox");
    },[])

    return (
        <section id={props.id} className={` ${re.section}`}>
            <div className='px-lg-0 d-flex flex-column flex-lg-row justify-content-lg-between'>
                <div className={`${re.merit} col-lg-5 pb-lg-0`}>
                    <div className={`${re.mTitle}`}>
                        <p className={`mb-0`}>고객 구매 만족도</p>
                        <div className={`d-flex`}>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={`${re.meritlist}`}>
                        {
                            reviewcheckbox.map((v, i) => {
                                return (
                                    <div key={`check${i}`}>
                                        <img src={v.src} alt="checkbox" />
                                        <span>{v.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`${re.review} col`}>
                    <div className={`${re.rTitle}`}>
                        <p>real review</p>
                        <span>써본 사람들의 진짜 리뷰</span>
                    </div>
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            type: 'progressbar',
                        }}
                        slidesPerView={'auto'}
                        freeMode={true}
                        mousewheel={{
                            releaseOnEdges: "true"
                        }}
                        modules={[Pagination, FreeMode, Mousewheel]}
                        className={`mySwiper ${re.swiper}`}
                        breakpoints={{
                            991: {
                                mousewheel:{
                                    releaseOnEdges:false
                                }
                            }
                        }}
                    >
                        {
                            review.map((v, i) => {
                                return (
                                    <SwiperSlide key={`review${i}`} className={`${re.swiperslide}`}>
                                        <div className={`${re.reviewbox}`}>
                                            <div className={`${re.hd}`}>
                                                <div>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                    <i class="bi bi-star-fill"></i>
                                                </div>
                                                <div>
                                                    <span>{v.name}</span>
                                                </div>
                                            </div>
                                            <div className={`${re.body} d-flex`}>
                                                <img src={v.src} alt="review" />
                                                <div className={`${re.txt} ms-sm-3`}>
                                                    {
                                                        v.re.split("<br>").map((val, idx) => {
                                                            return (
                                                                <p key={`br${idx}`} className={`re${idx}`}>{val}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })

                        }

                    </Swiper>
                </div>

            </div>

        </section>
    )
}

export default Review