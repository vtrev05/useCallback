import React from 'react'

const DeleteUser = React.memo(({deleteUser}) => {
    console.log('deleteUser component rendered')
  return (
    <div>
        <button onClick={deleteUser}>Delete User</button>
    </div>
  )
})

export default DeleteUser