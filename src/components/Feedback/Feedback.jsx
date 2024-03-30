const Feedback = ({ reviews, totalFeedback, positiveRate }) => {
  return (
    <ul>
      <li>Good: {reviews.good}</li>
      <li>Neutral: {reviews.neutral}</li>
      <li>Bad: {reviews.bad}</li>
      <li>total: {totalFeedback}</li>
      <li>Positive: {positiveRate} %</li>
    </ul>
  );
};

export default Feedback;
