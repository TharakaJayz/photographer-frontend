import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

interface Props {
    children:React.ReactNode
}

const AdminLayout = (props: Props) => {
    return (
        <div className='relative w-full min-h-vh100 flex justify-start items-start'>
            <AdminSideBar />
            {props.children}
            
        </div>
    )
}

export default AdminLayout
