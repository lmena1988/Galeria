import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default class BuscarUsuario extends Component {
  render() {
	return (
	  <div>
      <Header/>
      <NavBar/>
		<div class="content-wrapper">
		<div>

  {/* Page content */}
  {/* Page header */}
  <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-search fa-fw" /> &nbsp; BUSCAR USUARIO
    </h3>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
	<li>
        <Link to="/NuevoUsuario"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO USUARIO</Link>
      </li>
      <li>
        <Link to="/ListarUsuarios"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE USUARIOS</Link>
      </li>
      <li>
        <Link className='active' to="/BuscarUsuario"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR USUARIO</Link>
      </li>
    </ul>	
  </div>
  {/* Content */}
  <div className="container-fluid">
    <form className="form-neon" action>
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="inputSearch" className="bmd-label-floating">¿Qué usuario estás buscando?</label>
              <input type="text" className="form-control" name="busqueda-" id="inputSearch" maxLength={30} />
            </div>
          </div>
          <div className="col-12">
            <p className="text-center" style={{marginTop: 40}}>
              <button type="submit" className="btn btn-raised btn-info"><i className="fas fa-search" /> &nbsp; BUSCAR</button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div className="container-fluid">
    <form action>
      <input type="hidden" name="eliminar-busqueda" defaultValue="eliminar" />
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-6">
            <p className="text-center" style={{fontSize: 20}}>
              Resultados de la busqueda <strong>“Buscar”</strong>
            </p>
          </div>
          <div className="col-12">
            <p className="text-center" style={{marginTop: 20}}>
              <button type="submit" className="btn btn-raised btn-danger"><i className="far fa-trash-alt" /> &nbsp; ELIMINAR BÚSQUEDA</button>
            </p>
          </div>
        </div>
      </div>
    </form>
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
}
