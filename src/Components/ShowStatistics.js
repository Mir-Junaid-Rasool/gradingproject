import React from "react";
import './style.css';

export  const ShowStatistics = (props)=>{ 
// computing show statistics data
let total = 0;
let count1 =0;
let count2 =0;
let count3 =0;
let count4 =0;
let lessThan5 =0;
const finalGrade = (props.records.map((element)=>{
    return(element.finalGrade)
}));

let totalStudents = props.records.length;
let max = Math.max(...finalGrade);
let min = Math.min(...finalGrade);
finalGrade.forEach((e)=>{(total+=Number(e))})
let average = (total/totalStudents).toPrecision(2) ;


finalGrade.forEach((element)=>{
    if(parseFloat(element)<5.0)
     lessThan5++;
    if(parseFloat(element)>=5.0 && parseFloat(element)<=6.0)
     count1++;
     if(parseFloat(element)>=6.0 && parseFloat(element)<=7.0)
    count2++;
    if(parseFloat(element)>=7.0 && parseFloat(element)<=8.0)
    count3++;
    if(parseFloat(element)>=8.0 && parseFloat(element)<=10.0)
    count4++;
})

//end of show statistics data 
    return(
        <><table id="Stats">
            <tbody>
                <tr><th>Status</th><th>Count</th></tr>
                <tr><td>{props.buttonClicked} Students</td><td>{totalStudents}</td></tr>
                <tr><td>Average of {props.buttonClicked} :</td><td>{average}</td></tr>
                <tr><td>Max of{props.buttonClicked} :</td><td>{max}</td></tr>
                <tr><td>Min of {props.buttonClicked} :</td><td>{min}</td></tr>
                <tr><td>Final-Grade 0-5:</td><td>{lessThan5}</td></tr>
                <tr><td>Final-Grade 5-6:</td><td>{count1}</td></tr>
                <tr><td>Final-Grade:6-7</td><td>{count2}</td></tr>
                <tr><td>Final-Grade: 7-8</td><td>{count3}</td></tr>
                <tr><td>Final-Grade: More than 8</td><td>{count4}</td></tr>
            </tbody>
        </table> </>
        
)

}
