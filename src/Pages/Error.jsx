import { useNavigate } from "react-router-dom"


function Error() {
    const navigate = useNavigate();
  return (
    <div style={{padding: '20px'}}>
        <h1>Page not found try logging again</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default Error