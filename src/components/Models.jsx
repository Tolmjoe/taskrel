import React, { useEffect, useState } from "react";

const modelsData = [
    { img: "/images/cars3.jpg", name: "Aventador", model: "Aventador Ride 1.0" },
    { img: "/images/cars4.jpg", name: "Tesla", model: "Tesla Corton 7.9" },
    { img: "/images/cars5.jpg", name: "Toyota", model: "Toyota Camry 3.2" },
];

function Models() {
    const [showModels, setShowModels] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModels(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="models-page">
            <h2 className="models-title">INSPIRED BY <br/>COLORS OF NATURE</h2>

            {showModels && (
                <div className="models-grid">
                    {modelsData.map((car, index) => (
                        <div key={index} className="model-box">
                            <img src={car.img} alt={car.name} className="carm-image" />
                            <div className="carm-info">
                                <p className="carm-name">{car.name}</p>
                                <p className="carm-model">{car.model}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Models;
