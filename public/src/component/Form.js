import React, { useEffect } from 'react'
import form from '../scss/form.module.css'
import { useForm, useFieldArray, Controller } from "react-hook-form";

function Form(props) {
    const { 
        register, 
        handleSubmit,
        reset,
        setError,
        formState,
        formState:{isSubmitting, errors, isSubmitSuccessful},
    } = useForm({ defaultValues: { name:"", num:"", date:"" }});
    const onSubmit = data =>  alert(`안녕하세요. ${data.name}님! 성공적으로 전송되었습니다!!`);

    React.useEffect(() => {
        if(formState.isSubmitSuccessful){
            reset({name:"", num:"", date:""});
        }
    }, [formState, isSubmitSuccessful, reset])

    useEffect(() => {
        let errorMessage = "";

        if (errors.name){
            errorMessage += errors.name.message;
        }
        if (errors.num){
            errorMessage += errors.num.message;
        }
        if (errors.date){
            errorMessage += errors.date.message;
        }

        if (errorMessage !== ""){
            alert(`${errorMessage}를 입력해주세요`);
        }
    })

  return (
    <section id={props.id} className={`${form.sectionbg}`}>
        <div className={`subtop ${form.subtop}`}>
            <p>자세한 이벤트 내용 <em>확인하러가기</em></p>
            <a href="" className={`${form.subtopbtn}`}>
                <span>GO</span>
                <div className='arrow'></div>
            </a>
        </div>
        <div className={`${form.title}`}>
            <p className={`${form.subtitle}`}>남양주 인기카페 라온숨X온가담 콜라보 이벤트</p>
            <p className={`${form.maintitle}`}>소형스타일러 무료체험 예약하고 <br /> 커피 공짜로 먹자!!</p>
        </div>
        <form 
        method='GET'
        action='/server'
        onSubmit={handleSubmit(onSubmit)}
        className={`${form.formBox} d-flex flex-column flex-sm-row position-relative`}
        >
            <div className={`${form.mainform}`}>
                <div className={`col-12`}>
                    <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    {...register("name", {
                        required:"성함,"
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    className={`col-5`}
                    />
                    <input
                    type="tel"
                    name="num"
                    placeholder="연락처"
                    {...register("num", {
                        required: "연락처,"
                    })}
                    aria-invalid={errors.num ? "true" : "false"}
                    className={`col-7`}
                    />
                </div>
                <input
                type="date"
                name="date"
                placeholder="방문날짜"
                className={`w-100 col-12`}
                {...register("date", {
                    required: "방문날짜"
                })}
                aria-invalid={errors.date ? "true" : "false"}
                />
            </div>
            <input 
                type="submit" 
                value="신청" 
                disabled={isSubmitting}
                className={`${form.submitbtn}`}
            />
            <div className={`${form.notice}`}>
                <p>*체험은 1인에 한번으로 제한됩니다.</p>
            </div>
        </form>
    </section>
  )
}

export default Form