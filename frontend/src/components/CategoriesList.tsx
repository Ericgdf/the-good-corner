import { title } from 'process'
import React from 'react'

export type CategoriesListProps = {
    href : string,
    title : string
}

const CategoriesList = ({href, title} : CategoriesListProps ) => {
  return (
    <div><a href={href} className="category-navigation-link">{title}</a> •</div>
  )
}

export default CategoriesList