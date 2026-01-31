import { useEffect, useState } from "react";

const BAg = () => {
    const [stars, setStars] = useState([]);
    const [met , setMet] = useState([]);

    useEffect(() => {
        genStars();
        genmet()
    }, []);

    const genStars = () => {
        const numStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };
    const genmet = () => {
        const nummet = 8
        const newmet = [];

        for (let i = 0; i < nummet; i++) {
            newmet.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMet(newmet);
    };

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle " style={
                    {
                        width : star.size + "px",
                        height : star.size + "px",
                        left : star.x + "%",
                        top : star.y + "%",
                        opacity : star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }
                }/>
            ))}
            {met.map((met) => (
                <div key={met.id} className="meteor animate-meteor " style={
                    {
                        width : met.size + 50 + "px",
                        height : met.size   + "px",
                        left : met.x + "%",
                        top : met.y + "%",
                        animationDelay : met.delay,
                        animationDuration: met.animationDuration + "s",
                    }
                }/>
            ))}

        </div>
    )
}
export default BAg