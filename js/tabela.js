class Tabela {
    constructor() {
        this.tabela = null;
    }

    construir() {
        const elemento_base = document.getElementById('tabela');
        var tabela = '';

        var linha = '<div class="linha_tabela">';
        for(var j = 0; j < 20; j++) {
            linha += '<div class="coluna_tabela"></div>';
        }
        linha += '</div>';

        for(var i = 0; i < 20; i++) {
            tabela += linha;
        }
        elemento_base.innerHTML = tabela;
        this.tabela = elemento_base;
    }

    inserir(x, y, type) {
        var linha = document.getElementsByClassName('linha_tabela');
        linha[x].childNodes[y].innerHTML = 'x';
    }
}

export { Tabela };