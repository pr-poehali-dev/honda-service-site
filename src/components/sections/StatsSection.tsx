import { useEffect, useState } from "react";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    years: 0,
    specialists: 0,
    warranty: 0
  });

  const finalValues = {
    clients: 5000,
    years: 15,
    specialists: 12,
    warranty: 12
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        clients: Math.floor(finalValues.clients * progress),
        years: Math.floor(finalValues.years * progress),
        specialists: Math.floor(finalValues.specialists * progress),
        warranty: Math.floor(finalValues.warranty * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.clients.toLocaleString()}+
            </div>
            <div className="text-lg md:text-xl opacity-90">
              Довольных клиентов
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.years}+
            </div>
            <div className="text-lg md:text-xl opacity-90">
              Лет на рынке
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.specialists}
            </div>
            <div className="text-lg md:text-xl opacity-90">
              Специалистов
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              {counts.warranty}
            </div>
            <div className="text-lg md:text-xl opacity-90">
              Месяцев гарантии
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
