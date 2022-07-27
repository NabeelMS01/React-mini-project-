import React from 'react'
import AdminSideBar from '../../Components/AdminSideBar/AdminSideBar'
import AllUsers from '../../Components/AdminUsers/AllUsers'

function AdminUsers() {
  return (
    <div className='flex '>
      <div className=' ' >
      <AdminSideBar/>
      </div>
<div className='flex-1  mt-10  ' >
  <AllUsers />
      </div>
         

    </div>
  )
}

export default AdminUsers