<template>
    <section class="layout-content">
        <div class="container">
            <nav class="navbar navbar-expand-md bg-light">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <i class="fas fa-caret-right"></i>
                        <span> Lista de Usuários Cadastrados</span>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="container">
            <form class="form-inline">
                <div class="form-group sm-3 mb-2">
                    <input type="search" class="form-control" id="nome" placeholder="Nome do Usuário">
                </div>
                <button type="submit" class="btn btn-outline-success mx-3 mb-2">Buscar <i class="fas fa-search"></i></button>
            </form>

            <div class="table-responsive">
                <table class="table table-striped table-hover table-sm">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Login</th>
                            <th>E-mail</th>
                            <th>Senha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
          
        </div>

    </section>
</template>

<script>

</script>

<style >

</style>