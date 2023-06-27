import { useState } from 'react'
import {useForm} from 'react-hook-form'
import { api } from '../api/URLApi';


export const URLForm = () => {
  const { register, handleSubmit } = useForm({});
  const [originalURL, setOriginalURL] = useState()
  const [shortURL, setShortURL] = useState()
  const [copied, setCopied] = useState(false)
  

  function callAPI (data) {
    api.get('shorten', {params: {url: data.url}}).then((res) => {
      setOriginalURL(data.url)
      setShortURL(res.data.result.short_link)
    }).catch((error) => {
      console.log(error)
    })
    clear()
  }

  function copyURL() {
    navigator.clipboard.writeText(shortURL)
    setCopied(true)
  }

  function clear() {
    document.querySelector('.form-control').reset()
  }

  return (
    <section className='url-form-section | padding-block-700'>
      <div className="container">
        <div className="form-wrapper">
          <form className='form-control' onSubmit={handleSubmit(callAPI)}>
            <input type="text" {...register("url", { required: true })} placeholder='Shorten a link here...' />
            <button type='submit' className='button'>Shorten It!</button>
          </form>
        </div>
      </div>
      <div className="container">
        <ul className='result-list'>
          {shortURL != null && <li><p>{originalURL}</p> <p>{shortURL}<button className='button' onClick={copyURL}>{copied ? 'Copied!' : 'Copy'}</button></p></li>}
        </ul>
      </div>
    </section>
  )
}
