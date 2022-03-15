import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bloco1: {
    width: "30%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    height: "90%",
    backgroundColor: "#3B4252",
  },
  div_img: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", 
    flexDirection: "column",
    color: "white",
    textAlign: "center",
    fontSize: "18px",
    
  },
  img: {
    width: "100%",
  },
  bloco2: {
    width: "70%",
    height: "80%",
    height: "90%",
    backgroundColor: "#FAFAFA",
  },
  media: {
    width: "80%",
    margi: "auto",
    height: 150,
  },
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Perfil() {
   const classes = useStyles();
  const {nome} = useParams();
  const [todosRepositorios, setTodosRepositorios] = useState([])
  const [infoUsuario, setInfoUsuario] = useState([])
  useEffect(()=>{
    fetch(`https://api.github.com/users/${nome}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setTodosRepositorios(data);
      })
      fetch(`https://api.github.com/users/${nome}`)
      .then((res) => res.json())
      .then((data) => {
        setInfoUsuario(data);
      })
  },[nome])

  return (
    <Container className={classes.container}>
      <Box className={classes.bloco1}>
        <div className={classes.div_img}>
          <img className={classes.img} src={infoUsuario.avatar_url} />
          <p>{infoUsuario.name}</p>
        </div>
        <div className={classes.redes}>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </div>
      </Box>
      <Box className={classes.bloco2}>
        {todosRepositorios.map((todosRepositorios) => {
          return (
            <>
              <p>{todosRepositorios.name}</p>
            </>
          );
        })}
      </Box>
    </Container>
  );
}