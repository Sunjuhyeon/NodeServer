import React from 'react'
import FormBtn from '../buttonComponent/FormButton'
import TopBtn from '../buttonComponent/TopButton'

function Button(props) {
  return (
    <section id={props.id}>
        <FormBtn id="formbtn"></FormBtn>
        <TopBtn id="topbtn"></TopBtn>
    </section>
  )
}

export default Button