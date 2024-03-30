import css from "./Feedback.module.css";
const Feedback = ({ reviews, totalFeedback, positiveRate }) => {
  return (
    <ul className={css.list}>
      <li className={css.reviewItem}>Good: {reviews.good}</li>
      <li className={css.reviewItem}>Neutral: {reviews.neutral}</li>
      <li className={css.reviewItem}>Bad: {reviews.bad}</li>
      <li className={css.reviewItemTotal}>total: {totalFeedback}</li>
      <li className={css.reviewItemPos}>Positive: {positiveRate} %</li>
    </ul>
  );
};

export default Feedback;
