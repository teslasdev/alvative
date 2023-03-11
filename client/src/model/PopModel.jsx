import React, { useEffect, useState } from 'react'
import CustomButton from '../components/general/CustomButton'
import InputForm from '../components/general/InputForm'

const PopModel = () => {
  return (
    <div className='bg-white h-[300px] rounded-md p-4 transition-all'>
        <h3 className='text-primary text-[1rem] font-bold text-center'>Add Money</h3>
        <form action="" className='mt-6'>
            <div className='mt-5'>
                <InputForm type="text"  placeholder='Enter Amount'/>
            </div>
            <div className='mt-6'>
                <CustomButton type="submit" title="Add Money"/>
            </div>
        </form>
    </div>
  )
}

export default PopModel