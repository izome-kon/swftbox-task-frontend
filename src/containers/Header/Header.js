import React from 'react'
import { Brand } from '../../components'
import './Header.css'
const Header = () => {
  return (
    <div className="app__text_center">
      <Brand />
      <h3 className="title"> Welcome to Swftbox ShortURL</h3>
      <div className="app__row app__mt-3 app__mb-3">
        <div className="app__col-6">
          <p className="feature"> <i className="fas fa-check-circle red-color app__mr-2"></i> Easy Link Shortening</p>
        </div>
        <div className="app__col-6">
          <p className="feature"> <i className="fas fa-check-circle red-color app__mr-2"></i> Full Link History</p>
        </div>
      </div>
    </div>
  )
}

export default Header