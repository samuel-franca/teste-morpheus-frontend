<template>
  <div id="app">

    <nav class="navbar navbar-inverse navbar-light fixed-top" style="background-color: #00e1b8;">
      <a class="navbar-toggle"><router-link to="" class="nav-link text-dark"><i class="fas fa-bars"> Menu</i></router-link></a>
      <a class="navbar-brand">Teste - Morpheus</a>
    </nav>

    <div class="layout-main">
        <aside>
          <nav class="sidebar sidebar-close">
            <ul class="nav nav-pills">
              <li class="nav-item"><router-link to="/" class="nav-link text-primary"><i class="fas fa-list"></i> Listar</router-link></li>
              <li class="nav-item"><router-link to="/Cadastro" class="nav-link text-success"> <i class="fas fa-plus"></i> Cadastrar</router-link></li>
            </ul>
          </nav>
        </aside>

      <!-- inserir a rota aqui -->
      <router-view/>

    </div>

  </div>
</template>

<script>

</script>

<style>

/* Base structure */
html, body {
	height: 100%;
}

body {
	padding-top: 56px;
	padding-left: 0;
} 

/* Main layout */
.layout-main {
    display: flex;
    min-height: calc(100vh - 52px);
    overflow: hidden;
}

/* Content */
.layout-content {
    width: 100%;
    padding-top: 0px;
}

.container {
	width: 100%;
	padding-top: 20px;
}

/* Sidebar */
.sidebar {
    width: 0px;
    height: 100vh;
    border-right: 1px solid #eee;    
    background-color: #f1f9fa;
    flex-shrink: 0;
    overflow: hidden;
    transition: width .5s;
}

.sidebar .nav {
	margin-bottom: 0px;
}

.sidebar .nav-item {
	width: 100%;
}

.sidebar .nav-item {
	margin-left: 0;
}

.sidebar .nav-link {
	border-radius: 0;
} 

.sidebar ul li:hover a, .menu ul li.active a{
    color: #777777;
}

.sidebar ul{
    list-style: none;
    padding: 30px 0px;
}

.sidebar ul li a{
    display: block;
    color:#1a1a1a;
    padding: 10px 20px;
    white-space: nowrap;
}

.sidebar.sidebar-close {
    width: 0px;
}

.sidebar.sidebar-open {
    width: 130px;
}

/* Nav-pills home */
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
	color: #fff;
	background-color: #1e94d2;
}

/* Toogle do navbar do menu */ 

.navbar-toggle {
    display: inline-block;
    margin-left: 20px;
}

</style>
