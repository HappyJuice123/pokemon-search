import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function StatChart({ pokemon }) {
  const pokemonStatNames = pokemon.stats.map((stat) => {
    return stat.stat.name.toUpperCase();
  });

  const pokemonStats = pokemon.stats.map((stat) => {
    return stat.base_stat;
  });

  const pokemonStatNamesFormatted = [
    pokemonStatNames[0],
    pokemonStatNames[1],
    pokemonStatNames[2],
    pokemonStatNames[5],
    "SP. DEF",
    "SP. ATK",
  ];

  const pokemonStatsFormatted = [
    pokemonStats[0],
    pokemonStats[1],
    pokemonStats[2],
    pokemonStats[5],
    pokemonStats[4],
    pokemonStats[3],
  ];

  const data = {
    labels: pokemonStatNamesFormatted,
    datasets: [
      {
        label: "Pokemon Stats",
        data: pokemonStatsFormatted,
        backgroundColor: "#af949e50",
        borderColor: "#af949e",
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div id="radar-chart">
      <Radar data={data} options={options} />
    </div>
  );
}
