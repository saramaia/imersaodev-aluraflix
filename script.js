function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
 // console.log(campoFilmeFavorito)
  var filmeFavorito = campoFilmeFavorito.value
  
  validaFilme(filmeFavorito)
  
/*
    if(filmeFavorito.endsWith('.jpg')){

      listaFilmesTela(filmeFavorito)

    } else{
      alert("Insira uma imagem válida")
    } */

}

function validaFilme(filme){
  if (filme.endsWith('.jpg')){
    listaFilmesTela(filme)
  }
  else {
    alert("Insira uma imagem válida")
  }

}

function listaFilmesTela(filme){
  var listaFilmes = document.querySelector("#listaFilmes")
  var testeFilme = listaFilmes.value
  console.log(filme) 
 
  var elementoFilme = "<img src="+ filme +">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  
}
