import React from 'react'
import { useParams } from 'react-router'

export default function Food() {
    const path = useParams();
  return (
    <div>Food {path.id}</div>
  )
}
