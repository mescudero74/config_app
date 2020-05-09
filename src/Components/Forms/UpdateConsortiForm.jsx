import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { updateConsortium } from '../../Services/Consortia'

const SignupSchema = Yup.object().shape({
  type: Yup.string().required("Required"),
  version: Yup.string().required("Required"),
  id: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  mail: Yup.string().required("Required"),
});

export const UpdateConsortiForm = (props) => {
  const { setConsorcios, consorcio } = props;
  const history = useHistory();
  return (
  <div>
    <h1>Editar consorcio</h1>
    <Formik
      initialValues={{
        _id: consorcio._id.$oid,
        type: consorcio.tipo,
        version: consorcio.version,
        id: consorcio.consorcio.id,
        name: consorcio.consorcio.name,
        state: consorcio.consorcio.estado,
        mail: consorcio.consorcio.mail
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        updateConsortium(values, setConsorcios);
        history.push("/consorcios");
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Tipo:</label>
          </div>
          <div>
            <Field name="type" values={"algo"}/>
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
          <h2>Consorcio</h2>
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
            <label>Email:</label>
          </div>
          <div>
            <Field name="mail" type="email" />
            {errors.mail && touched.mail ? <div className="Required-form">{errors.mail}</div> : null}
          </div>
          <div>
            <button type="submit">Actualizar</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)};
