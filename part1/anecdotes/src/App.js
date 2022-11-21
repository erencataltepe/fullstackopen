import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const handleNextQuoteClick = () => {
    const nextQuoteIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextQuoteIndex);
  };

  const getMostVoted = (votes) => {
    let maxVote = -1;
    let mostVotedAnectode = anecdotes[0];

    for (const [key, value] of Object.entries(votes)) {
      if (value > maxVote) {
        mostVotedAnectode = anecdotes[key];
        maxVote = value;
      }
    }

    return mostVotedAnectode;
  };

  const handleVoteClick = () => {
    let newVotes = {};
    if (votes.hasOwnProperty(selected)) {
      newVotes = { ...votes, [selected]: votes[selected] + 1 };
    } else {
      newVotes = { ...votes, [selected]: 1 };
    }

    setVotes(newVotes);
  };

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <div>{anecdotes[selected]}</div>
      <div>Has {votes[selected] || 0} votes</div>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextQuoteClick}>Get Random Quote</button>
      <Header text={"Anecdote with most votes"} />
      <div>{getMostVoted(votes)}</div>
    </div>
  );
};

export default App;
