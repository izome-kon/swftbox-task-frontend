import React from 'react'
import { toast } from 'react-toastify';
import { IconButton } from '../../components'

function ShareButtons(props) {

  // on click Copy button 
  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(props.shortUrl);
    toast.success('Copied to clipboard!')
  }
  // on click Open URL button 
  const handleOnClickOpenUrl = () => {
    window.open(props.shortUrl, '_blank')
  }
  // on click Send to Mail 
  const handleOnClickSendMail = () => {
    window.open(`mailto:?subject=Share swiftbox ShortURL &body=${props.shortUrl}`)
  }

  return (
    <>
      <IconButton onClick={handleOnClickCopy} icon="fa fa-copy fa-lg fa-fw" title="Copy" />
      <IconButton onClick={handleOnClickOpenUrl} icon="fa fa-share" title="Open URL" />
      <IconButton onClick={handleOnClickSendMail} icon="fa fa-envelope fa-lg fa-fw" title="Send to mail" />
      <IconButton onClick={props.setShowQrCode} icon="fa fa-qrcode fa-lg fa-fw" title="QR Code" />
    </>
  )
}

export default ShareButtons