function Total({ parts }) {
  return (
    <p>
      Total number of exercises:{" "}
      {parts.reduce((acc, item) => acc + item.exercises, 0)}
    </p>
  );
}

export default Total;
