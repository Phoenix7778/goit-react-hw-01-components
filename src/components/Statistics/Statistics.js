import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
