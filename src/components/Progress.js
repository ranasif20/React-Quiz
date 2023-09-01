import React from 'react';

function Progress({ index, numQuestions, points, maxPosibblePoints, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Quesiton <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>
          {points} / {maxPosibblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
