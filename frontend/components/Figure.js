import React from 'react' 

export default function Figure ({imageURL, caption}) {
    return (
      <figure>
        <img src={imageURL} />
        <figcaption>Photo taken on {caption}</figcaption>
      </figure>
    )
  }