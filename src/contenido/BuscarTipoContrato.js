import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default class BuscarTipoContrato extends Component {
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
      <i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO CONTRATO
    </h3>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoTipoContrato"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO CONTRATO</Link>
      </li>
      <li>
        <Link to="/ListarTipoContratos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO CONTRATOS</Link>
      </li>
      <li>
        <Link className='active' to="/BuscarTipoContrato"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR CONTRATO</Link>
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
              <label htmlFor="inputSearch" className="bmd-label-floating">¿Qué tipo contrato estás buscando?</label>
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
