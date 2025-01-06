import React from 'react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date('2025-01-14') - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-8">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl font-bold text-center mb-6">
      Countdown to Mahakumbh 2025
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-md mx-auto text-center">
      <div className="bg-white/10 rounded-md p-3">
        <span className="block text-3xl font-bold">{timeLeft.days}</span>
        <span className="text-xs">Days</span>
      </div>
      <div className="bg-white/10 rounded-md p-3">
        <span className="block text-3xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs">Hours</span>
      </div>
      <div className="bg-white/10 rounded-md p-3">
        <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xs">Minutes</span>
      </div>
      <div className="bg-white/10 rounded-md p-3">
        <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xs">Seconds</span>
      </div>
    </div>
  </div>
</div>

  );
}
