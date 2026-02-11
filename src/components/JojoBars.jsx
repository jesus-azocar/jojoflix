import {useState} from "react";
import { Bar } from "react-chartjs-2";
import {randomColor} from './utilities/model.js'

import { 
  Chart as ChartJS,  
  Tooltip, 
  Legend, 
  Title ,
  CategoryScale, // <--- Obligatorio para el eje X (Categorías)
  LinearScale,   // <--- Obligatorio para el eje Y (Números)
  BarElement,    // <--- ¡Este es el "ArcElement" de las barras!
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale,BarElement, Tooltip, Legend, Title);

function JojoBars({ dailyVotes }) {
    
  const barColors = dailyVotes.map(() => randomColor(dailyVotes.length));
  const [chartData, setChartData] = useState( {
    labels: dailyVotes.map((v) => v.daily), 
    datasets: [
      { 
        data: dailyVotes.map((v) => v.totalvotes),
        backgroundColor:  barColors, 
        borderColor: "black",
        borderWidth: 2
      }
    ]
  } );
  return (
    <div className="chart-container h-80 w-full"> 
      <Bar
        data={chartData}
        options={{
        scales: {
    x: {  
      ticks: {
        color: '#FFFFFF',  
        font: {
          size: 14,          
        }
      }
    },
    y: { 
      ticks: {
        color: '#FFFFFF',  
        font: {
          size: 14
        }
      }
    }
  },
        maintainAspectRatio: false,
          plugins: {
             
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default JojoBars;