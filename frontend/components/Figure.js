import React from 'react' 
import styled from 'styled-components'

const StyledImg = styled.img `
  img {
    height: 200vh;
    width: 200vw;
    margin-bottom: .5rem;
  }
`

export default function Figure ({imageURL, caption}) {
    return (
      <container>
        <figure>
          <StyledImg src={imageURL} />
          <figcaption>Photo taken on {caption}</figcaption>
        </figure>
      </container>
    )
  }