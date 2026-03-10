// Parte 1

function Telefone(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
    Object.defineProperties(this, {
        // DDD
        'pegarDDD': {
            get: function () { return this.ddd }
        },
        'colocarDDD': {
            set: function (novo) { this.ddd = novo }
        },

        // Numero
        'pegarNumero': {
            get: function () { return this.numero }
        },
        'colocarNumero': {
            set: function (novo) { this.numero = novo }
        },

        'descricao': {
            get: function () {
                return `Telefone:\nDDD: ${this.ddd}\nNúmero: ${this.numero}`
            }
        }
    })
}

function Endereco(rua, numero, cidade, estado) {
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado
    Object.defineProperties(this, {
        // Rua
        'pegarRua': {
            get: function () { return this.rua }
        },
        'pegarRuaMaiuscula': {
            get: function () { return this.rua.toUpperCase() }
        },
        'pegarRuaMinuscula': {
            get: function () { return this.rua.toLowerCase() }
        },
        'colocarRua': {
            set: function (novo) { this.rua = novo }
        },

        // Numero
        'pegarNumero': {
            get: function () { return this.numero }
        },
        'colocarNumero': {
            set: function (novo) { this.numero = novo }
        },

        // Cidade
        'pegarCidade': {
            get: function () { return this.cidade }
        },
        'pegarCidadeMaiuscula': {
            get: function () { return this.cidade.toUpperCase() }
        },
        'pegarCidadeMinuscula': {
            get: function () { return this.cidade.toLowerCase() }
        },
        'colocarCidade': {
            set: function (novo) { this.cidade = novo }
        },

        // Estado
        'pegarEstado': {
            get: function () { return this.estado }
        },
        'pegarEstadoMaiusculo': {
            get: function () { return this.estado.toUpperCase() }
        },
        'pegarEstadoMinusculo': {
            get: function () { return this.estado.toLowerCase() }
        },
        'colocarEstado': {
            set: function (novo) { this.estado = novo }
        },

        'descricao': {
            get: function () {
                return `Endereço:\nRua: ${this.rua}\nNúmero: ${this.numero}\nCidade: ${this.cidade}\nEstado: ${this.estado}`
            }
        }
    })
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco
    Object.defineProperties(this, {
        // Nome
        'pegarNome': {
            get: function () { return this.nome }
        },
        'pegarNomeMaiusculo': {
            get: function () { return this.nome.toUpperCase() }
        },
        'pegarNomeMinusculo': {
            get: function () { return this.nome.toLowerCase() }
        },
        'colocarNome': {
            set: function (novo) { this.nome = novo }
        },

        // Telefone
        'pegarTelefone': {
            get: function () { return this.telefoneCelular.descricao }
        },
        'colocarTelefone': {
            set: function (novo) { this.telefoneCelular = novo }
        },

        // Email
        'pegarEmail': {
            get: function () { return this.email }
        },
        'pegarEmailMaiusculo': {
            get: function () { return this.email.toUpperCase() }
        },
        'pegarEmailMinusculo': {
            get: function () { return this.email.toLowerCase() }
        },
        'colocarEmail': {
            set: function (novo) { this.email = novo }
        },

        // Endereço
        'pegarEndereço': {
            get: function () { return this.endereco.descricao }
        },
        'colocarEndereço': {
            set: function (novo) { this.endereco = novo }
        },

        'descricao': {
            get: function () {
                return '----------------\n' + `Informações do Cliente: \n${this.nome}`
                    + '\n----------------' + '\n----------------\n'
                    + this.telefoneCelular.descricao + '\n----------------\n'
                    + this.endereco.descricao + '\n----------------\n'
            }
        }
    })
}

let telefone = new Telefone('11', '99999999')
let endereco = new Endereco('Av. Paulista', '987', 'São Paulo', 'SP')
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco)

console.log(cliente.descricao)

// Parte 2

let cliente1 = new Cliente('Ziroldo Silveira Rodrigues', telefone, 'ziroldo.silveira@app.com', endereco)
let cliente2 = new Cliente('Rogério Faria Neto', telefone, 'rogerio.neto@app.com', endereco)
let cliente3 = new Cliente('Omar Gustavo Machado', telefone, 'omar.gustavo@app.com', endereco)
let cliente4 = new Cliente('Adalberto Luiz Costa', telefone, 'adalberto.costa@app.com', endereco)

let clientes = [cliente1,cliente2,cliente3,cliente4]

console.log('Clientes antes da Ordenação:\n')
for (cliente of clientes) {
    console.log('- ' + cliente.pegarNome + '\n')
}

function OrdenarClientes(clientes) {
    let ordenados = clientes.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
    return ordenados
}

let clientesOrdenados = OrdenarClientes(clientes)

console.log('\nClientes depois da Ordenação:\n')
for (cliente of clientesOrdenados) {
    console.log('- ' + cliente.pegarNome + '\n')
}