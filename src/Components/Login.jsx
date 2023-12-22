import React from 'react'
import { useFormik } from 'formik';

const initialValues={
  name:"",
  email:"",
  password:"",
}

const onSubmit=values=>{
  console.log("Form data",values)
}

const validate=values=>{
  let errors={};
  if(!values.name){
    errors.name="Name is required"
    }
  if (!values.email ) {
    errors.email = "Email is required";
   }
  else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email="Invalid Email.."
    }
  if(!values.password){
    errors.password="Password is required"
   } 
  return errors;  
  }

        


const Login = () => {

  const formik=useFormik({
    initialValues,
    onSubmit,
    validate,


  })
  console.log(formik.touched)

  

  return (
    <div className="container">
      <div className="loginform">
          <form onSubmit={formik.handleSubmit}>
            <input type="text" placeholder="Name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
            <br />
            <input type="text" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            <br />
            <input type="text" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
            <br />
            <button type="submit">Submit</button>


          </form>
          
</div>
    </div>
    
  )
}

export default Login
