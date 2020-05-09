import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
import { deleteConsortium } from "../../Services/Consortia"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const data = [
  {
    _id: {
      $oid: "5eb4628a5c5bbf3c6244ede3",
    },
    tipo: "consorcio",
    version: 0.1,
    releaseDate: "2020-12-03T00:00:00.000Z",
    consorcio: {
      id: 12345,
      name: "AlastriaCon",
      estado: "activo",
      mail: "martinescudero@gmail.com",
    },
  },
  {
    _id: {
      $oid: "5eb468d1425e95e41df261f9",
    },
    tipo: "consorcio",
    version: 0.1,
    releaseDate: "2020-12-03T00:00:00.000Z",
    consorcio: {
      id: 12345,
      name: "AlastriaCon",
      estado: "activo",
      mail: "martinescudero@gmail.com",
    },
  },
  {
    _id: {
      $oid: "5eb4692b8f5d5dd2d0d08648",
    },
    tipo: "consorcio",
    version: 0.1,
    releaseDate: "2020-12-03T00:00:00.000Z",
    consorcio: {
      id: 12345,
      name: "AlastriaCon",
      estado: "activo",
      mail: "martinescudero@gmail.com",
    },
  },
];

export const ConsortiumTable = (props) => {
  const [rows, setRows] = useState([]);
  const { consorcios, setConsorcio, setConsorcios } = props;
  const classes = useStyles();
  useEffect(() => {
    const updateRows = async () => {
      setRows(consorcios);
    };
    updateRows();
  }, [consorcios]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Acciones</TableCell>
            <TableCell align="right">ObjectId</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Version</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Mail</TableCell>
            <TableCell align="right">ReleaseDate</TableCell>
            <TableCell align="right">updateDate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Icon color="primary">add_circle</Icon>
                <Link
                  to="/editar_consorcio"
                  onClick={() => {
                    setConsorcio(row);
                  }}
                >
                  <EditIcon color="primary" />
                </Link>
                <Link
                  onClick={() => {
                    deleteConsortium(row._id.$oid, setConsorcios);
                  }}
                >
                  <DeleteIcon color="primary" />
                </Link>
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row._id.$oid}
              </TableCell>
              <TableCell align="right">{row.tipo}</TableCell>
              <TableCell align="right">{row.version}</TableCell>
              <TableCell align="right">{row.consorcio.id}</TableCell>
              <TableCell align="right">{row.consorcio.name}</TableCell>
              <TableCell align="right">{row.consorcio.estado}</TableCell>
              <TableCell align="right">{row.consorcio.mail}</TableCell>
              <TableCell align="right">{row.releaseDate}</TableCell>
              <TableCell align="right">{row.updateDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
