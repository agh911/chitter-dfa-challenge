import PropTypes from 'prop-types';
import { ChatBubbleOutline, Repeat, FavoriteBorderOutlined, PublishOutlined } from '@mui/icons-material';
import './PeepCard.css'

export const PeepCard = () => {
    return (
        <div className='peep-card mt-5 pb-5 border-bottom'>
            <div className="d-flex mx-4 my-3">
                <img src="https://imgs.search.brave.com/bHpTjt49BE6IN6GPjmIm4FaNZXFj4xFH3ey8KXtPew0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw" alt="User profile image" className='user-image' />
                <div>
                    <div className="d-flex align-items-center">
                        <p className='peep-auth me-2'>Name</p>
                        <p className='username me-2'>@username</p>
                        <p className='peep-date'>• Date</p>
                    </div>
                    <p>Placeholder peep content.</p>
                </div>
            </div>
            <div className='peep-card-icons d-flex align-items-center justify-content-between mx-4'>
                <ChatBubbleOutline />
                <Repeat />
                <FavoriteBorderOutlined />
                <PublishOutlined />
            </div>
        </div>
    )
}


PeepCard.propTypes = {
    peeps: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            peepContent: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};