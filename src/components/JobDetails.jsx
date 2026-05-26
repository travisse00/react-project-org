import { useLoaderData, useNavigate } from 'react-router-dom'
import '../css/details.css'

function JobDetails() {
    const jobDetails = useLoaderData();
    const navigate = useNavigate();
  return (
    <div className='details'>
        <h1>Title: {jobDetails.title}</h1>
        <p>Description: {jobDetails.desc}</p>
        <p>Requirments: {jobDetails.requirement}</p>
        <p>Salary: ${jobDetails.salary}</p>
        <button onClick={()=>navigate(-1)}>Back</button><br />
        <button>Apply</button>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async({params}) => {
    const { id } = params;
    const res = await fetch(`https://react-project-org.vercel.app/jobs/${ id }`);
    return res.json()
}