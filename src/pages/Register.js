import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <Formik
    initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
      firstname:Yup.string()
      .max(20,'Must be 20 character or less')
      .required('Firstname is mandatory'),

      lastname:Yup.string()
      .max(20,'must be 20 characters or less')
      .required('Lastname is mandatory'),

      email:Yup.string()
      .email('Invalid email format')
      .required('Email is mandatory'),

      password:Yup.string()
      .matches(/(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@#$&-_!])[A-Za-z0-9@#$&-_!]{8,}$/,'weak password, password should be like this:abC@123sc and must be of 8 characters or more')
      .required('Password is mandatory'),

      cpassword:Yup.string()
      .required('conform password is mandatory')
      .oneOf([Yup.ref('password'),null],'password and confirm password doesnot match')
    })}
    
    >
      <div className='container my-3'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-5 shadow p-3'>
            <form>
              <div className='mb-2'>
                <label htmlFor='firstname'>FirstName</label>
                <Field type='text' name='firstname' id='firstname' className='form-control'/>
                <ErrorMessage name='firstname'>
                  {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>

              </div>
              <div className='mb-2'>
                <label htmlFor='lastname'>LastName</label>
                <Field type='text' name='lastname' id='lastname' className='form-control'/>
                <ErrorMessage name='lastname'>
                  {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
                </div>

                <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <Field type='text' name='email' id='email' className='form-control'/>
                <ErrorMessage name='email'>
                  {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
                </div>

                <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <Field type='password' name='password' id='password' className='form-control'/>
                <ErrorMessage name='password'>
                  {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className='mb-2'>
                <label htmlFor='cpassword'>Confirm Password</label>
                <Field type='password' name='cpassword' id='cpassword' className='form-control'/>
                <ErrorMessage name='cpassword'>
                  {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
              </div>

              <div className='mb-2'>
                <button className='btn btn-primary'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        

    </Formik>
  )
}
export default Register