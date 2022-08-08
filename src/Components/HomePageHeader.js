import './style.css';
import GetDate from './GetDate'
import {FaGraduationCap, FaSchool, FaUserTie, FaUsers, FaRegEdit, FaBookOpen, FaBuilding} from 'react-icons/fa'
export const HomePageHeader = ()=>{
    return (
        <><div className='header'>
            <div className='headertitle'>
                <FaGraduationCap style={{ color: 'white', fontSize: '3rem' }} />
                The GradeBook  </div>
                <div className="empty-div"></div>
            <GetDate />
            <span className='logo-cafe'>
            <span className='teamname'>Team Mocha</span>
                <img className='team-logo' src="../Images/mocha-512.png" alt="Team logo" />
           
            </span></div><div className="grid-container" >
                <span className='college grid-item'> <FaSchool style={{ color: '#392c2c', fontSize: '1.2rem' }} /> University : Lovely Professional University</span>
                <span className='dept grid-item'> <FaBuilding style={{ color: '#392c2c', fontSize: '1.3rem' }} /> Department : CSE</span>
                <span className='title grid-item'> <FaRegEdit style={{ color: '#392c2c', fontSize: '1.2rem' }} /> Title : Front-End</span>
                <span className='professor grid-item'> <FaUserTie style={{ color: '#392c2c', fontSize: '1.2rem' }} /> Professor : Vijayabhaskar Menta</span>
                <span className='group grid-item'> <FaUsers style={{ color: '#392c2c', fontSize: '1.3rem' }} /> Group : KE101</span>
                <span className='sem grid-item'> <FaBookOpen style={{ color: '#392c2c', fontSize: '1.3rem' }} /> Semester : 2</span>
            </div></>
    )
}
