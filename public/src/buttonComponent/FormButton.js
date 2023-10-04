import React, { useRef } from 'react'
import fbtn from '../scss/formbutton.module.css'
import Form from '../component/Form'

function FormButton(props) {
  return (
    <div>
      <div id={props.id}>
          <a href='#form' className={`${fbtn.formbutton} formbutton nav-link`}>
          </a>
      </div>
    </div>
  )
}

export default FormButton