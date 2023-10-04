import React from 'react'
import abU from '../scss/aboutyoutube.module.css'


export const AboutYoutube = (props) => {
    return (
      <section id={props.id} className={`py-5`}>
          <div className={`textContent ${abU.textContent}`}>
              <p>"강력한 성능을 작은 공간에"</p>
          </div>
          <div className={`${abU.mainContent} container-lg`}>
              <div className={`youtube ${abU.youtube} order-lg-2`}>
                  <iframe 
                      src="https://www.youtube.com/embed/_-r2RPBAtKs?&loop=1&playlist=_-r2RPBAtKs&autoplay=1&mute=1&modestbranding=1&start=45&end=80&controls=0" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen
                  >
                  </iframe>
              </div>
              <div className={`${abU.script} order-lg-1`}>
                  <div className='lh-sm'>
                      <p>
                            따듯할 온(溫)+더할 가(加)+편안할 담(擔)
                      </p>
                      <p>
                            삶의 따뜻함과 편안함을 더해줄 수 있는
                      </p>
                      <p>
                            아이템을 끊임없이 연구하는 브랜드입니다
                      </p>
                  </div>
                  <a href="">아이디어 상품 더 보러가기</a>
              </div>
          </div>
      </section>
    )
}

export default AboutYoutube
