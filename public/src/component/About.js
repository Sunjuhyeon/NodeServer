import React from 'react'

import AboutHd from '../aboutComponent/AboutHd'
import AboutYoutube from '../aboutComponent/AboutYoutube'
import AboutInsta from '../aboutComponent/AboutInsta'

function About(props) {
  return (
    <section id={props.id}>
        <AboutHd info={props.info} id="abouthd"></AboutHd>
        <AboutYoutube info={props.info} id="aboutyoutube"></AboutYoutube>
        <AboutInsta info={props.info} id="aboutinsta"></AboutInsta>
    </section>
  )
}
export default About