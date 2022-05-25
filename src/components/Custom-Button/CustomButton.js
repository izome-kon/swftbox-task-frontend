import React from 'react'
import { PulseLoader } from 'react-spinners'
import './CustomButton.css'
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0;
`;


const CustomButton = (props) => {
  const disabledValue = () => {
    return (props.loading === 'true' || props.disabled === 'true') ? true : ''
  }
  return (
    <button disabled={disabledValue()} onClick={props.handleOnClick} className={`btn btn-block  btn-xl d-none d-md-block mt-sm-2 mr-sm-0 ml-sm-0 ${props.outline ? "btn-outline-t-gold" : "btn-t-gold"} ${props.otherClasses}`}>
      <PulseLoader color="#ffffff" loading={props.loading} size={15} css={override} />
      {!props.loading ? props.title : ''}
    </button>
  )
}
export default CustomButton