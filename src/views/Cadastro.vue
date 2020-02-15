<template>
    <section class="layout-content">
        <div class="container">
            <nav class="navbar navbar-expand-md bg-light col-lg-6">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <i class="fas fa-caret-right"></i>
                        <span> Cadastrar Usuário</span>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="container">
             <form class="col col-lg-6">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nome Completo" autofocus>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Login">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="E-mail">
                    <small class="text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Senha">
                </div>
                <button type="submit" class="btn btn-outline-success mb-2">Cadastrar <i class="fas fa-check-circle"></i></button>
             </form>
        </div>
    </section>
</template>