import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utilities/getRandomHexColor';
import {
  Container,
  Title,
  ItemList,
  Item,
  ItemName,
  ItemA,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <ItemList>
        {stats.map(item => (
          <Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
            <ItemName>{item.label}</ItemName>
            <ItemA>{item.percentage}%</ItemA>
          </Item>
        ))}
      </ItemList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
