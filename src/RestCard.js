import React, {useState} from 'react';
import styled from 'styled-components';
import MapContainer from './MapContainer';

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
  margin-top: .35rem;
  margin-right: .35rem;
`

const colors = {
  takeout: "#FFE6D8",
  delivery: "#CDE5FB",
  curbside: "#D3EDF3",
  "drive-thru": "#FFDEB2",
  online: "#D5CEF5",
  grubhub: "#E3EAB8",
  doordash: "#FFBBB4",
  "uber eats": "#D7F5D7",
  "gift card": "#FBD8F1",
  "N/A": "#F5F5F5"
}

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
  if (service.includes("O")) {
    service[service.indexOf("O")] = "online"
  }
  if (service.includes("GR")) {
    service[service.indexOf("GR")] = "grubhub"
  }
  if (service.includes("DD")) {
    service[service.indexOf("DD")] = "doordash"
  }
  if (service.includes("UE")) {
    service[service.indexOf("UE")] = "uber eats"
  }
  if (service.includes("G")) {
    service[service.indexOf("G")] = "gift card"
  }

  return (
    <>
      <div className="card">
        <NameStyle><a className="link" target="_blank" rel="noopener noreferrer" href={link}>{name}</a></NameStyle>
        <AddressStyle>{address}</AddressStyle>
        <RoundTag col={"#F5F5F5"}><PriceStyle>{rating}<span role="img">⭐</span></PriceStyle></RoundTag>
        <RoundTag col={"#F5F5F5"}><PriceStyle>{price}</PriceStyle></RoundTag>
        <br></br>
        {
          service.map(str => {
            return(
              <RoundTag col={colors[str]}>
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