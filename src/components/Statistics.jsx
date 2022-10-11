import propTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}</p>
    </>
  );
};

Statistics.propTypes = {
    good: propTypes.number,
    neutral: propTypes.number,
    bad: propTypes.number,
    total: propTypes.number,
    positivePercentage: propTypes.string,
}
