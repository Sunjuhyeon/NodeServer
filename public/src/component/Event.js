import React, { useState, useEffect } from 'react'
import e from '../scss/event.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import axios from 'axios'


function Event(props) {
    const [event, eventUpdate] = useState([]);

    const dataSetting = async (tn) => {
        axios.get('/data', { params: { tablenm: tn } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        eventUpdate([...result.data]);
                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }
    useEffect(() => {
        dataSetting("ongadam_event");
    }, [])

  return (
    <section id={props.id} className={`${e.section}`}>
        <div className={`${e.titlename}`}>
            <p>이벤트 소식</p>
        </div>
        <Swiper 
        pagination={{
            type: 'fraction',
        }}
        navigation={true}
        slidesPerView={1.2}
        spaceBetween={10}
        centeredSlides={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
            576:{
                slidesPerView: 1.5,
                centeredSlides: true,
            },
            768: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }}
        className={`mySwiper ${e.eventbox} container-lg d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center`}>
            {
                  event.map((v, i) => {
                    return(
                        <SwiperSlide className={`col-md-4`} key={`event${i}`}>
                            <li className={`${e.eventlist} d-sm-flex align-itmes-center`}>
                                <div className='eventbigbox'>
                                    <div className='position-relative'>
                                        <div className={`${v.imgcls}`}>
                                            <a href=""></a>
                                        </div>
                                        <div className='eventmore'>
                                            <a href="">
                                                <p>더 알아보기</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${e.textbox}`}>
                                        <div className={`${e.textbigbox}`}>
                                            {v.title.split("<br>").map((br, i) => {
                                                const emSplit = br.split("<em>");
                                                return (
                                                    <p key={`br${i}`} className={"title" + i}>
                                                        {emSplit.map((v, idx) => {
                                                            if (idx % 2 === 0) {
                                                                return v; // 짝수 인덱스는 <strong> 태그 외의 텍스트
                                                            } else {
                                                                return <em key={idx}>{v}</em>; // 홀수 인덱스는 <strong> 태그 내부의 텍스트
                                                            }
                                                        })}
                                                    </p>
                                                );
                            
                            })}
                                        </div>
                                    </div>
                                </div>
                                
                            </li>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Event