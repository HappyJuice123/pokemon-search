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

export function StatChartCompare({ pokemonOne, pokemonTwo }) {
  const pokemonStatNames = pokemonOne.stats.map((stat) => {
    return stat.stat.name.toUpperCase();
  });

  const pokemonStats = pokemonOne.stats.map((stat) => {
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

  //pokemontwo

  const pokemonTwoStats = pokemonTwo.stats.map((stat) => {
    return stat.base_stat;
  });

  const pokemonTwoStatsFormatted = [
    pokemonTwoStats[0],
    pokemonTwoStats[1],
    pokemonTwoStats[2],
    pokemonTwoStats[5],
    pokemonTwoStats[4],
    pokemonTwoStats[3],
  ];

  const data = {
    labels: pokemonStatNamesFormatted,
    datasets: [
      {
        label: pokemonOne.name[0].toUpperCase() + pokemonOne.name.slice(1),
        data: pokemonStatsFormatted,
        backgroundColor: "#af949e45",
        borderColor: "#af949e",
        borderWidth: 1.5,
      },
      {
        label: pokemonTwo.name[0].toUpperCase() + pokemonTwo.name.slice(1),
        data: pokemonTwoStatsFormatted,
        backgroundColor: "#af949e90",
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
