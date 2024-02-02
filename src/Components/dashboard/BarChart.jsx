import React, {  useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    // Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  import { Filler } from "chart.js";

ChartJS.register(Filler);
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    // Legend
  );
  export const options = {
    "scaleShowGridLines" : false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },

    },
    scales: {
        x:{
            grid:{
                drawOnChartArea:false,
            }
        },
        y:{
            ticks: {
                display: false
            },
    
            grid:{
                display:false,
                drawOnChartArea:false,
            }
        }
    }
  };
  

  let labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  export const data = {
    labels,
    datasets: [
      {
        label: 'Hours',
        data: labels.map(() => faker.datatype.number({ min: 1, max: 12 })),
        backgroundColor: '#B692F6',
      },
    ],
  };
const BarChart = () => {
  const [isWeek,setIsWeek] = useState(true);

  return (
    <div  className="w-[550px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md">
        <div className='flex flex-col px-2 py-3 gap-x-4'>
            <div className='flex w-full justify-between space-x-4 px-2 mb-3'>
                <p className='text-[#828282] text-lg font-normal uppercase'>Online Statics</p>
                <div className='text-sm font-normal space-x-2 rounded-2xl bg-[#fff] shadow-[rgba(0, 0, 0, 0.25)] opacity-70'>
                    <button className={  isWeek?"bg-[#828282] px-3 py-1 text-[#fff]":"bg-[#fff] px-3 py-1"}
                     onClick={() => setIsWeek(true)}>
                        Week
                    </button>
                    <button className={  !isWeek?"bg-[#828282] px-3 py-1 text-[#fff]":"bg-[#fff] px-3 py-1"}
                    onClick={() => setIsWeek(false)}>
                        Month
                    </button>
                </div>
            </div>

            <div className=''>
              <Bar options={options} data={data} />
            </div>
        </div>
      

    </div>
  )
}

export default BarChart