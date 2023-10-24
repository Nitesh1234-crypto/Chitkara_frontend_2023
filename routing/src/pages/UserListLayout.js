import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const UserListLayout = () => {
  return (
    <div>
      <Link to="/users/1">User 1</Link> <br />
      <Link to="/users/2">User 2</Link> <br />
      <Link to ="/users/newuser" >New User</Link>
      <Outlet />
    </div>
  )
}

export default UserListLayout
