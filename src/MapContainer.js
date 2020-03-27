import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import data from './data.json';
import styled from 'styled-components';
import config from './config.json';

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

const MapContainer = () => {
  const [ selected, setSelected ] = useState({});
  const key = config["KEY"];

  const mapStyles = {
    width: '100%',
    height: '90vh',
  };

  const defaultCenter = {
    lat: 40.7929, lng: -77.8604
  }

  const onSelect = item => {
    setSelected(item);
    if (item.service.includes("T")) {
      item.service[selected.service.indexOf("T")] = "takeout"
    }
    if (item.service.includes("D")) {
      item.service[selected.service.indexOf("D")] = "delivery"
    }
    if (item.service.includes("C")) {
      item.service[selected.service.indexOf("C")] = "curbside"
    }
    if (item.service.includes("O")) {
      item.service[selected.service.indexOf("O")] = "online"
    }
    if (item.service.includes("DT")) {
      item.service[selected.service.indexOf("DT")] = "drive-thru"
    }
    if (item.service.includes("GR")) {
      item.service[selected.service.indexOf("GR")] = "grubhub"
    }
    if (item.service.includes("DD")) {
      item.service[item.service.indexOf("DD")] = "doordash"
    }
    if (item.service.includes("UE")) {
      item.service[item.service.indexOf("UE")] = "uber eats"
    }
    if (item.service.includes("G")) {
      item.service[selected.service.indexOf("G")] = "gift card"
    }
  }

  return (
    <>
      <div className="map">
        <LoadScript googleMapsApiKey={key}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={15}
              center={defaultCenter}
            >
            {data.content.body.map(item => {
              return (
                <Marker key={item.name} position={item.loc} onClick={() => onSelect(item)}/>
              )
              })
            }
            {selected.loc &&
              (
                <InfoWindow
                  position={selected.loc} clickable={true} onCloseClick={ () => setSelected({})}
                >
                <div className="info">
                <NameStyle><a target="_blank" rel="noopener noreferrer" href={selected.link}>{selected.name}</a></NameStyle>
                <AddressStyle>{selected.address}</AddressStyle>
                <RoundTag col={"#F5F5F5"}><PriceStyle>{selected.rating}<span role="img">⭐</span></PriceStyle></RoundTag>
                <RoundTag col={"#F5F5F5"}><PriceStyle>{selected.price}</PriceStyle></RoundTag>
                <br></br>
                  {
                    selected.service.map(str => {
                      return(
                        <RoundTag col={"#F5F5F5"}>
                        {str}
                        </RoundTag>
                      )
                    })
                  }
                </div>
                </InfoWindow>
              )
            }
            </GoogleMap>
        </LoadScript>
      </div>
    </>
  )
}

export default MapContainer;