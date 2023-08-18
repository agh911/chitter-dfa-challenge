import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search, Twitter } from '@mui/icons-material';
import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <div className='sidebar me-5 mt-3'>
            <div className='mb-5'>
                <div className='logo mb-4 ps-3'>
                    <Twitter />
                </div>
                <a className='d-flex align-items-center mb-2 py-2 ps-3 sidebar-active sn-item nav-link' href='/'>
                    <Home />
                    <p className='ms-3 mb-0'>Home</p>
                </a>
                <div className='d-flex align-items-center mb-2 py-2 ps-3 sn-item'>
                    <Search />
                    <p className='ms-3 mb-0'>Explore</p>
                </div>
                <div className='d-flex align-items-center mb-2 py-2 ps-3 sn-item'>
                    <NotificationsNone />
                    <p className='ms-3 mb-0'>Notifications</p>
                </div>
                <div className='d-flex align-items-center mb-2 py-2 ps-3 sn-item'>
                    <MailOutline />
                    <p className='ms-3 mb-0'>Messages</p>
                </div>
                <div className='d-flex align-items-center mb-2 py-2 ps-3 sn-item'>
                    <BookmarkBorder />
                    <p className='ms-3 mb-0'>Bookmarks</p>
                </div>
                <div className='d-flex align-items-center mb-2 py-2 ps-3 sn-item'>
                    <ListAlt />
                    <p className='ms-3 mb-0'>Lists</p>
                </div>
                <div className='d-flex align-items-center mb-2 py-2 ps-3 sn-item'>
                    <PermIdentity />
                    <p className='ms-3 mb-0'>Profile</p>
                </div>
                <div className='d-flex align-items-center mb-2 py-2 ps-3 sn-item'>
                    <MoreHoriz />
                    <p className='ms-3 mb-0'>More</p>
                </div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <a href="/signin">
                    <button className='sign-in-button mb-3'>
                        Sign In
                    </button>
                </a>
                <p className='font-bold font-small'>OR</p>
                <a href="/signup">
                    <button className='sign-up-button'>

                        Sign Up
                    </button>
                </a>
            </div>
        </div>
    )
}
