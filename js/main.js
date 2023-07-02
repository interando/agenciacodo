
document.getElementById('header').innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-primary">
<div class="container">
<a class="navbar-brand text-white" href="index.html">AGENCIA CODO</a>
<button class="navbar-toggler d-lg-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
  aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
  <ul class="navbar-nav me-auto mt-2 mt-lg-0 ">
    <li class="nav-item">
      <a class="nav-link active" href="index.html" aria-current="page">Inicio <span class="visually-hidden">(current)</span></a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</a>
      <div class="dropdown-menu" aria-labelledby="dropdownId">
        <a class="dropdown-item" href="candidatos.html">Candidatos</a>
        <a class="dropdown-item" href="candidato_nuevo.html">Alta de Candidatos</a>
        <a class="dropdown-item" href="candidato_editar.html">Editar Candidato</a>
      </div>
    </li>
  </ul>

</div>
</div>
</nav>`

document.getElementById('footer').innerHTML = `
<div class="container">
<div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <p class="col-md-4 mb-0 text-primary">© 2023 Codo/agency</p>

  <p class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto">
    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#0d6efd}</style><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
  </p>

  <ul class="nav col-md-4 justify-content-end">
    <li class="nav-item text-primary">Grupo 16: Germán Brüel | Marta Levalle</li>
  
  </ul>
</div>
</div>
`
