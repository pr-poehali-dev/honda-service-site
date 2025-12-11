import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endOfDecember = new Date('2024-12-31T23:59:59');
      const now = new Date();
      const difference = endOfDecember.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-red-600 text-white py-4 px-6 rounded-2xl shadow-2xl">
      <div className="text-center mb-3">
        <p className="text-sm font-semibold uppercase tracking-wider mb-1">
          ⏰ Акция заканчивается через:
        </p>
      </div>
      <div className="flex justify-center gap-3 md:gap-6">
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
            <div className="text-2xl md:text-4xl font-bold tabular-nums">
              {timeLeft.days}
            </div>
          </div>
          <div className="text-xs md:text-sm mt-1 font-medium">дней</div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
            <div className="text-2xl md:text-4xl font-bold tabular-nums">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs md:text-sm mt-1 font-medium">часов</div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
            <div className="text-2xl md:text-4xl font-bold tabular-nums">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs md:text-sm mt-1 font-medium">минут</div>
        </div>
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
            <div className="text-2xl md:text-4xl font-bold tabular-nums">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs md:text-sm mt-1 font-medium">секунд</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
