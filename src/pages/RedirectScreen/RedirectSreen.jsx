import React, { useLayoutEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useGetShortUrlMutation } from '../../services/shortUrlApi'

function RedirectSreen(props) {
  const params = useParams()
  const navigate = useNavigate();
  const [getShortUrl] = useGetShortUrlMutation()

  useLayoutEffect(() => {
    console.log('params.shortUrl', params.shortPath)
    getShortUrl({ shortPath: params.shortPath }).then(res => {
      if (res.error) {
        toast.error(res.error.data.message)
        navigate('/')
      }
      window.location = res.data.data.fullUrl
      console.log(res)
    })
  }, [params, getShortUrl, navigate])
  return (
    <></>
  )
}

export default RedirectSreen