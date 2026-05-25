import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import * as Yup from 'yup'

function AddJobs() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            requirement: '',
            salary: ''
        },

        validationSchema: Yup.object({
            title: Yup.string()
                .required('Job must have a title'),

            desc: Yup.string()
                .required('Job must have additional information'),

            requirement: Yup.string()
                .required('Applicants requirements must be indicated'),

            salary: Yup.number()
                .required('Payment must be indicated')
        }),

        onSubmit: async (values) => {
            try {
                const response = await fetch('http://localhost:4000/job', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });

                if (response.ok) {
                    alert('Job added successfully');
                    navigate('/home/jobs');
                }
            } catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>Add A Job</h2>
                <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    onBlur={formik.handleBlur}
                    placeholder="Job Title"
                />
                {formik.touched.title && formik.errors.title && (
                    <p>{formik.errors.title}</p>
                )}
                <br />

                <input
                    type="text"
                    name="desc"
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                    onBlur={formik.handleBlur}
                    placeholder="Job Description"
                />
                {formik.touched.desc && formik.errors.desc && (
                    <p>{formik.errors.desc}</p>
                )}
                <br />

                <input
                    type="text"
                    name="requirement"
                    onChange={formik.handleChange}
                    value={formik.values.requirement}
                    onBlur={formik.handleBlur}
                    placeholder="Requirements"
                />
                {formik.touched.requirement && formik.errors.requirement && (
                    <p>{formik.errors.requirement}</p>
                )}
                <br />

                <input
                    type="number"
                    name="salary"
                    onChange={formik.handleChange}
                    value={formik.values.salary}
                    onBlur={formik.handleBlur}
                    placeholder="Salary"
                />
                {formik.touched.salary && formik.errors.salary && (
                    <p>{formik.errors.salary}</p>
                )}
                <br />

                <button type="submit" className="btn1">Add</button>
            </form>
        </div>
    )
}

export default AddJobs