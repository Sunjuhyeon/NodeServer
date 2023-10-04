import React, { useState, useEffect } from 'react'
import ab from '../scss/abouthd.module.css'

import axios from 'axios'


function AboutHd(props) {
    const [abouthd, abouthdUpdate] = useState([]);

    const dataSetting = async (tn) => {
        axios.get('/data', { params: { tablenm: tn } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        abouthdUpdate([...result.data]);
                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }
    useEffect(() => {
        dataSetting("ongadam_about");
    }, [])
    return (
        <section id={props.id} className={`${ab.section}`}>
            <div>
                <div data-aos="fade-up"
                     data-aos-duration="1000" 
                     className={`${ab.sentence1} d-md-flex justify-content-center align-items-end`}
                >
                    <span>온가담,</span>
                    <p className={`mb-0`}>&nbsp;&nbsp;삶의 따듯함과 편안함을 더해줍니다.</p>
                </div>
            </div>
            <ul className={`${ab.aboutUsCard} py-md-5 py-3 d-md-flex justify-content-center container-lg`}>
                {
                    abouthd.map((v, i) => {
                        return (
                            <div key={`about${i}`} className='col-lg-4'>
                                <li>
                                    <div className={`${ab.AUcard} d-flex flex-md-column`}>
                                        <img src={v.src} alt="" />
                                        <div className={`${ab.aboutSentence} ps-3 ps-md-0`}>
                                            <p className={`${ab.cardTopic}`}>{v.cardTopic}</p>
                                            <p className={`${ab.cardName}`}>{v.cardName}</p>
                                            <div className={`${ab.cardcontent0cls}`}>
                                                {v.cardContent0.split("<br>").map((v, i) => {
                                                    const spanSplit = v.split("<span>");
                                                    return (
                                                        <p key={i} className={`${ab.cardContent}`}>
                                                            {spanSplit.map((val, idx) => {
                                                                if (idx % 2 === 0) {
                                                                    return val;
                                                                } else {
                                                                    return <span key={idx}>{val}</span>
                                                                }
                                                            })}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                            <div className={`${ab.cardcontent1cls}`}>
                                                {v.cardContent1.split("<br>").map((v, i) => {
                                                    const spanSplit = v.split("<span>");
                                                    return (
                                                        <p key={i}>
                                                            {spanSplit.map((val, idx) => {
                                                                if (idx % 2 === 0) {
                                                                    return val;
                                                                } else {
                                                                    return <span key={idx}>{val}</span>
                                                                }
                                                            })}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
            <div className={`${ab.sentence2} sentence2`}>
                <div className={`${ab.title} pe-md-5`}>
                    <p>온가담의<br /> <em className='ms-md-4'>유통시스템</em></p>
                </div>
                <div className={`${ab.content}`}>
                    <p>온가담은 생산부터 판매 이후까지 <br className={`${ab.moblieBr}`}/> 모두 직접 관리하여 <br /><em>불필요한 유통 마진을 제거</em>합니다.</p>
                    <a className={`${ab.direct}`} href="">
                        <span>유통과정 보러가기</span>
                        <img src="/img/icon_arrowblack.png" alt="arrow" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutHd