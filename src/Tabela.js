import React, { Component } from 'react';


const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Idade</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.pessoas.map((linha, index) => {
        return (

            <tr>
                <td>{linha.nome}</td>
                <td>{linha.sobrenome}</td>
                <td>{linha.idade}</td>
                <td><button className="btn-floating btn-large waves-effect waves-light light-green lighten-1"></button></td>
                
            </tr>
        );
    });
    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render() {

        const { pessoas } = this.props;

        return (
            <table className="highlight">
                <TableHead />
                <TableBody pessoas={pessoas} />

            </table>
        );
    }

}
export default Tabela;