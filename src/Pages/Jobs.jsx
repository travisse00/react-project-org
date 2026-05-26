import { Link, useLoaderData } from "react-router-dom";


function jobs() {
  const jobs = useLoaderData();
  return (
    <div>
      <div id="card">
        {jobs.map((job)=>{
            return(
              <div className="indi" key={job.id}>
                <div>
                  <h2>Title: {job.title}</h2>
                  <h5>Description: {job.desc}</h5>
                  {/* <h5>Requirements: {job.requirement}</h5> */}
                  <h4>$ {job.salary}</h4>
                  <Link to={`${job.id}`}>View more</Link>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default jobs

export const jobLoader = async () => {
  const res = await fetch('https://react-project-org.vercel.app/jobs');
  if (!res.ok) {
        throw new Error('Failed to fetch jobs')
    }
  const jobs = await res.json();
  return jobs
};