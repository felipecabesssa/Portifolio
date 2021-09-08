import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Projetos - Estudos</h1>
        <div className="row px-3">

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Percentual de conclusão (%)</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Total de horas cursadas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todos os Cursos e Formações</h2>
        </div>

        <DataTable />
      </div>

      <Footer />
    </>
  );
}

export default App;
