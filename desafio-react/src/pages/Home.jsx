import React, {useState} from "react";
import {
  TextField,
  Button,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Search from "@material-ui/icons/Search";


const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#8190A5",
    },
  },
   titulo: {
    margin:'1em',
    fontFamily: 'Lato'
  },
  media: {
    height: 140,
  },
  
  cardHome:{ 
    width:"100%"
  },
  cardArea:{
    display:"flex",
    justifyContent:"space-between"
  },
  cardImg :{
    width: "26%",
    height: 150
  },
  cardContent:{
    width: "65%",
    fontSize:16
  },
  button: {
    backgroundColor: "#47525E",
    color: "white",
  },
});
export default function Home() {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [nomeRepositorio, setNomeRepositorio] = useState([])
  const navigate = useNavigate()


  const submit = async ()=>{
    const response = await fetch(`https://api.github.com/users/${nome}`)
    const dados = await response.json()
        setNomeRepositorio(dados);
}
const enviaParam = () => {
  navigate(`/Perfil/${nomeRepositorio.login}`);
}

  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className={classes.titulo}
      >
        Search Devs
      </Typography>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <TextField
          variant="outlined"
          label="Type the username here"
          fullWidth
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
        <Button
          margin="normal"
          variant="contained"
          className={[classes.button, classes.root]}
          startIcon={<Search />}
          type="submit"
        >
          Buscar
        </Button>
      </form>
      <div>
        {nomeRepositorio.length != "" ? (
          <>
            <Card className={[classes.root, classes.cardHome]}>
              <CardActionArea className={classes.cardArea} onClick={enviaParam}>
                <CardMedia
                  className={[classes.media, classes.cardImg]}
                  image={nomeRepositorio.avatar_url}
                />
                <CardContent className={classes.cardContent}>
                  <p>Username: {nomeRepositorio.login} </p>
                  <p>Nome usuário: {nomeRepositorio.name}</p>
                  <p>Repositorios: {nomeRepositorio.public_repos}</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        ) : (
          <p>Nenhum usuario encontrado</p>
        )}
      </div>
    </>
  );
}
