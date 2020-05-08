import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createVeronaBuild } from '../../Services/VeronaBuild'

const SignupSchema = Yup.object().shape({
  config: Yup.string().required("Required"),
  version: Yup.string().required("Required"),
  test: Yup.string().required("Required"),
  id_verona_build: Yup.string().required("Required"),
  estado_build: Yup.string().required("Required"),
  consorcio: Yup.string().required("Required"),
  mail: Yup.string().required("Required"),

  tenant: Yup.string().required("Required"),
  tenant_id: Yup.string().required("Required"),
  client_id: Yup.string().required("Required"),
  secret: Yup.string().required("Required"),
  subscription_id: Yup.string().required("Required"),

  location: Yup.string().required("Required"),
  aks_name: Yup.string().required("Required"),
  aks_version: Yup.string().required("Required"),
  resource_group_name: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  vm_count: Yup.string().required("Required"),
  vm_size: Yup.string().required("Required"),
  ssh_key: Yup.string().required("Required"),
  client_id_AKS: Yup.string().required("Required"),
  client_secret_AKS: Yup.string().required("Required"),
  default: Yup.string().required("Required"),

    environment: Yup.string().required("Required"),
    project: Yup.string().required("Required"),

  path_kube_config: Yup.string().required("Required"),
  path_data_besu: Yup.string().required("Required"),
  balance_account: Yup.string().required("Required"),
  final_path_ibftconfig: Yup.string().required("Required"),
  final_path_ibftconfig_perm: Yup.string().required("Required"),
  path_helm_rbac: Yup.string().required("Required"),
  path_genesis: Yup.string().required("Required"),
  path_helm_temp_values: Yup.string().required("Required"),
  path_helm_values: Yup.string().required("Required"),
  path_helm_besu: Yup.string().required("Required"),
  path_besu: Yup.string().required("Required"),
  path_orion: Yup.string().required("Required"),
  path_ibftconfig: Yup.string().required("Required"),
  path_ibftconfig_perm: Yup.string().required("Required"),
  chain_id: Yup.string().required("Required"),
  chain_id: Yup.string().required("Required"),
  path_prod_issuer: Yup.string().required("Required"),
  
  path_helm_dapp: Yup.string().required("Required"),
  path_helm_dapp_values: Yup.string().required("Required"),
  path_helm_dapp_temp_values: Yup.string().required("Required"),
  account_ingress_contract_address: Yup.string().required("Required"),
  node_ingress_contract_address: Yup.string().required("Required"),
  initial_whitelisted_account: Yup.string().required("Required"),
  pantheon_node_perm_key: Yup.string().required("Required"),
  network_id: Yup.string().required("Required"),
  pantheon_node_perm_account: Yup.string().required("Required"),
  pantheon_node_perm_endpoint: Yup.string().required("Required"),


  path_helm_dapp: Yup.string().required("Required"),
  path_helm_dapp_values: Yup.string().required("Required"),
  path_helm_dapp_temp_values: Yup.string().required("Required"),
});

export const CreateVeronaBuildForm = () => (
  <div>
    <h1>Crear Verona Build</h1>
    <Formik
      initialValues={{
        config: "",
        version: "",
        test: "",
        id_verona_build: "",
        estado_build: "",
        consorcio: "",
        mail: "",
        tenant: "",
        tenant_id: "",
        client_id: "",
        secret: "",
        subscription_id: "",
        location: "",
        aks_name: "",
        aks_version: "",
        resource_group_name: "",
        username: "",
        vm_count: "",
        vm_size: "",
        ssh_key: "",
        client_id_AKS: "",
        client_secret_AKS: "",
        default: "",
        environment: "",
        project: "",
        path_kube_config: "",
        path_data_besu: "",
        balance_account: "",
        final_path_ibftconfig: "",
        final_path_ibftconfig_perm: "",
        path_helm_rbac: "",
        path_genesis: "",
        path_helm_temp_values: "",
        path_helm_values: "",
        path_helm_besu: "",
        path_besu: "",
        path_orion: "",
        path_ibftconfig: "",
        path_ibftconfig_perm: "",
        chain_id: "",
        chain_id: "",
        path_prod_issuer: "",
        path_helm_dapp: "",
        path_helm_dapp_values: "",
        path_helm_dapp_temp_values: "",
        account_ingress_contract_address: "",
        node_ingress_contract_address: "",
        initial_whitelisted_account: "",
        pantheon_node_perm_key: "",
        network_id: "",
        pantheon_node_perm_account: "",
        pantheon_node_perm_endpoint: "",
        path_helm_dapp: "",
        path_helm_dapp_values: "",
        path_helm_dapp_temp_values: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        createVeronaBuild(values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Config:</label>
          </div>
          <div>
            <Field name="config" />
            {errors.config && touched.config ? <div className="Required-form">{errors.config}</div> : null}
          </div>
          <div>
            <label>Version:</label>
          </div>
          <div>
            <Field name="version" />
            {errors.version && touched.version ? <div className="Required-form">{errors.version}</div> : null}
          </div>
          <div>
            <label>Test:</label>
          </div>
          <div>
            <Field name="test" />
            {errors.test && touched.test ? (
              <div className="Required-form">{errors.test}</div>
            ) : null}
          </div>
          <div>
            <label>id_verona_build:</label>
          </div>
          <div>
            <Field name="id_verona_build" />
            {errors.id_verona_build && touched.id_verona_build ? (
              <div className="Required-form">{errors.id_verona_build}</div>
            ) : null}
          </div>
          <div>
            <label>estado_build:</label>
          </div>
          <div>
            <Field name="estado_build" />
            {errors.estado_build && touched.estado_build ? (
              <div className="Required-form">{errors.estado_build}</div>
            ) : null}
          </div>
          <div>
            <label>consorcio:</label>
          </div>
          <div>
            <Field name="consorcio" />
            {errors.consorcio && touched.consorcio ? (
              <div className="Required-form">{errors.consorcio}</div>
            ) : null}
          </div>
          <div>
            <label>mail:</label>
          </div>
          <div>
            <Field name="mail" type="email"/>
            {errors.mail && touched.mail ? (
              <div className="Required-form">{errors.mail}</div>
            ) : null}
          </div>
          <h2>Connect</h2>
          <div>
            <label>tenant:</label>
          </div>
          <div>
            <Field name="tenant" />
            {errors.tenant && touched.tenant ? <div className="Required-form">{errors.tenant}</div> : null}
          </div>
          <div>
            <label>tenant_id:</label>
          </div>
          <div>
            <Field name="tenant_id" />
            {errors.tenant_id && touched.tenant_id ? <div className="Required-form">{errors.tenant_id}</div> : null}
          </div>
          <div>
            <label>client_id:</label>
          </div>
          <div>
            <Field name="client_id" />
            {errors.client_id && touched.client_id ? <div className="Required-form">{errors.client_id}</div> : null}
          </div>
          <div>
            <label>secret:</label>
          </div>
          <div>
            <Field name="secret" />
            {errors.secret && touched.secret ? <div className="Required-form">{errors.secret}</div> : null}
          </div>
          <div>
            <label>subscription_id:</label>
          </div>
          <div>
            <Field name="subscription_id" />
            {errors.subscription_id && touched.subscription_id ? <div className="Required-form">{errors.subscription_id}</div> : null}
          </div>
          <h2>Cloud</h2>
          <div>
            <label>location:</label>
          </div>
          <div>
            <Field name="location" />
            {errors.location && touched.location ? <div className="Required-form">{errors.location}</div> : null}
          </div>
          <div>
            <label>aks_name:</label>
          </div>
          <div>
            <Field name="aks_name" />
            {errors.aks_name && touched.aks_name ? <div className="Required-form">{errors.aks_name}</div> : null}
          </div>
          <div>
            <label>aks_version:</label>
          </div>
          <div>
            <Field name="aks_version" />
            {errors.aks_version && touched.aks_version ? <div className="Required-form">{errors.aks_version}</div> : null}
          </div>
          <div>
            <label>resource_group_name:</label>
          </div>
          <div>
            <Field name="resource_group_name" />
            {errors.resource_group_name && touched.resource_group_name ? <div className="Required-form">{errors.resource_group_name}</div> : null}
          </div>
          <div>
            <label>username:</label>
          </div>
          <div>
            <Field name="username" />
            {errors.username && touched.username ? <div className="Required-form">{errors.username}</div> : null}
          </div>
          <div>
            <label>vm_count:</label>
          </div>
          <div>
            <Field name="vm_count" />
            {errors.vm_count && touched.vm_count ? <div className="Required-form">{errors.vm_count}</div> : null}
          </div>
          <div>
            <label>vm_size:</label>
          </div>
          <div>
            <Field name="vm_size" />
            {errors.vm_size && touched.vm_size ? <div className="Required-form">{errors.vm_size}</div> : null}
          </div>
          <div>
            <label>ssh_key:</label>
          </div>
          <div>
            <Field name="ssh_key" />
            {errors.ssh_key && touched.ssh_key ? <div className="Required-form">{errors.ssh_key}</div> : null}
          </div>
          <div>
            <label>client_id_AKS:</label>
          </div>
          <div>
            <Field name="client_id_AKS" />
            {errors.client_id_AKS && touched.client_id_AKS ? <div className="Required-form">{errors.client_id_AKS}</div> : null}
          </div>
          <div>
            <label>client_secret_AKS:</label>
          </div>
          <div>
            <Field name="client_secret_AKS" />
            {errors.client_secret_AKS && touched.client_secret_AKS ? <div className="Required-form">{errors.client_secret_AKS}</div> : null}
          </div>
          <div>
            <label>default:</label>
          </div>
          <div>
            <Field name="default" />
            {errors.default && touched.default ? <div className="Required-form">{errors.default}</div> : null}
          </div>
          <h2>Stags</h2>
          <div>
            <label>environment:</label>
          </div>
          <div>
            <Field name="environment" />
            {errors.environment && touched.environment ? <div className="Required-form">{errors.environment}</div> : null}
          </div>
          <div>
            <label>project:</label>
          </div>
          <div>
            <Field name="project" />
            {errors.project && touched.project ? <div className="Required-form">{errors.project}</div> : null}
          </div>
          <h2>besu</h2>
          <div>
            <label>path_kube_config:</label>
          </div>
          <div>
            <Field name="path_kube_config" />
            {errors.path_kube_config && touched.path_kube_config ? <div className="Required-form">{errors.path_kube_config}</div> : null}
          </div>
          <div>
            <label>path_data_besu:</label>
          </div>
          <div>
            <Field name="path_data_besu" />
            {errors.path_data_besu && touched.path_data_besu ? <div className="Required-form">{errors.path_data_besu}</div> : null}
          </div>
          <div>
            <label>balance_account:</label>
          </div>
          <div>
            <Field name="balance_account" />
            {errors.balance_account && touched.balance_account ? <div className="Required-form">{errors.balance_account}</div> : null}
          </div>
          <div>
            <label>final_path_ibftconfig:</label>
          </div>
          <div>
            <Field name="final_path_ibftconfig" />
            {errors.final_path_ibftconfig && touched.final_path_ibftconfig ? <div className="Required-form">{errors.final_path_ibftconfig}</div> : null}
          </div>
          <div>
            <label>final_path_ibftconfig_perm:</label>
          </div>
          <div>
            <Field name="final_path_ibftconfig_perm" />
            {errors.final_path_ibftconfig_perm && touched.final_path_ibftconfig_perm ? <div className="Required-form">{errors.final_path_ibftconfig_perm}</div> : null}
          </div>
          <div>
            <label>path_helm_rbac:</label>
          </div>
          <div>
            <Field name="path_helm_rbac" />
            {errors.path_helm_rbac && touched.path_helm_rbac ? <div className="Required-form">{errors.path_helm_rbac}</div> : null}
          </div>
          <div>
            <label>path_genesis:</label>
          </div>
          <div>
            <Field name="path_genesis" />
            {errors.path_genesis && touched.path_genesis ? <div className="Required-form">{errors.path_genesis}</div> : null}
          </div>
          <div>
            <label>path_helm_temp_values:</label>
          </div>
          <div>
            <Field name="path_helm_temp_values" />
            {errors.path_helm_temp_values && touched.path_helm_temp_values ? <div className="Required-form">{errors.path_helm_temp_values}</div> : null}
          </div>
          <div>
            <label>path_helm_values:</label>
          </div>
          <div>
            <Field name="path_helm_values" />
            {errors.path_helm_values && touched.path_helm_values ? <div className="Required-form">{errors.path_helm_values}</div> : null}
          </div>
          <div>
            <label>path_helm_besu:</label>
          </div>
          <div>
            <Field name="path_helm_besu" />
            {errors.path_helm_besu && touched.path_helm_besu ? <div className="Required-form">{errors.path_helm_besu}</div> : null}
          </div>
          <div>
            <label>path_besu:</label>
          </div>
          <div>
            <Field name="path_besu" />
            {errors.path_besu && touched.path_besu ? <div className="Required-form">{errors.path_besu}</div> : null}
          </div>
          <div>
            <label>path_orion:</label>
          </div>
          <div>
            <Field name="path_orion" />
            {errors.path_orion && touched.path_orion ? <div className="Required-form">{errors.path_orion}</div> : null}
          </div>
          <div>
            <label>path_ibftconfig:</label>
          </div>
          <div>
            <Field name="path_ibftconfig" />
            {errors.path_ibftconfig && touched.path_ibftconfig ? <div className="Required-form">{errors.path_ibftconfig}</div> : null}
          </div>
          <div>
            <label>path_ibftconfig_perm:</label>
          </div>
          <div>
            <Field name="path_ibftconfig_perm" />
            {errors.path_ibftconfig_perm && touched.path_ibftconfig_perm ? <div className="Required-form">{errors.path_ibftconfig_perm}</div> : null}
          </div>
          <div>
            <label>chain_id:</label>
          </div>
          <div>
            <Field name="chain_id" />
            {errors.chain_id && touched.chain_id ? <div className="Required-form">{errors.chain_id}</div> : null}
          </div>
          <div>
            <label>validators_count:</label>
          </div>
          <div>
            <Field name="validators_count" />
            {errors.validators_count && touched.validators_count ? <div className="Required-form">{errors.validators_count}</div> : null}
          </div>
          <div>
            <label>path_prod_issuer:</label>
          </div>
          <div>
            <Field name="path_prod_issuer" />
            {errors.path_prod_issuer && touched.path_prod_issuer ? <div className="Required-form">{errors.path_prod_issuer}</div> : null}
          </div>
          <h2>dapp</h2>
          <div>
            <label>path_helm_dapp:</label>
          </div>
          <div>
            <Field name="path_helm_dapp" />
            {errors.path_helm_dapp && touched.path_helm_dapp ? <div className="Required-form">{errors.path_helm_dapp}</div> : null}
          </div>
          <div>
            <label>path_helm_dapp_values:</label>
          </div>
          <div>
            <Field name="path_helm_dapp_values" />
            {errors.path_helm_dapp_values && touched.path_helm_dapp_values ? <div className="Required-form">{errors.path_helm_dapp_values}</div> : null}
          </div>
          <div>
            <label>path_helm_dapp_temp_values:</label>
          </div>
          <div>
            <Field name="path_helm_dapp_temp_values" />
            {errors.path_helm_dapp_temp_values && touched.path_helm_dapp_temp_values ? <div className="Required-form">{errors.path_helm_dapp_temp_values}</div> : null}
          </div>
          <div>
            <label>account_ingress_contract_address:</label>
          </div>
          <div>
            <Field name="account_ingress_contract_address" />
            {errors.account_ingress_contract_address && touched.account_ingress_contract_address ? <div className="Required-form">{errors.account_ingress_contract_address}</div> : null}
          </div>
          <div>
            <label>node_ingress_contract_address:</label>
          </div>
          <div>
            <Field name="node_ingress_contract_address" />
            {errors.node_ingress_contract_address && touched.node_ingress_contract_address ? <div className="Required-form">{errors.node_ingress_contract_address}</div> : null}
          </div>
          <div>
            <label>initial_whitelisted_account:</label>
          </div>
          <div>
            <Field name="initial_whitelisted_account" />
            {errors.initial_whitelisted_account && touched.initial_whitelisted_account ? <div className="Required-form">{errors.initial_whitelisted_account}</div> : null}
          </div>
          <div>
            <label>pantheon_node_perm_key:</label>
          </div>
          <div>
            <Field name="pantheon_node_perm_key" />
            {errors.pantheon_node_perm_key && touched.pantheon_node_perm_key ? <div className="Required-form">{errors.pantheon_node_perm_key}</div> : null}
          </div>
          <div>
            <label>network_id:</label>
          </div>
          <div>
            <Field name="network_id" />
            {errors.network_id && touched.network_id ? <div className="Required-form">{errors.network_id}</div> : null}
          </div>
          <div>
            <label>pantheon_node_perm_account:</label>
          </div>
          <div>
            <Field name="pantheon_node_perm_account" />
            {errors.pantheon_node_perm_account && touched.pantheon_node_perm_account ? <div className="Required-form">{errors.pantheon_node_perm_account}</div> : null}
          </div>
          <div>
            <label>pantheon_node_perm_endpoint:</label>
          </div>
          <div>
            <Field name="pantheon_node_perm_endpoint" />
            {errors.pantheon_node_perm_endpoint && touched.pantheon_node_perm_endpoint ? <div className="Required-form">{errors.pantheon_node_perm_endpoint}</div> : null}
          </div>
          <h2>alethio-lite-explorer</h2>
          <div>
            <label>path_helm_dapp:</label>
          </div>
          <div>
            <Field name="path_helm_dapp" />
            {errors.path_helm_dapp && touched.path_helm_dapp ? <div className="Required-form">{errors.path_helm_dapp}</div> : null}
          </div>
          <div>
            <label>path_helm_dapp_values:</label>
          </div>
          <div>
            <Field name="path_helm_dapp_values" />
            {errors.path_helm_dapp_values && touched.path_helm_dapp_values ? <div className="Required-form">{errors.path_helm_dapp_values}</div> : null}
          </div>
          <div>
            <label>path_helm_dapp_temp_values:</label>
          </div>
          <div>
            <Field name="path_helm_dapp_temp_values" />
            {errors.path_helm_dapp_temp_values && touched.path_helm_dapp_temp_values ? <div className="Required-form">{errors.path_helm_dapp_temp_values}</div> : null}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
