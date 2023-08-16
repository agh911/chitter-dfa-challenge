import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from '@mui/icons-material';
import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <div className='sidebar mx-5 mt-3'>
            <div className='mb-5'>
                <div className='logo mb-3'>
                    <Twitter />
                </div>
                <a className='d-flex mb-2 sidebar-active nav-link' href='/'>
                    <Home />
                    <p className='ms-3'>Home</p>
                </a>
                <div className='d-flex mb-2'>
                    <Search />
                    <p className='ms-3'>Explore</p>
                </div>
                <div className='d-flex mb-2'>
                    <NotificationsNone />
                    <p className='ms-3'>Notifications</p>
                </div>
                <div className='d-flex mb-2'>
                    <MailOutline />
                    <p className='ms-3'>Messages</p>
                </div>
                <div className='d-flex mb-2'>
                    <BookmarkBorder />
                    <p className='ms-3'>Bookmarks</p>
                </div>
                <div className='d-flex mb-2'>
                    <ListAlt />
                    <p className='ms-3'>Lists</p>
                </div>
                <div className='d-flex mb-2'>
                    <PermIdentity />
                    <p className='ms-3'>Profile</p>
                </div>
                <div className='d-flex mb-2'>
                    <MoreHoriz />
                    <p className='ms-3'>More</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='peep-button my-5'>
                        Peep
                    </button>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center mt-5 pb-5'>
                <div className='d-flex align-items-center pt-5'>
                    <img src="https://imgs.search.brave.com/bHpTjt49BE6IN6GPjmIm4FaNZXFj4xFH3ey8KXtPew0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" alt="User profile image" className='user-image' />
                    <div>
                        <p className='mb-0'>Name</p>
                        <p className='username mb-0'>@username</p>
                    </div>
                </div>
                <div>
                    <MoreHoriz />
                </div>
            </div>
        </div>
    )
}
