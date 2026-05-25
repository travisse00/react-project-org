import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Page not found</h1>
        <button onClick={()=>navigate(-1)}>Go back to previous page.</button>
    </div>
  )
}

export default NotFound