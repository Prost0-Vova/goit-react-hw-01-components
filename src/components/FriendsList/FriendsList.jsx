import PropTypes from 'prop-types';

import { Container,
    FriendsList,
         FriendsListItem,
         StatusItem,
         AvatarImg,
         Pname,} from './FriendsList.styled';


export const Friends = ({friends}) => {
return(
    <Container>
<FriendsList>
{friends.map(friend => (
   <FriendsListItem
   key={friend.id}
   >
    <StatusItem status={friend.isOnline}></StatusItem>
    <AvatarImg src={friend.avatar} alt="User avatar">

    </AvatarImg>
    <Pname>{friend.name}</Pname>


   </FriendsListItem>
))}
</FriendsList>
</Container>
)};


Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.string.isRequired,
        })
    )
};

export default Friends;