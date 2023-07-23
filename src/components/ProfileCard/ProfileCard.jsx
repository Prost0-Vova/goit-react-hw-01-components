import user from '../../data/user.json'
import PropTypes from 'prop-types';
import {Container,
        Description,
        Avatar,
        Img,
        Pname,
        Ptag,
        Plocation,
        Stats,
        Item,
        ItemName,
        ItemNum,
        } from './ProfileCard.styled';


export const Profile = () => {
return(
 <Container>
 <Description>
  <Avatar>
    <Img src={user.avatar}
      alt="User avatar">
    </Img>
  </Avatar>
  <Pname>
  {user.username}
  </Pname>
  <Ptag>
  @{user.tag}
  </Ptag>
  <Plocation>
  {user.location}
  </Plocation>
 </Description>
 <Stats>
  <Item>
   <ItemName>
    Followers
   </ItemName>
   <ItemNum>{user.stats.followers}</ItemNum>
  </Item>
  <Item>
   <ItemName>
    Views
   </ItemName>
   <ItemNum>{user.stats.views}</ItemNum>
  </Item>
  <Item>
   <ItemName>
    Likes
   </ItemName>
   <ItemNum>{user.stats.likes}</ItemNum>
  </Item>
 </Stats>

 </Container>
)};



Profile.propTypes = {
username: PropTypes.string,
avatar: PropTypes.string,
location: PropTypes.string,
tag: PropTypes.string,
statistics:PropTypes.shape(
    {
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }
)
};
export default Profile;