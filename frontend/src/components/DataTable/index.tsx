const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Curso</th>
                        <th>Escola</th>
                        <th>Quantidade de módulos</th>
                        <th>Horas por módulo</th>
                        <th>Total de horas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10/08/2021</td>
                        <td>Formação certificação java</td>
                        <td>ALURA</td>
                        <td className="alinhamento">6</td>
                        <td>90hs</td>
                        <td>90.00</td>
                    </tr>
                    <tr>
                        <td>24/08/2021</td>
                        <td>O básico de java</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>25/08/2021</td>
                        <td>Tipos de Dados</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>26/08/2021</td>
                        <td>Operadores</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>27/08/2021</td>
                        <td>Criando e usando Array</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>29/08/2021</td>
                        <td>Laços</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>31/08/2021</td>
                        <td>Métodos e encapsulamento</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>01/09/2021</td>
                        <td>Relações entre classes</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>01/09/2021</td>
                        <td>Lidando com exceções</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>8hs</td>
                        <td>8.00</td>
                    </tr>
                    <tr>
                        <td>01/09/2021</td>
                        <td>Conteúdo além da prova</td>
                        <td>ALURA</td>
                        <td className="alinhamento">1</td>
                        <td>10hs</td>
                        <td>10.00</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td className="alinhamento">-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>05/09/2021</td>
                        <td>Formação Vue.Js</td>
                        <td>ALURA</td>
                        <td className="alinhamento">4</td>
                        <td>120hs</td>
                        <td>120.0</td>
                    </tr>

                </tbody>
            </table>
        </div>


    );
}

export default DataTable;