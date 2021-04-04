import React, {Fragment, useEffect, useState} from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

    useEffect(function () {
    setLoading(true)
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories').then(res => res.json()).then(response => {
      setCategories(response)
      setLoading(false)
    })
  }, [])

  return {categories, loading}
}

const ListOfCategoriesComponent = () => {
  const {categories, loading} = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading'><Category/></Item> :
        categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrolllY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)