import React, { useRef, useState } from 'react'
import { BottomSideBar } from '../../components'
import { FormResult, FormURL, Header } from '../../containers'
import './HomeScreen.css'

export const HomeScreen = () => {
  const [data, setData] = useState(null)
  const sliderRef = useRef(null)
  const handelResult = (data) => {
    console.log('data:==>', data)
    setData(data)
  }
  
  const resetData = () => {
    setData(null)
  }
  return (
    <>
      <div className="app__container">
        <Header />
        <div className="app__card card-shorten-url">
          {data?.status === true ? (<FormResult sliderRef={sliderRef} resetData={resetData} data={data.data} />) : (<FormURL sliderRef={sliderRef} handelResult={handelResult} />)}
        </div>
      </div>
      <BottomSideBar ref={sliderRef} />
    </>
  )
}
