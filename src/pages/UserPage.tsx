import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserPage = () => {
  const { id } = useParams();
  const { fetchUser } = useActions();
  const { user } = useTypedSelector(state => state.user);

  useEffect(() => {
    fetchUser(id!)
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <>
      <div>UserPage is working!!</div>
      <div>userId is {id}</div>
    </>
  )
}

export { UserPage }