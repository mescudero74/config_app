import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    padding: 16 ,
    color: 'white',
  },
}));

export const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link style={{ textDecoration: 'none' }} to="/crear_consorcio">
            <Typography variant="h6" className={classes.title}>
              Crear consorcio
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/crear_env">
            <Typography variant="h6" className={classes.title}>
              Crear env
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/crear_verona_build">
            <Typography variant="h6" className={classes.title}>
              Crear verona_build
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/consorcios">
            <Typography variant="h6" className={classes.title}>
              Tabla consorcios
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/envs">
            <Typography variant="h6" className={classes.title}>
              Tabla Env
            </Typography>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/verona_build">
            <Typography variant="h6" className={classes.title}>
              Tabla Verona
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}