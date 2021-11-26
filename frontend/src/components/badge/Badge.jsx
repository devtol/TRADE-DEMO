import React from 'react'
import * as s from './Badge.styles'

const Badge = ({grade}) => {
  return (
    <s.BadgeContainer>
      <s.Badge>{grade}</s.Badge>
    </s.BadgeContainer>
  )
}

export default Badge
