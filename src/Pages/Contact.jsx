import { useContext } from "react"
import { UserContext } from "../Context/UserContext"

function Contact() {
    const number = useContext(UserContext);
  return (
    <div>
        <h1 className="h1">Get in Touch</h1><br />

        <div id="outlet">
          <p>Have questions, feedback, or need support? We’re here to help. Whether you’re a job seeker looking for assistance or an employer needing guidance, feel free to reach out to us.</p>

          <p>Our team is committed to providing timely support and making your experience as smooth as possible.</p>

          <p>Contact us through any of the channels below, and we’ll get back to you as soon as possible.</p>
        </div>

        <h2>Contact Information</h2>

        <ul><strong>Email:</strong> {number[0]}</ul>  
        <ul><strong>Phone:</strong> {number[1]}</ul>
    </div>
  )
}

export default Contact