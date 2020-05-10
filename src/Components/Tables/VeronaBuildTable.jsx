import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Icon from "@material-ui/core/Icon";
import { deleteVeronaBuild, initVeronaBuild } from '../../Services/VeronaBuild'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const data = [
  {
    _id: {
      $oid: "5eb4692b8f5d5dd2d0d08648",
    },
    config: "Datos new Verona",
    version: 0.1,
    releaseDate: "2020-03-12T00:00:00.000Z",
    test: true,
    id_verona_build: 12,
    estado_build: "precarga",
    consorcio: "5e6682ff52093f05bf8037c6",
    mail: "martinescudero@gmail.com",
    connect: {
      tenant: "Azure",
      tenant_id: "b7d14e5a-f26a-4fef-8c9d-b85d93193168",
      client_id: "b945ac8a-e9bb-4d16-a4c3-a3f8af24a260",
      secret: "d65a07b2-1bc7-4e12-be01-1e729ecad0c8",
      subscription_id: "612c469c-4d6c-418a-a347-d948e2f2b11a",
    },
    cloud: {
      location: "eastus",
      aks_name: "test-python-verona",
      aks_version: "1.15.7",
      resource_group_name: "test-python-verona",
      username: "sabraroot",
      vm_count: 3,
      vm_size: "Standard_D2_v2",
      ssh_key:
        "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAn3xZ/1XdC5bVJ+Q4eIFEVtJKsXgHECVRCTxnn7/HjR+YaEluQIyOL2Rba0XwOzNh4pLkMRKsEbltLIuDVmgatpB8+Y6dR9QtegffxiyAYXqum5bDcljMCCqWKqvd8vNcmYgXg44hPzn43EIgNUO0qgR1ZWJRtc2OELqoCot8i9/aosCStYoAwElOD0fGOtcCeSaB+zXdVFQ/wW0eNUZuSXoJF8rGndhajxz/+6Zt1BHcb94c0VedJUQKtJVcI2HASKOtDUBg+AZCZQJpRk1k91HcXAEVQFnkpDQk9c0YG31K3AxDFt2k2Rhe+KkJOBWgfJ+pt2njcLeWWHAxm0tu9Q==",
      client_id_AKS: "b3f2a108-f488-4984-9819-4603cc35d5db",
      client_secret_AKS: "d4bda9ef-5221-4b0a-a65a-13b22965ee2d",
      default: "default",
      stags: {
        Environment: "Test",
        project: "Verona",
      },
    },
    besu: {
      path_kube_config: "/root/.kube",
      path_data_besu: "/root/networkFiles",
      balance_account: "0664d4a18015A588b3ec0378B868450984332a43",
      final_path_ibftconfig: "/root/ibftConfigFile.json",
      final_path_ibftconfig_perm: "/root/ibftConfigFile_perm.json",
      path_helm_rbac: "/root/helm/besu-verona/helm-rbac.yaml",
      path_genesis: "/root/networkFiles/genesis.json",
      path_helm_temp_values: "/root/helm/besu-verona/temp-values.yaml",
      path_helm_values: "/root/helm/besu-verona/values.yaml",
      path_helm_besu: "/root/helm/besu-verona",
      path_besu: "/etc/bin/besu/bin/besu",
      path_orion: "/etc/bin/orion/bin/orion",
      path_ibftconfig: "/root/helm/template_ibftConfigFile.json",
      path_ibftconfig_perm: "/root/helm/template_ibftConfigFile_perm.json",
      chain_id: 12332321,
      validators_count: 1,
      path_prod_issuer: "/root/helm/besu-verona/prod_issuer.yaml",
    },
    dapp: {
      path_helm_dapp: "/root/helm/dapp-besu",
      path_helm_dapp_values: "/root/helm/dapp-besu/values.yaml",
      path_helm_dapp_temp_values: "/root/helm/dapp-besu/temp-values.yaml",
      account_ingress_contract_address:
        "0x0000000000000000000000000000000000008888",
      node_ingress_contract_address:
        "0x0000000000000000000000000000000000009999",
      initial_whitelisted_account: "0x0664d4a18015A588b3ec0378B868450984332a43",
      pantheon_node_perm_key:
        "9e93a32b46838700aba63ef3d46c8003bb0004d62272a5d2993d33043e1e5d5a",
      network_id: "12332321",
      pantheon_node_perm_account: "0664d4a18015A588b3ec0378B868450984332a43",
      pantheon_node_perm_endpoint: "http://13.92.156.27:8545/",
    },
    "alethio-lite-explorer": {
      path_helm_dapp: "/root/helm/alethio-lite-explorer",
      path_helm_dapp_values: "/root/helm/alethio-lite-explorer/values.yaml",
      path_helm_dapp_temp_values:
        "/root/helm/alethio-lite-explorer/temp-values.yaml",
    },
  },
  {
    _id: {
      $oid: "5eb4692b8f5d5dd2d0d08648",
    },
    config: "Datos new Verona",
    version: 0.1,
    releaseDate: "2020-03-12T00:00:00.000Z",
    test: true,
    id_verona_build: 12,
    estado_build: "precarga",
    consorcio: "5e6682ff52093f05bf8037c6",
    mail: "martinescudero@gmail.com",
    connect: {
      tenant: "Azure",
      tenant_id: "b7d14e5a-f26a-4fef-8c9d-b85d93193168",
      client_id: "b945ac8a-e9bb-4d16-a4c3-a3f8af24a260",
      secret: "d65a07b2-1bc7-4e12-be01-1e729ecad0c8",
      subscription_id: "612c469c-4d6c-418a-a347-d948e2f2b11a",
    },
    cloud: {
      location: "eastus",
      aks_name: "test-python-verona",
      aks_version: "1.15.7",
      resource_group_name: "test-python-verona",
      username: "sabraroot",
      vm_count: 3,
      vm_size: "Standard_D2_v2",
      ssh_key:
        "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAn3xZ/1XdC5bVJ+Q4eIFEVtJKsXgHECVRCTxnn7/HjR+YaEluQIyOL2Rba0XwOzNh4pLkMRKsEbltLIuDVmgatpB8+Y6dR9QtegffxiyAYXqum5bDcljMCCqWKqvd8vNcmYgXg44hPzn43EIgNUO0qgR1ZWJRtc2OELqoCot8i9/aosCStYoAwElOD0fGOtcCeSaB+zXdVFQ/wW0eNUZuSXoJF8rGndhajxz/+6Zt1BHcb94c0VedJUQKtJVcI2HASKOtDUBg+AZCZQJpRk1k91HcXAEVQFnkpDQk9c0YG31K3AxDFt2k2Rhe+KkJOBWgfJ+pt2njcLeWWHAxm0tu9Q==",
      client_id_AKS: "b3f2a108-f488-4984-9819-4603cc35d5db",
      client_secret_AKS: "d4bda9ef-5221-4b0a-a65a-13b22965ee2d",
      default: "default",
      stags: {
        Environment: "Test",
        project: "Verona",
      },
    },
    besu: {
      path_kube_config: "/root/.kube",
      path_data_besu: "/root/networkFiles",
      balance_account: "0664d4a18015A588b3ec0378B868450984332a43",
      final_path_ibftconfig: "/root/ibftConfigFile.json",
      final_path_ibftconfig_perm: "/root/ibftConfigFile_perm.json",
      path_helm_rbac: "/root/helm/besu-verona/helm-rbac.yaml",
      path_genesis: "/root/networkFiles/genesis.json",
      path_helm_temp_values: "/root/helm/besu-verona/temp-values.yaml",
      path_helm_values: "/root/helm/besu-verona/values.yaml",
      path_helm_besu: "/root/helm/besu-verona",
      path_besu: "/etc/bin/besu/bin/besu",
      path_orion: "/etc/bin/orion/bin/orion",
      path_ibftconfig: "/root/helm/template_ibftConfigFile.json",
      path_ibftconfig_perm: "/root/helm/template_ibftConfigFile_perm.json",
      chain_id: 12332321,
      validators_count: 1,
      path_prod_issuer: "/root/helm/besu-verona/prod_issuer.yaml",
    },
    dapp: {
      path_helm_dapp: "/root/helm/dapp-besu",
      path_helm_dapp_values: "/root/helm/dapp-besu/values.yaml",
      path_helm_dapp_temp_values: "/root/helm/dapp-besu/temp-values.yaml",
      account_ingress_contract_address:
        "0x0000000000000000000000000000000000008888",
      node_ingress_contract_address:
        "0x0000000000000000000000000000000000009999",
      initial_whitelisted_account: "0x0664d4a18015A588b3ec0378B868450984332a43",
      pantheon_node_perm_key:
        "9e93a32b46838700aba63ef3d46c8003bb0004d62272a5d2993d33043e1e5d5a",
      network_id: "12332321",
      pantheon_node_perm_account: "0664d4a18015A588b3ec0378B868450984332a43",
      pantheon_node_perm_endpoint: "http://13.92.156.27:8545/",
    },
    "alethio-lite-explorer": {
      path_helm_dapp: "/root/helm/alethio-lite-explorer",
      path_helm_dapp_values: "/root/helm/alethio-lite-explorer/values.yaml",
      path_helm_dapp_temp_values:
        "/root/helm/alethio-lite-explorer/temp-values.yaml",
    },
  },
  {
    _id: {
      $oid: "5eb4692b8f5d5dd2d0d08648",
    },
    config: "Datos new Verona",
    version: 0.1,
    releaseDate: "2020-03-12T00:00:00.000Z",
    test: true,
    id_verona_build: 12,
    estado_build: "precarga",
    consorcio: "5e6682ff52093f05bf8037c6",
    mail: "martinescudero@gmail.com",
    connect: {
      tenant: "Azure",
      tenant_id: "b7d14e5a-f26a-4fef-8c9d-b85d93193168",
      client_id: "b945ac8a-e9bb-4d16-a4c3-a3f8af24a260",
      secret: "d65a07b2-1bc7-4e12-be01-1e729ecad0c8",
      subscription_id: "612c469c-4d6c-418a-a347-d948e2f2b11a",
    },
    cloud: {
      location: "eastus",
      aks_name: "test-python-verona",
      aks_version: "1.15.7",
      resource_group_name: "test-python-verona",
      username: "sabraroot",
      vm_count: 3,
      vm_size: "Standard_D2_v2",
      ssh_key:
        "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAn3xZ/1XdC5bVJ+Q4eIFEVtJKsXgHECVRCTxnn7/HjR+YaEluQIyOL2Rba0XwOzNh4pLkMRKsEbltLIuDVmgatpB8+Y6dR9QtegffxiyAYXqum5bDcljMCCqWKqvd8vNcmYgXg44hPzn43EIgNUO0qgR1ZWJRtc2OELqoCot8i9/aosCStYoAwElOD0fGOtcCeSaB+zXdVFQ/wW0eNUZuSXoJF8rGndhajxz/+6Zt1BHcb94c0VedJUQKtJVcI2HASKOtDUBg+AZCZQJpRk1k91HcXAEVQFnkpDQk9c0YG31K3AxDFt2k2Rhe+KkJOBWgfJ+pt2njcLeWWHAxm0tu9Q==",
      client_id_AKS: "b3f2a108-f488-4984-9819-4603cc35d5db",
      client_secret_AKS: "d4bda9ef-5221-4b0a-a65a-13b22965ee2d",
      default: "default",
      stags: {
        Environment: "Test",
        project: "Verona",
      },
    },
    besu: {
      path_kube_config: "/root/.kube",
      path_data_besu: "/root/networkFiles",
      balance_account: "0664d4a18015A588b3ec0378B868450984332a43",
      final_path_ibftconfig: "/root/ibftConfigFile.json",
      final_path_ibftconfig_perm: "/root/ibftConfigFile_perm.json",
      path_helm_rbac: "/root/helm/besu-verona/helm-rbac.yaml",
      path_genesis: "/root/networkFiles/genesis.json",
      path_helm_temp_values: "/root/helm/besu-verona/temp-values.yaml",
      path_helm_values: "/root/helm/besu-verona/values.yaml",
      path_helm_besu: "/root/helm/besu-verona",
      path_besu: "/etc/bin/besu/bin/besu",
      path_orion: "/etc/bin/orion/bin/orion",
      path_ibftconfig: "/root/helm/template_ibftConfigFile.json",
      path_ibftconfig_perm: "/root/helm/template_ibftConfigFile_perm.json",
      chain_id: 12332321,
      validators_count: 1,
      path_prod_issuer: "/root/helm/besu-verona/prod_issuer.yaml",
    },
    dapp: {
      path_helm_dapp: "/root/helm/dapp-besu",
      path_helm_dapp_values: "/root/helm/dapp-besu/values.yaml",
      path_helm_dapp_temp_values: "/root/helm/dapp-besu/temp-values.yaml",
      account_ingress_contract_address:
        "0x0000000000000000000000000000000000008888",
      node_ingress_contract_address:
        "0x0000000000000000000000000000000000009999",
      initial_whitelisted_account: "0x0664d4a18015A588b3ec0378B868450984332a43",
      pantheon_node_perm_key:
        "9e93a32b46838700aba63ef3d46c8003bb0004d62272a5d2993d33043e1e5d5a",
      network_id: "12332321",
      pantheon_node_perm_account: "0664d4a18015A588b3ec0378B868450984332a43",
      pantheon_node_perm_endpoint: "http://13.92.156.27:8545/",
    },
    "alethio-lite-explorer": {
      path_helm_dapp: "/root/helm/alethio-lite-explorer",
      path_helm_dapp_values: "/root/helm/alethio-lite-explorer/values.yaml",
      path_helm_dapp_temp_values:
        "/root/helm/alethio-lite-explorer/temp-values.yaml",
    },
  },
];

export const VeronaBuildTable = (props) => {
  const [rows, setRows] = useState([]);
  const { veronaBuilds, setVeronaBuild, setVeronaBuilds } = props;
  const classes = useStyles();
  useEffect(() => {
    const updateRows = async () => {
      setRows(veronaBuilds);
    };
    updateRows();
  }, [veronaBuilds]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Acciones</TableCell>
            <TableCell align="right">ObjectId</TableCell>
            <TableCell align="right">Consorcio</TableCell>
            <TableCell align="right">Tenant</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">AksName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
              <Link
                  onClick={() => {
                    initVeronaBuild(row._id.$oid);
                  }}
                >
                <Icon color="primary">add_circle</Icon>
                </Link>
                <Link
                  to="/editar_verona_build"
                  onClick={() => {
                    setVeronaBuild(row);
                  }}
                >
                  <EditIcon
                    color="primary"
                  />
                </Link>
                <Link
                  onClick={() => {
                    deleteVeronaBuild(row._id.$oid, setVeronaBuilds);
                  }}
                >
                  <DeleteIcon
                    color="primary"
                  />
                </Link>
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row._id.$oid}
              </TableCell>
              <TableCell align="right">{row.consorcio}</TableCell>
              <TableCell align="right">{row.connect.tenant}</TableCell>
              <TableCell align="right">{row.cloud.location}</TableCell>
              <TableCell align="right">{row.cloud.aks_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
