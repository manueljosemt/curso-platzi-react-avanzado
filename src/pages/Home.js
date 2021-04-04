import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({categoryId}) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='con petgram puedes encontrar fotos de animales domesticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId}/>
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
