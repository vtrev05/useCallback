import React, { useState, useCallback, useEffect } from 'react'

const UserDetail = ({userId}) => {
const BASE_URL = 'https://peticiones.online/api/users/'

const [user, setUser] = useState({})
const [input, setInput] = useState('Víctor')

const getUser = useCallback(async () => {
    const response = await fetch(BASE_URL + userId)
    const json = await response.json();
    console.log(json)
    setUser(json)
}, [userId])

useEffect(()=> {
    getUser()
}, [getUser])





  return (
    <div>
        <p>{user.first_name}</p>
        <p>{user.last_name}</p>
        <p>{user.username}</p>
        <input value={input} onChange={(e)=> setInput(e.target.value)}/>
    </div>
  )
}

export default UserDetail