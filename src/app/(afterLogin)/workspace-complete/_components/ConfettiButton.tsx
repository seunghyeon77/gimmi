'use client';

import Confetti from 'react-confetti';

export default function ConfettiButton3() {
  const { width, height } = window.screen;
  console.log(width);
  return (
    <div>
      <Confetti width={width} height={height} />
    </div>
  );
}
