import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Validation schema using Yup
const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>

      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          console.log('Form submitted:', values)
          setStatus({ success: 'Registration successful!' })
          resetForm()
          setSubmitting(false)
        }}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            {status && status.success && (
              <div className="text-green-600 text-sm">{status.success}</div>
            )}

            {/* Username */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="username">Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
