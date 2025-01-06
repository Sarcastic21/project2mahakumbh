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
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Countdown to Mahakumbh 2025
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-4xl font-bold">{timeLeft.days}</span>
            <span className="text-sm">Days</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-4xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-4xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-4xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
