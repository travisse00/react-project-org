import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import '../css/login.css'

function RealLogin() {

        const navigate = useNavigate();
    
        const formik = useFormik({
            initialValues:{
                username: '',
                password: ''
            },
            validationSchema: Yup.object({
                username: Yup.string()
                .required('Username is required'),
    
                password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be 8 digits')
                .matches(/[A-Z]/, 'Must contain atleast 1 uppercase letter')
                .matches(/[a-z]/, 'Must contain atleast 1 lowercase letter')
                .matches(/[0-9]/, 'Must contain atleast 1 number')
                .matches(/[!, @, #, $, %, &, *, _]/, 'Must contain atleast 1 special character'),
            }),
            onSubmit:  async (issues) => {
            try {
                    const response = await fetch('https://react-project-org.onrender.com/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(issues)
                    });
    
                    if (response.ok) {
                        alert('Logged in successfully');
                        navigate('/home/home');
                    }
                } catch (error) {
                    console.log(error);
                    alert('Wrong Logins.')
                }
            }
        })
    return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <h1 className='head'>Hire Hub</h1>
            {/* <label htmlFor="">Username:</label><br /> */}
            <h2 className='h2'>Login</h2>
            <input type="text" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} placeholder='Username' name='username'/>
            {formik.touched.username && formik.errors.username && (
                <p className='add'>{formik.errors.username}</p>
            )}<br />

            {/* <label htmlFor="">Password:</label><br /> */}
            <input type="password" onChange={formik.handleChange} value={formik.values.password}  onBlur={formik.handleBlur} name='password' placeholder='Password'/>
            {formik.touched.password && formik.errors.password && (
                <p className='add'>{formik.errors.password}</p>
            )}<br />



            <button className='btn2' type='submit'>Login</button>
        </form>
    </div>
  )
}

export default RealLogin