import React from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {
  const { id } = useParams();

  return (
    <>
      <div>UserPage is working!!</div>
      <div>userId is {id}</div>
    </>
  )
}

export { UserPage }