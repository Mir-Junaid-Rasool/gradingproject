import React from 'react';
import {ArcElement, Chart} from 'chart.js';
import {Bar} from 'react-chartjs-2'; 
import {Doughnut} from 'react-chartjs-2';
import Records from "../records.json";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const ShowAnalytics = (props) => {
//compute data for Analysis 
const dataForAnalysis = (props.records.map((element)=>{
    return(element.finalGrade)
}));
let countFailed = 0;
let countPassed = 0;
let grade5to6 =0, grade6to7 =0, grade7to8=0, gradeMorethan8 = 0, less5 =0;
let AllData = Records.length;
let max = Math.max(...dataForAnalysis);
let min = Math.min(...dataForAnalysis);
dataForAnalysis.forEach((e)=>{(e<4)?countFailed++:countPassed++})
dataForAnalysis.forEach((element)=>{
    if(parseFloat(element)<5.0)
     less5++;
    if(parseFloat(element)>=5.0 && parseFloat(element)<=6.0)
     grade5to6++;
     if(parseFloat(element)>=6.0 && parseFloat(element)<=7.0)
    grade6to7++;
    if(parseFloat(element)>=7.0 && parseFloat(element)<=8.0)
    grade7to8++;
    if(parseFloat(element)>=8.0 && parseFloat(element)<=10.0)
    gradeMorethan8++;
})
    const BarChart = () => {
        Chart.register(CategoryScale);
        const data = {
            labels : ['All', 'Passed', 'Failed'],
            datasets : [
                {
                    label : ' ',
                    data : [AllData,countPassed, countFailed],
                    backgroundColor : [
                        '#0066b2',
                        'green',
                        '#ff0000'
                    ]
                }
            ]
        }
    
    
    return <Bar data={data}/>
        
    }
    const BarChart2 = () => {
        Chart.register(CategoryScale);
        const data = {
            labels : ['Max Marks', 'Minmum Marks'],
            datasets : [
                {
                    label : ' ',
                    data : [max,min],
                    backgroundColor : [
                        '#0066b2',
                        'green'
                        
                    ]
                }
            ]
        }
    
    
    return <Bar data={data}/>
        
    }
    const DoughnutChart = () => {
        const data = {
            labels : ['less than 5', '5 to 6', '6 to 7', '7 to 8 ', 'More than 8' ],
            datasets : [
                {
                    label : 'Grade Distribution',
                    data : [less5,grade5to6,grade6to7,grade7to8,gradeMorethan8],
                    backgroundColor : [
                        "red",
                        '#6d0c74',
                        '#7f78d2',
                        '#d2d0fe',
                        'green'
                    ]
                },
            
            ]
        }
    return <Doughnut data={data}/>
    } 

return (
    <>
        <div className='displayChart Bar'><BarChart /></div>
        <div className='displayChart'><DoughnutChart /></div>
        <div className='displayChart Bar'><BarChart2 /></div>
    </>
)                       
}



