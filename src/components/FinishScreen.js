import React from 'react';

function FinishScreen({
  points,
  maxPosibblePoints,
  highscore,
  dispatch,
  restart,
}) {
  const precentage = (points / maxPosibblePoints) * 100;

  let emoji;
  if (precentage === 100) emoji = '🎖';
  if (precentage >= 80 && precentage < 100) emoji = '🎉';

  return (
    <>
      <p className='result'>
        You scored <span>{emoji}</span> <strong>{points}</strong> out of{' '}
        {maxPosibblePoints} ({Math.ceil(precentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>

      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
