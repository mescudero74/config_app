import axios from "axios";

const makeParams = (params) => {
  var request = {
    config: params.config,
    version: parseInt(params.version),
    test: params.test.toLowerCase() === "true" ? true : false,
    id_verona_build: parseInt(params.id_verona_build),
    estado_build: params.estado_build,
    consorcio: params.consorcio,
    mail: params.mail,
    connect: {
      tenant: params.tenant,
      tenant_id: params.tenant_id,
      client_id: params.client_id,
      secret: params.secret,
      subscription_id: params.subscription_id,
    },
    cloud: {
      location: params.location,
      aks_name: params.aks_name,
      aks_version: params.aks_version,
      resource_group_name: params.resource_group_name,
      username: params.username,
      vm_count: parseInt(params.vm_count),
      vm_size: params.vm_size,
      ssh_key: params.ssh_key,
      client_id_AKS: params.client_id_AKS,
      client_secret_AKS: params.client_secret_AKS,
      default: params.default,
      stags: {
        Environment: params.environment,
        project: params.project,
      },
    },
    besu: {
      path_kube_config: params.path_kube_config,
      path_data_besu: params.path_data_besu,
      balance_account: params.balance_account,
      final_path_ibftconfig: params.final_path_ibftconfig,
      final_path_ibftconfig_perm: params.final_path_ibftconfig_perm,
      path_helm_rbac: params.path_helm_rbac,
      path_genesis: params.path_genesis,
      path_helm_temp_values: params.path_helm_temp_values,
      path_helm_values: params.path_helm_values,
      path_helm_besu: params.path_helm_besu,
      path_besu: params.path_besu,
      path_orion: params.path_orion,
      path_ibftconfig: params.path_ibftconfig,
      path_ibftconfig_perm: params.path_ibftconfig_perm,
      chain_id: parseInt(params.chain_id),
      validators_count: parseInt(params.validators_count),
      path_prod_issuer: params.path_prod_issuer,
    },
    dapp: {
      path_helm_dapp: params.path_helm_dapp,
      path_helm_dapp_values: params.path_helm_dapp_values,
      path_helm_dapp_temp_values: params.path_helm_dapp_temp_values,
      account_ingress_contract_address: params.account_ingress_contract_address,
      node_ingress_contract_address: params.node_ingress_contract_address,
      initial_whitelisted_account: params.initial_whitelisted_account,
      pantheon_node_perm_key: params.pantheon_node_perm_key,
      network_id: params.network_id,
      pantheon_node_perm_account: params.pantheon_node_perm_account,
      pantheon_node_perm_endpoint: params.pantheon_node_perm_endpoint,
    },
    "alethio-lite-explorer": {
      path_helm_dapp: params.path_helm_dapp_aletio,
      path_helm_dapp_values: params.path_helm_dapp_values_aletio,
      path_helm_dapp_temp_values: params.path_helm_dapp_temp_values_aletio,
    },
  };
  return request;
};

export async function VeronaBuild() {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/verona_build`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function createVeronaBuild(params, setVeronaBuilds) {
  const body = makeParams(params);
  return await axios
    .post(`${process.env.REACT_APP_API_URL}/verona_build`, body)
    .then(function (response) {
      setVeronaBuilds(response.data);
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function initVeronaBuild(id) {
  return await axios
    .post(
      `${process.env.REACT_APP_API_VERONA_URL}:${process.env.REACT_APP_API_VERONA_PORT}/build_verona/${id}`,
      body
    )
    .then(function (response) {
      alert("Se inicio lo que quieres que se inicie");
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function updateVeronaBuild(params, setVeronaBuilds) {
  const body = makeParams(params);
  return await axios
    .put(`${process.env.REACT_APP_API_URL}/verona_build/${params._id}`, body)
    .then(function (response) {
      setVeronaBuilds(response.data);
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export async function deleteVeronaBuild(id, setVeronaBuilds) {
  return await axios
    .delete(`${process.env.REACT_APP_API_URL}/verona_build/${id}`)
    .then(function (response) {
      setVeronaBuilds(response.data);
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
