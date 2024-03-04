import { useState } from "react";
import FeedbackPanel from "./FeedbackPanel";
import Stats from "./Stats";

export default function App() {
  const [reviews, setReviews] = useState({ good: 0, neutral: 0, bad: 0 });
  const isFeedbackGathered = Boolean(
    reviews.good || reviews.neutral || reviews.bad
  );

  return (
    <>
      <FeedbackPanel setReviews={setReviews} />
      <hr></hr>
      <Stats reviews={reviews} isFeedbackGathered={isFeedbackGathered} />
    </>
  );
}
