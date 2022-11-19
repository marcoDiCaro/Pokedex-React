import React from "react";

//Template statistiche del pokemon
function statsTemplate(stat, index){

    const statStyle = {
        width: stat.base_stat + "%"
    }

    return (
        <div key={index}>
            <p className="stat-name">{stat.stat.name}</p>
            <div className="bar">
                <div className="blu-bar" style={statStyle}></div>
            </div>
        </div>
    )
}

function StatsPokemon({stats}) {
    return stats.map( (stat, index) => statsTemplate(stat, index))
}

export default StatsPokemon;