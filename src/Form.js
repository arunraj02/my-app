import React, { useState } from "react";
import { useForm } from "react-hook-form"

function Form(){

    const {register,handleSubmit,formState:{errors}}=useForm()

    const [data,setData]=useState("")
      console.log(errors);
    return(
        <div>
            <h1>Reach Hook Form</h1>
            <form onSubmit={handleSubmit((data)=>{
                setData(JSON.stringify(data))
                //console.log(data);
            })}>
                <input   {...register('name',{required:"Name is Required",minLength:{
                    value:8,
                    message:"min password length should be 8"
                }})} type="text" placeholder="Enter your Name"/>

                {errors.name && <span>{errors.name.message}</span>}
                <input   {...register('psw',{required:"Password is Required"})}type="password" placeholder="Enter your password"/>

                {errors.psw && <span>{errors.psw.message}</span>}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form;