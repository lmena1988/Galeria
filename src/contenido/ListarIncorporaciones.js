import * as React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ListarIncorporaciones () {
  const[incorporacion,setIncorporacion]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/Incorporaciones")
    .then(res=>res.json())
    .then((result)=>{
      setIncorporacion(result);
    }
  )
  },[])

  const deleteIncorporacion = async (id) => {
    Swal.fire({
      title: 'Estás seguro de eliminar estos datos?',
      text: "No podras revertir esto!",
      icon: 'Advertencia',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
       axios.delete(`http://localhost:8080/editt/${id}`);
       Swal.fire(
        'Eliminados!',
        'Tus datos han sido eliminados.',
        'Completados'
      )
    }
  })
  };

    return (
        
      <div>
<Header/>
      <NavBar/>
         <div class="content-wrapper">

  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE INCORPORACIONES
    </h3>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevaIncorporacion"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVA INCORPORACIÓN</Link>
      </li>
      <li>
        <Link className='active' to="/ListarIncorporaciones"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE INCORPORACIONES</Link>
      </li>
      <li>
        <Link to="/BuscarIncorporacion"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR INCORPORACIÓN</Link>
      </li>
    </ul>	
  </div>
  {/* Content */}
  <div className="container-fluid">
    <div className="table-responsive">
      <table className="table table-secondary table-sm">
        <thead>
          <tr className="text-center roboto-medium">
            <th>#</th>
            <th>DESCRIPCIÓN</th>
            <th>VALOR</th>
            <th>USUARIO</th>
            <th>ACTUALIZAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {incorporacion.map(incorporaciones=>(
          <tr className="text-center">
            <td>{incorporaciones.id}</td>
            <td>{incorporaciones.descripcion}</td>
            <td>{incorporaciones.vincorporacion}</td>
            <td>{incorporaciones.artistai}</td>
            <td>
              <Link to={`/ActualizarIncorporacion/${incorporaciones.id}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button type="button" className="btn btn-warning" onClick={() => deleteIncorporacion(incorporaciones.id)}>
                  <i className="far fa-trash-alt" />
                </button>
              </form>
            </td>
          </tr>
        ))
      }   
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1}>Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>

</div>

      </div>
    );
  }

