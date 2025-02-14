import React from "react";
import HomeCar from "../components/HomeCar";

// 1) APP.JSX -dan gelen COUNTER state-ini qebul edirik. Buna props deyirler.
export default function Home ({counter}) {
    return (
        <div>
            {/* 2)  HomeCar.JSX componentini cagiririq ve COUNTER state-ini props edirik HomeCar.JSX faylina */}
            <HomeCar counter={counter} />
        </div>
    )
}
