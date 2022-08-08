export default function GetDate() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <div className="dateDiv">
        {date} <br/>
       <span className="dateformat"> DD-MM-YY</span>
        </div>);
}