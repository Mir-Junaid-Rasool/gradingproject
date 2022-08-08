import React, {useState} from "react";
import Records from "../records.json";
import { ShowStatistics } from "./ShowStatistics";
import {ShowAnalytics} from './ShowAnalytics';

export const CreateTable = ()=>{
// Filter Data Based on pass fail and all

 let [data,setData] = useState(Records);
 const [order,setOrder] = useState("Asc")
 const [searchTerm,setSearchTerm] =useState("")
 const [sortlabel,setSortLabel] =useState("A-Z")
 const [sortLabelNum,setSortLabelNum] = useState("1-10")
 const [buttonClicked,setButtonClicked] =useState("All")
 const [show,setShow] = useState(false);

 const PassedData=()=>{ 
    setData(Records.filter(data=>(data.status ==="passed")));
    setButtonClicked("Passed")
    }
 const FailedData=()=>{ 
    setData(Records.filter(data=>data.status==="failed"));
    setButtonClicked("Failed")
    }
 const DisplayData=()=>{ 
    setData(Records); 
    setButtonClicked("All")
    } 

//Sort data from A to z and 1 to 100 based on col Name and final Grade

const sortByName = ()=>{
  if(order==='Asc'){
    data.sort((a,b)=>{
        if(a.name.toLowerCase()<b.name.toLowerCase())
        return -1;
        if(a.name.toLowerCase()>b.name.toLowerCase()){
        return 1;}
        return 0;
    })
    setOrder("Dsc");
    setSortLabel("Z-A")
}
if(order==="Dsc"){
    data.sort((a,b)=>{
        if(a.name.toLowerCase()>b.name.toLowerCase())
        return -1;
        if(a.name.toLowerCase()<b.name.toLowerCase()){
        return 1;}
        return 0;
    })
    setOrder("Asc");
    setSortLabel("A-Z")
}}
const sortByFinalGrade =()=>{
    if(order ==="Asc"){
        data.sort((a,b)=>{
            if(a.finalGrade<b.finalGrade)
            return -1;
            if(a.finalGrade>b.finalGrade){
                return 1;
            }
            return 0;
        })
        setOrder("Dsc");
        setSortLabelNum("10-1")
    }
    if(order ==="Dsc"){
        data.sort((a,b)=>{
            if(a.finalGrade>b.finalGrade)
            return -1;
            if(a.finalGrade<b.finalGrade){
                return 1;
            }
            return 0;
        })
        setOrder("Asc"); 
        setSortLabelNum("1-10")
}
}
//End Sort data from A to z and 1 to 100 based on col Name and final Grade

//Creating details Popup
const [popup, setPopup] = useState(false);
const [details, setDetails] = useState({})
const toggleModal = (record) => {
    setPopup(!popup);
    setDetails(record);
}

if(popup) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
//End of Popup

//coloring rows on click
const handlerRowClicked = (e) => {
    if(e.target.name !== "details"){
        e.target.parentElement.classList.toggle('clicked-class');
        e.target.parentElement.style.background =(e.target.parentElement.style.background==="#0079d09e")?
        ('#0079d09e') : ('white')
    }   
};


//download json file 
const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }
  const exportToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(Records),
      fileName: 'Gradebook.json',
      fileType: 'text/json',
    })
  }
  //End download json file 
 return (   <>
            <div id = "topButtons">
            <button onClick={DisplayData} className="top-buttons">All</button>
            <button onClick={PassedData} className="top-buttons" name="passed">Passed</button>
            <button onClick={FailedData} className="top-buttons" name="Failed">Failed</button>
            <button className='sort' onClick={sortByName}>{sortlabel}</button>
            <button className='sort' onClick={sortByFinalGrade}>{sortLabelNum}</button>
            <input type= "text" placeholder="Search By Name" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
            <button onClick={exportToJson} className="top-buttons download" >Download </button>
            </div>
            <div id="table-scroll">
            <table className='table'>
            <tbody className="table-cell">
                <tr><th>No</th><th>Name</th><th>Ticket Number</th>
                    <th>Rating Grade</th><th>Exam Grade</th><th>Final Grade</th>
                    <th>Status</th><th>Details</th></tr>
                {data.filter((val) => {
                    if(searchTerm === ""){
                        return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                    return 0;
                }).map((record,i) => {
                    return (
                        <tr key={record.id}
                        className= ''
                        onClick={(e) => handlerRowClicked(e)}>
                            <td>{i+1}</td>
                            <td className="details-name">{record.name}</td>
                            <td>{record.ticketNumber}</td>
                            <td>{record.ratingGrade}</td>
                            <td>{record.examGrade}</td>
                            <td>{record.finalGrade}</td>
                            <td>{record.status}</td>
                            <td><button name="details" onClick={()=>{toggleModal(record)}} className="btn-modal" >Details</button></td></tr>
                    );
                })}
                {popup && ( <tr className="modal">
                            <td className="overlay"></td>
                             <td className="modal-content">
                              <h2>Details</h2>
                                    <div className="details-content">
                                    <li> Name : {details.name}</li>
                                    <li> fullName : {details.fullName}</li>
                                    <li> Ticket Number : {details.ticketNumber}</li>
                                    <li> Rating Grade : {details.ratingGrade}</li>
                                    <li> Exam Grade : {details.examGrade}</li>
                                    <li> Final Grade : {details.finalGrade}</li>
                                    <li> Status : {details.status}</li>
                                    <li> ticket topic : {details.ticketTopic}</li>
                                    </div>
                                <button className="close-modal" onClick={toggleModal}>
                                X
                                </button>
                                </td>
                                </tr>
                            )}
            </tbody>
        </table>
        </div>
        <button className="stats" onClick={() => setShow(!show)}>{show === true ? 'Hide Statistics' : 'Show Statistics'}</button>
       {show && <div className="statistics wrapper">
       <ShowStatistics  buttonClicked = {buttonClicked} records ={data}/>
       <ShowAnalytics buttonClicked = {buttonClicked} records ={data}/>
        </div>}
        </>
    )
}
Records.forEach((a) => (a.finalGrade = (a.ratingGrade*0.4+a.examGrade*0.6).toPrecision(2)));
Records.forEach(a=>a.status=getStatus(a.finalGrade));
function getStatus(grade){
    return (grade > 4) ? 'passed' : 'failed'; 
}
