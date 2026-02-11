import {useState} from "react";
import { Pie } from "react-chartjs-2";
import {randomColor} from './utilities/model.js'

import { 
  Chart as ChartJS, 
  ArcElement, // <--- ¡ESTE ES EL QUE TE FALTABA!
  Tooltip, 
  Legend, 
  Title 
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function JojoPie({ starsDist }) {
  const pieColors = starsDist.map(() => randomColor(starsDist.length));
  const [chartData, setChartData] = useState( {
    labels: starsDist.map((v) => v.stars+' stars'), 
    datasets: [
      { 
        data: starsDist.map((v) => v.totalvotes),
        backgroundColor:   pieColors, 
        borderColor: "black",
        borderWidth: 2
      }
    ]
  } );
  return (
    <div className="chart-container h-80 w-full"> 
      <Pie
        data={chartData}
        options={{
          maintainAspectRatio: false,
          plugins: {
             legend: {
      labels: {
        color: 'white', // Para que resalte en el fondo oscuro
        font: {
          size: 16,
          weight: '400'
        },
        padding: 20 // Espacio entre los cuadritos de colores
      }
    }
          }
        }}
      />
    </div>
  );
}
export default JojoPie;