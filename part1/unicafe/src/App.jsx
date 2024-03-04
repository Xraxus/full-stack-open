import { useState } from "react";

export default function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });

  return (
    <>
      <FeedbackPanel setReviews={setReviews} />
      <Stats reviews={reviews} />
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

function Stats({ reviews }) {
  return (
    <>
      <h2>statistics</h2>
      <ul>
        <li>Good: {reviews.good}</li>
        <li>Neutral: {reviews.neutral}</li>
        <li>Bad: {reviews.bad}</li>
      </ul>
    </>
  );
}
