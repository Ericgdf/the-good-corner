import React from 'react'

export type AdcardsProps = {
    title :string
    imgUrl : string
    price : number
    link : string
}

const AdCards = ({title, imgUrl, price, link} :AdcardsProps) => {
  return (
    <div className="ad-card-container">
    <a className="ad-card-link" href={link}>
      <img className="ad-card-image" src={imgUrl} />
      <div className="ad-card-text">
        <div className="ad-card-title">{title}</div>
        <div className="ad-card-price">{price}€</div>
      </div>
    </a>
  </div>
  )
}

export default AdCards 