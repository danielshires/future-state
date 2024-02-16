import { useState, useEffect } from 'react';

const Timer = () => {
  const retirementDate = new Date('August 12, 2067').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime();
    const timeDifference = retirementDate - currentTime;

    if (timeDifference > 0) {
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }

    return 'Retirement time reached!';
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div className='text-4xl md:text-6xl font-mono '>{timeRemaining}</div>;
};

export default Timer;
