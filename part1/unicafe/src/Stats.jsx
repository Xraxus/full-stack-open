export default function Stats({ reviews, isFeedbackGathered }) {
  const total = reviews.good + reviews.neutral + reviews.bad;
  const average = ((reviews.good - reviews.bad) / total).toFixed(2);
  const positive = ((reviews.good / total) * 100).toFixed(2);

  return (
    // <>
    //   <h2>statistics</h2>
    //   {isFeedbackGathered ? (
    //     <>
    //       <ul>
    //         <li>Good: {reviews.good}</li>
    //         <li>Neutral: {reviews.neutral}</li>
    //         <li>Bad: {reviews.bad}</li>
    //       </ul>
    //       <hr />
    //       <ul>
    //         <li>All: {total}</li>
    //         <li>Average: {average}</li>
    //         <li>Positive: {positive} %</li>
    //       </ul>
    //     </>
    //   ) : (
    //     <p>No feedback given</p>
    //   )}
    // </>

    <table>
      <thead>
        <tr>
          <th>Statistics</th>
        </tr>
      </thead>
      <tbody>
        {isFeedbackGathered ? (
          <>
            <StatisticLine text={"Good"} value={reviews.good} />
            <StatisticLine text={"Neutral"} value={reviews.neutral} />
            <StatisticLine text={"Bad"} value={reviews.bad} />
            <StatisticLine text={"All"} value={total} />
            <StatisticLine text={"Average"} value={average} />
            <StatisticLine text={"Positive"} value={positive} suffix="%" />
          </>
        ) : (
          <tr>No feedback given</tr>
        )}
      </tbody>
    </table>
  );
}

function StatisticLine({ text, value, suffix = "" }) {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {suffix}
      </td>
    </tr>
  );
}
