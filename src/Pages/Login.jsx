import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import'../css/login.css'
import { Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            username: '',
            Phone: '',
            password: '',
            confirmPassword: ''
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

            Phone: Yup.string()
            .min(10, 'Incorrect number')
            .max(11, 'Number has exceeded values')
            .required('Number is required'),

            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Password must match')
        }),
        onSubmit:  async (datas) => {
        try {
                const response = await fetch('https://react-project-org.vercel.app/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(datas)
                });

                if (response.ok) {
                    alert('New User successfully registered');
                    navigate('/Login');
                }
            } catch (error) {
                console.log(error);
            }
        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <h1 className='head'>Hire Hub</h1>
            {/* <label htmlFor="">Username:</label><br /> */}
            <h2 className='h2'>Create an account</h2>
            <input type="text" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} placeholder='Username' name='username'/>
            {formik.touched.username && formik.errors.username && (
                <p>{formik.errors.username}</p>
            )}<br />

            <input type="number" onChange={formik.handleChange} value={formik.values.Phone}  onBlur={formik.handleBlur}name='Phone' placeholder='Phone Number'/>
            {formik.touched.Phone && formik.errors.Phone && (
                <p>{formik.errors.Phone}</p>
            )}<br />

            {/* <label htmlFor="">Password:</label><br /> */}
            <input type="password" onChange={formik.handleChange} value={formik.values.password}  onBlur={formik.handleBlur} name='password' placeholder='Password'/>
            {formik.touched.password && formik.errors.password && (
                <p>{formik.errors.password}</p>
            )}<br />

            <input type="password" onChange={formik.handleChange} value={formik.values.confirmPassword}  onBlur={formik.handleBlur} name='confirmPassword' placeholder='Confirm Password'/>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p>{formik.errors.confirmPassword}</p>
            )}<br />

            <p>Already have an account? <Link style={{color: 'blue'}} to={'/Login'}>Login</Link></p>



            <button className='btn2' type='submit'>Register</button>
        </form>
    </div>
  )
};

export default Login