import React, { useState, useEffect } from 'react'
import abI from '../scss/aboutinsta.module.css'

import axios from 'axios'

function Instar(props) {
    const popupData = props.num;

    const [instadetail, instadetailUpdate] = useState([]);


    const dataSetting = async (tn) => {
        axios.get('/data', { params: { tablenm: tn } }
        )
            .then(
                (result) => {
                    try {
                        console.log(result)
                        instadetailUpdate([...result.data]);

                    }
                    catch (err) { console.log("result 타입 확인할것 : " + err.message + "/" + typeof result) }
                }
            )
            .catch(e => { console.log(e + "이유로 통신이 불안전함") })
    }
    useEffect(() => {
        dataSetting("ongadam_detailInsta");
    }, [])
    //인스타 모든 테이블을 가져왔다.

    return (
        <div className='popup'>
            <div className={`${abI.windowbg}`}></div>
            <div className={`${abI.popup}`}>
                <div className='poprel position-relative py-3 py-sm-5 px-sm-5 h-100'>
                    <div className={`popupclose ${abI.close}`} onClick={props.closePopup}></div>
                    <div className={`${abI.popupbox} d-lg-flex justify-content-center align-items-center`}>
                        <div className={`popupleft`}>
                            {
                                instadetail.map((v, i) => {
                                    if (v.i_id === popupData) {
                                        return (
                                            <div key={`popup${i}`} className={`${abI.popupImg}`}>
                                                <img src={v.src} alt={v.i_id} />
                                            </div>
                                        )
                                    }

                                })
                            }
                        </div>
                        <div className={`popupright ${abI.popupright} ps-5`}>
                            <div className={`${abI.popuptop}`}>
                                <p className={`${abI.popkeyword}`}>KEYWORD</p>
                                <div className={`${abI.poptext}`}>
                                    <span>@ongadam_official</span>
                                    {
                                        instadetail.map((v, i) => {
                                            if (v.i_id === popupData){
                                            return(
                                                <p key={`title${i}`}>{v.title}</p>
                                            )
                                            }
                                        })
                                    }
                                </div>
                                <div className={`${abI.pophash}`}>
                                    {
                                        instadetail.map((v, i) => {
                                            return(
                                                <p key={`hash${i}`}>{v.hash}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={`${abI.popupbottom}`}>
                                <p className={`${abI.goshoptitle}`}>상품보러가기</p>
                                {
                                    instadetail.map((v, i) => {
                                        if (v.i_id === popupData) {
                                        return(
                                            <>
                                                <div key={`detail${i}`}>
                                                    <a href="">
                                                        <img src={v.productimg} alt="product" />
                                                    </a>
                                                </div>
                                                <div className={`${abI.goshopname}`}>
                                                    <a href="">
                                                        <p>{v.product}</p>
                                                        <strong>{v.price}</strong>
                                                    </a>
                                                </div>
                                            </>
                                        )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Instar