import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({data}) => {
  
  if (data.loading) return null
  
  return (
    <ul>
      {
        data.photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)
      }
    </ul>
  )
}