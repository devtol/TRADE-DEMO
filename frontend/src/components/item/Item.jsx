import React from 'react'
import * as s from './Item.styles'

const Item = ({item}) => {
  return (
    <s.Item>
      {item.name}
    </s.Item>
  )
}

export default Item
