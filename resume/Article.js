import React from 'react'
import './Article.css'

const Article = () => {
  return (
    <>
     <div className='career'>
        <h3 style={{background:'#182f5c',color:'white'}}>Career Objective:</h3>
        <p>Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging
           environment to prove my skills and utilize my knowledge and intelligence the growth of the organization.</p>
     </div>

     <div className='skill'>
        <h3 style={{background:'#182f5c',color:'white'}}>Technical Skills:</h3>
        <p>C, HTML, CSS</p>
        <p>JavaScript, Reactjs</p>
     </div>

     <div className='academic'>
     <h3 style={{background:'#182f5c',color:'white'}}>Academic Background:</h3>
      <table className='table'>
      <tr>
        <th>Qualification</th>
        <th>Passing Year</th>
        <th>Institution</th>
        <th>Board/University</th>
        <th>Percentage(%)</th>
      </tr>
      <tr>
        <td>B.TECH (CSE)</td>
        <td>2019-2022</td>
        <td>Sri Indu Institute of Engineering & Technology, Hyderabad</td>
        <td>Jawaharlal Nehru Technology University Hyderabad</td>
        <td>6.5(CGPA)</td>
      </tr>
      <tr>
        <td>DIPLOMA (CIVIL)</td>
        <td>2015-2018</td>
        <td>Aurora’s Polytechnic Institute, Hyderabad</td>
        <td>State Board of Technical Education & Training</td>
        <td>62.61(%)</td>
      </tr>
      <tr>
        <td>S.S.C</td>
        <td>2014-2015</td>
        <td>Divya Bala Vidyalayam High School, Bhongir</td>
        <td>State Board Of Secondary Education</td>
        <td>72(%)</td>
      </tr>
     </table>
     </div>

     <div className='project'>
      <h3 style={{background:'#182f5c',color:'white'}}>Projects:</h3>
      <p>I made this Resume using React js</p>
      <p>I have made around 20 dummy projects</p>
     </div>

     <div className='strength'>
      <h3 style={{background:'#182f5c',color:'white'}}>Strengths:</h3>
      <p>Ability to grasp the new skills quickly</p>
      <p>Hard-working</p>
      <p>Quick Learner</p>
      <p>Dedication</p>
     </div>

     <div className='hobbies'>
      <h3 style={{background:'#182f5c',color:'white'}}>Hobbies:</h3>
      <p>Travelling</p>
      <p>Playing Physical games</p>
      <p>Movies and Music</p>
      <p>Being on internet to newly things</p>
     </div>

     <div className='profile'>
      <h3 style={{background:'#182f5c',color:'white'}}>Personal Profile:</h3>
      <p><b>Father's Name :</b> Banothu Shankar</p>
      <p><b>Date of birth :</b> 10-Aug-2000</p>
      <p><b>Languages     :</b> English, Telugu, Hindi </p>
      <p><b>Address       :</b> 2-42, Ravi Pahad Thanda , Bibinagar, Bhongir, Yadadri (dist), Telangana, India, (508126)</p>
     </div>

     <div className='declaration'>
      <h3 style={{background:'#182f5c',color:'white'}}>Declaration:</h3>
      <p>I here by declare that above information is true, correct and complete to the best of my knowledge.</p>
      <p>Place: Hyderabad</p>
      <p>Date:</p> 
      <p id='nare'>(Banothu Narendar)</p>
     </div>
    </>
  )
}

export default Article