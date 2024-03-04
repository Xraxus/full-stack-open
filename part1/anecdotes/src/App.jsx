import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  function getMostVotes() {
    if (JSON.stringify(votes) === "{}") return "no votes yet";
    const voteEntries = Object.entries(votes);
    let max = voteEntries[0];

    for (const [key, value] of voteEntries) {
      if (value >= max[1]) max = [key, value];
    }

    return (
      <>
        <p>{anecdotes[max[0]]}</p>
        <p>has {max[1]} votes</p>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected] || "no"} votes</p>
        <button
          onClick={() => {
            setVotes({ ...votes, [selected]: votes[selected] + 1 || 1 });
          }}
        >
          vote
        </button>
        <button
          onClick={() => {
            setSelected(Math.floor(Math.random() * anecdotes.length));
          }}
        >
          another anecdote
        </button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {getMostVotes()}
      </div>
    </>
  );
};

export default App;
