import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { updateEnv } from '../../Services/Env'

const SignupSchema = Yup.object().shape({
  type: Yup.string().required("Required"),
  version: Yup.string().required("Required"),
  id: Yup.string().required("Required"),
  consortium_id: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  nodes: Yup.string().required("Required"),
});

export const UpdateEnvForm = (props) => {
  const { setEnvs, env } = props;
  const history = useHistory();
  return (
  <div>
    <h1>Actualizar env</h1>
    <Formik
      initialValues={{
        _id: env._id.$oid,
        type: env.tipo,
        version: env.version,
        consortium_id: env.consorcio_id,
        id: env.env.id,
        name: env.env.name,
        state: env.env.estado,
        nodes: env.env.nodos
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        updateEnv(values, setEnvs)
        history.push("/envs");
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
            <button type="submit">Actualizar</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)};
