import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { useCookies } from 'react-cookie'
import { URLItem } from '../../components'
import IconButton from '../../components/Icon-Button/IconButton'
import './BottomSideBar.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { Player } from '@lottiefiles/react-lottie-player'
TimeAgo.addDefaultLocale(en)
const BottomSideBar = forwardRef((props, ref) => {
  const [close, setClose] = useState(true)
  const [cookies] = useCookies(['urls']);

  useImperativeHandle(ref, () => ({
    clickOpen() {
      handelOnOpen()
    }
  }))
  const handelOnClose = () => {
    setClose(true)
  }
  const handelOnOpen = () => {
    setClose(false)
  }
  return (
    <div className={`bottom-bar ${close ? 'hide-bottom-bar' : ''}`}>
      <div className="bar-title">
        <h3>Your recent ShortURLs</h3>
        <IconButton onClick={handelOnClose} classes="bar-close-btn" icon="fas fa-times"></IconButton>
      </div>
      {!cookies.urls &&
        <div className='not-found-section'>
          <Player style={{ height: '300px', width: '100%' }} autoplay loop src="https://assets7.lottiefiles.com/packages/lf20_dmw3t0vg.json" />
          <h3> No recent URLs in your history </h3>
          <IconButton onClick={handelOnClose} title="ADD SOME URLs" icon="fas fa-plus-square" classes="app__mt-3"></IconButton>
        </div>
      }
      {cookies.urls &&
        <div className='bar-body'>
          {cookies.urls.map(
            (item) => <URLItem key={item.shortPath} urlData={item} />
          )}
        </div>
      }
    </div>
  )
})

export default BottomSideBar