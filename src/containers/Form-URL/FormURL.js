import React, { useState } from 'react'
import { CustomButton, CustomInput, } from '../../components'
import { usePostShortUrlMutation } from '../../services/shortUrlApi'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import './FormURL.css'
import { useCookies } from 'react-cookie';
const FormURL = (props) => {
  const [fullUrl, setfullUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [cookies, setCookie] = useCookies();

  const [postShortUrlMutation] = usePostShortUrlMutation();
  const handelInputChange = e => setfullUrl(e.target.value)
  const handleOnClick = async () => {
    if (!validURL(fullUrl)) {
      toast.error('Please Enter Valid URL')
      return
    }

    setLoading(true)
    await postShortUrlMutation({ "fullUrl": fullUrl }).then(res => {
      setLoading(false)
      if (res.error) {
        toast.error('Please Enter Valid URL')
        return
      }
      if (!cookies.urls)
        setCookie('urls', [res.data.data])
      else
        setCookie('urls', [res.data.data].concat(cookies.urls))

      props.handelResult(res.data)
    })
  }

  const handelOnClickMyURLs = () => props.sliderRef.current.clickOpen()
  return (
    <>
      <CustomInput onChangeValue={handelInputChange} title="Enter a long URL to make a Short URL" />
      <div className="mt-5">
        <CustomButton disabled={fullUrl.length === 0 ? 'true' : ''} loading={loading} handleOnClick={handleOnClick} title="Make Short URL!" />
        <CustomButton handleOnClick={handelOnClickMyURLs} loading={false} title="My URLs" outline="true" otherClasses="app__mt-2 " />
      </div>
    </>
  )
}
export default FormURL

export const validURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}