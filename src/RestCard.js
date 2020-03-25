import React, {useState} from 'react';
import styled from 'styled-components';

const NameStyle = styled.h3`
  color: #4F4F4F;
`

const AddressStyle = styled.div`
`

const PriceStyle = styled.div`
  font-family: Roboto, Arial, sans-serif;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.25rem;
`

const RoundTag = styled.span` 
  border-radius: 2em;
  align-items: center;
  background-color: ${({ col }) => col};
  display: inline-flex;
  justify-content: center;
  line-height: 1.5rem;
  padding-left: .5em;
  padding-right: .5em;
  white-space: nowrap;
  margin-bottom: .35rem;
  margin-right: .35rem;
`

const RestCard = props => {
  const {name, address, price, rating, link, service} = props

  if (service.includes("T")) {
    service[service.indexOf("T")] = "takeout"
  }
  if (service.includes("D")) {
    service[service.indexOf("D")] = "delivery"
  }
  if (service.includes("C")) {
    service[service.indexOf("C")] = "curbside"
  }
  if (service.includes("DT")) {
    service[service.indexOf("DT")] = "drive-thru"
  }
  if (service.includes("GR")) {
    service[service.indexOf("GR")] = "grubhub"
  }
  if (service.includes("G")) {
    service[service.indexOf("G")] = "gift card"
  }

  return (
    <>
      <div className="card">
        <NameStyle><a href={link}>{name}</a></NameStyle>
        <AddressStyle>{address}</AddressStyle>
        <RoundTag col={"#F5F5F5"}><PriceStyle>{rating}<span role="img">⭐</span></PriceStyle></RoundTag>
        <RoundTag col={"#F5F5F5"}><PriceStyle>{price}</PriceStyle></RoundTag>
        <br></br>
        {
          service.map(str => {
            return(
              <RoundTag col={"#F5F5F5"}>
              {str}
              </RoundTag>
            )
          })
        }
      </div>
    </>
  )
}

export default RestCard;