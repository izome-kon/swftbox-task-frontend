import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import ReactTimeAgo from 'react-time-ago'

import { toast } from 'react-toastify'
import ShareButtons from '../../containers/Share-Buttons/ShareButtons'
import { saveSVG } from '../../hooks/saveSVG'
import ServerSettings from '../../server.setting'
import { useGetShortUrlStatisticMutation } from '../../services/shortUrlApi'

import IconButton from '../Icon-Button/IconButton'
import VisitorsCharts from '../VisitorsChart/VisitorsCharts'
import './URLItem.css'

const URLItem = (props) => {
  const favIcon = `https://www.google.com/s2/favicons?sz=64&domain=${props.urlData.fullUrl}`
  const shortUrl = ServerSettings.appUrl + '/' + props.urlData.shortPath
  const [showQR, setshowQR] = useState(false)
  const [getShortUrlStatistic] = useGetShortUrlStatisticMutation()
  const [statistic, setStatistic] = useState(null)
  const handleOnClickQRCode = () => {
    setshowQR(!showQR)
  }
  const handleStatisticsClick = () => {
    if (statistic !== null) {
      setStatistic(null); return
    }
    getShortUrlStatistic(props.urlData.shortPath).then(res => {
      if (res.error) {
        toast.error('Somthing Wrong..!')
        console.log(res.error)
        return
      }
      setStatistic(res.data.data.visitors)
    })
  }
  return (
    <div className="url-list-item">
      <div className="d-flex">
        <div className="app__mr-2">
          <img src={favIcon} alt="url logo" className="url-logo" />
        </div>
        <div className="flex-fill">
          <div>
            <div className="url-title">
              {shortUrl}
            </div>
            <div className='short-url-2'>
              {props.urlData.fullUrl}
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="flex-fill align-self-center">
                <small className="text-muted text-right flex-shrink-0">
                  <ReactTimeAgo date={props.urlData.date} locale="en-US" />
                </small>
              </div>
              <div className='item-btns'>
                <ShareButtons setShowQrCode={handleOnClickQRCode} shortUrl={shortUrl} />
                <IconButton onClick={handleStatisticsClick} title="Statistics" icon="fas fa-chart-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`text-center app__mt-3 qrcode-section ${showQR ? '' : 'qrcode-section-hidden'}`}>
        <QRCode level="L" value={shortUrl} size={130}></QRCode>
        <div className="app__ml-2 qrcode-col">
          <IconButton icon="fas fa-cloud-download-alt" onClick={saveSVG} title="Download" />
        </div>
      </div>
      <div className={`text-center app__mt-3 chart-section `}>
        {statistic && <VisitorsCharts statistics={statistic} />}
      </div>
    </div>
  )
}

export default URLItem