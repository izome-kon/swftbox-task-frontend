import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { CustomButton, CustomInput, IconButton } from '../../components'
import { saveSVG } from '../../hooks/saveSVG'
import ServerSettings from '../../server.setting'
import ShareButtons from '../Share-Buttons/ShareButtons'
import './FormResult.css'
const FormResult = (props) => {
  const shortUrl = ServerSettings.appUrl + '/' + props.data.shortPath
  const [showQR, setshowQR] = useState(false)
  // on click Shorten another button 
  const handleOnClickReset = () => {
    props.resetData()
  }

  const handelOnClickMyURLs = () => props.sliderRef.current.clickOpen()

  // on click QR Code
  const handleOnClickQRCode = () => {
    setshowQR(!showQR)
  }
  return (
    <>
      <CustomInput title="Your Long URL" icon="fas fa-link" disabled="true" value={props.data.fullUrl} />
      <div className="app__mt-2">
        <CustomInput icon="fas fa-magic" title="Short URL" disabled="true" value={shortUrl} />
      </div>
      <div className="mt-5 w-100 d-inline-flex justify-content-between flex-fill mb-1 ">
        <ShareButtons shortUrl={shortUrl} setShowQrCode={handleOnClickQRCode} />
      </div>
      <div className={`text-center app__mt-3 qrcode-section ${showQR ? '' : 'qrcode-section-hidden'}`}>
        <QRCode level="L" value={shortUrl} size={130}></QRCode>
        <div className="app__ml-2 qrcode-col">
          <IconButton icon="fas fa-cloud-download-alt" onClick={saveSVG} title="Download" />
        </div>
      </div>
      <div className="app__mt-3 w-100 d-inline-flex justify-content-between flex-fill mb-1 ">
        <CustomButton handleOnClick={handelOnClickMyURLs} loading={false} title="My URLs" outline="true" otherClasses="app__mr-2 app__ml-2" />
        <CustomButton handleOnClick={handleOnClickReset} loading={false} title="Shorten another" otherClasses="app__ml-2 app__mr-2" />
      </div>
    </>
  )
}
export default FormResult
