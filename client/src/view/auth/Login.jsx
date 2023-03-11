import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import InputForm from '../../components/general/InputForm'
import '../styles/Login.css'
import CustomButton from '../../components/general/CustomButton'
import { useFormik } from 'formik'
import { LoginValidate } from '../../helper/validate'
import { Toaster } from "react-hot-toast"
import { LoginAction } from '../../actions/LoginAction'
import Loader from '../../components/general/CustomeLoader'

const Login = () => {
  const history = useNavigate()
  const [isLoading ,setLoading] = useState(false)
  const formik = useFormik({
      initialValues : {
        email: '',
        password: ''  
      },
      validate: LoginValidate,
      validateOnBlur:true,
      validateOnChange:false,
      onSubmit : async values => {
        if(values.email === '' && values.password === '') {
          setLoading(isLoading)
        }
        else {
          setTimeout(() => {
            setLoading(!isLoading)
          },5000)
          console.log(values)
          LoginAction(values,history);  
        } 
      }
    }
  )
  return (
    <>
        <div className='container flex sm:flex-row flex-col h-screen'>
            <div className="sideview">
              <h3 className='sideview-text-logo text-white'>Alvative</h3>
              <p className='sideview-logo-sub'>Payment API</p>
            </div>
            <Toaster position='bottom-right' reverseOrder={false}></Toaster>

            <form onSubmit={formik.handleSubmit} className='login flex-col gap-6'>
              <div className='w-full flex items-center justify-center'>
                <InputForm 
                  type="email" 
                  id="email" 
                  name="email" 
                  onChange={formik.handleChange} 
                  label="Email Address" 
                  {...formik.getFieldProps('email')} 
                />
               
              </div>

              <div className='w-full flex items-center  justify-center'>
                <InputForm 
                  type="password" 
                  password="password" 
                  name="password" 
                  onChange={formik.handleChange} 
                  label="Password" 
                  {...formik.getFieldProps('password')} 
                />
              </div>

              <div className='w-full flex items-center justify-center'>
                <CustomButton disabled={!formik.isValid} type="submit" title={!isLoading ? 'Login' : <Loader />} />
              </div>
            </form>
        </div>
    </>
  )
}

export default Login