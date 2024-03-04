import { useState } from "react";

export default function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });
  const isFeedbackGathered = Boolean(
    reviews.good || reviews.neutral || reviews.bad
  );

  return (
    <>
      <FeedbackPanel setReviews={setReviews} />
      <Stats reviews={reviews} isFeedbackGathered={isFeedbackGathered} />
    </>
  );
}

function FeedbackPanel({ setReviews }) {
  function handleClick(category) {
    setReviews((prevReviews) => {
      return { ...prevReviews, [category]: prevReviews[category] + 1 };
    });
  }

  return (
    <>
      <h2>Give feedback</h2>
      <button onClick={() => handleClick("good")}>good</button>
      <button onClick={() => handleClick("neutral")}>neutral</button>
      <button onClick={() => handleClick("bad")}>bad</button>
    </>
  );
}

function Stats({ reviews, isFeedbackGathered }) {
  const total = reviews.good + reviews.neutral + reviews.bad;
  const average = (reviews.good - reviews.bad) / total;
  const positive = (reviews.good / total) * 100;

  return (
    <>
      <h2>statistics</h2>
      {isFeedbackGathered ? (
        <>
          <ul>
            <li>Good: {reviews.good}</li>
            <li>Neutral: {reviews.neutral}</li>
            <li>Bad: {reviews.bad}</li>
          </ul>
          <hr />
          <ul>
            <li>All: {total}</li>
            <li>Average: {average}</li>
            <li>Positive: {positive} %</li>
          </ul>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
}
