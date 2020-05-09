import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createEnv } from '../../Services/Env'

const SignupSchema = Yup.object().shape({
  type: Yup.string().required("Required"),
  version: Yup.string().required("Required"),
  id: Yup.string().required("Required"),
  consortium_id: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  nodes: Yup.string().required("Required"),
});

export const CreateEnvForm = (props) => {
  const { setEnvs } = props;
  return (
  <div>
    <h1>Crear env</h1>
    <Formik
      initialValues={{
        type: "",
        version: "",
        consortium_id: "",
        id: "",
        name: "",
        state: "",
        nodes: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        createEnv(values, setEnvs)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Tipo:</label>
          </div>
          <div>
            <Field name="type" />
            {errors.type && touched.type ? <div className="Required-form">{errors.type}</div> : null}
          </div>
          <div>
            <label>Version:</label>
          </div>
          <div>
            <Field name="version" />
            {errors.version && touched.version ? (
              <div className="Required-form">{errors.version}</div>
            ) : null}
          </div>
          <div>
            <label>Consorcio:</label>
          </div>
          <div>
            <Field name="consortium_id" />
            {errors.consortium_id && touched.consortium_id ? (
              <div className="Required-form">{errors.consortium_id}</div>
            ) : null}
          </div>
          <h2>Environment:</h2>
          <div>
            <label>Id:</label>
          </div>
          <div>
            <Field name="id" />
            {errors.id && touched.id ? <div className="Required-form">{errors.id}</div> : null}
          </div>
          <div>
            <label>Nombre:</label>
          </div>
          <div>
            <Field name="name" />
            {errors.name && touched.name ? <div className="Required-form">{errors.name}</div> : null}
          </div>
          <div>
            <label>Estado:</label>
          </div>
          <div>
            <Field name="state" />
            {errors.state && touched.state ? <div className="Required-form">{errors.state}</div> : null}
          </div>
          <div>
            <label>Nodos:</label>
          </div>
          <div>
            <Field name="nodes"/>
            {errors.nodes && touched.nodes ? <div className="Required-form">{errors.nodes}</div> : null}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)};
