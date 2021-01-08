import React, { Component } from 'react'

class Formulario extends Component {

    constructor(props){
        super(props);
        this.stateInicial ={
            nome:'',
            sobrenome:'',
            idade:'',
        }
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value} = event.target;

        //a cada digitação o campo é atualizado
        this.setState({
            [name] : value
        });
    }




    render() {

        const{ nome, sobrenome, idade } = this.state;

        return (
            <form>

                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={this.escutadorDeInput}
                />

                <label htmlFor="sobrenome">Sobrenome</label>
                <input
                    id="sobrenome"
                    type="text"
                    name="sobrenome"
                    value={sobrenome}
                    onChange={this.escutadorDeInput}
                />


                <label htmlFor="idade">Idade</label>
                <input
                    id="idade"
                    type="text"
                    name="idade"
                    value={idade}
                    onChange={this.escutadorDeInput}
                />


                <button type="button">Salvar
                </button>
            </form>

        )

    }
}

export default Formulario;