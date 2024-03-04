export default function FeedbackPanel({ setReviews }) {
  function handleClick(category) {
    setReviews((prevReviews) => {
      return { ...prevReviews, [category]: prevReviews[category] + 1 };
    });
  }

  return (
    <>
      <h2>Give feedback</h2>
      <Button name="good" onClick={() => handleClick("good")} />
      <Button name="neutral" onClick={() => handleClick("neutral")} />
      <Button name="bad" onClick={() => handleClick("bad")} />
    </>
  );
}

function Button({ name, onClick }) {
  return <button onClick={onClick}>{name}</button>;
}
