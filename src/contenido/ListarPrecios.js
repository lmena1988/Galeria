import * as React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from 'sweetalert2';

export default function ListarPrecios () {

  const[precios,setPrecios]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/precios")
    .then(res=>res.json())
    .then((result)=>{
      setPrecios(result);
    }
  )
  },[])

  const deletePrecios = async (id) => {
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRECIOS
    </h3>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoPrecio"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRECIO</Link>
      </li>
      <li>
        <Link className='active' to="/ListarPrecios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRECIOS</Link>
      </li>
      <li>
        <Link to="/BuscarPrecio"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR PRECIO</Link>
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
            <th>PRECIO $</th>
            <th>ACTUALIZAR</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
        {precios.map(precio=>(
          <tr className="text-center">
            <td>{precio.id}</td>
            <td>{precio.valor}</td>
            <td>
              <Link to={`/ActualizarPrecio/${precio.id}`} className="btn btn-success">
                <i className="fas fa-sync-alt" />	
              </Link>
            </td>
            <td>
              <form action>
                <button type="button" className="btn btn-warning" onClick={() => deletePrecios(precio.id)}>
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

