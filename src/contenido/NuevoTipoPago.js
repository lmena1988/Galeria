import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default function NuevoTipoPago () {

  const[ntipopago,setNtipopago]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const Tipopago={ntipopago,descripcion}
    console.log(Tipopago)
    fetch("http://localhost:8080/Tpago",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(Tipopago)

    }).then(()=>{
      console.log("Estudiante añadido")
      return window.location = '/ListarTipoPagos';
    })
  }
    return (
      <div>
        <Header/>
      <NavBar/>
        <div class="content-wrapper">
        {/* Page content */}
        <div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVA TIPO PAGO
    </h3>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoTipoPago"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO TIPO PAGO</Link>
      </li>
      <li>
        <Link to="/ListarTipoPagos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA TIPO PAGOS</Link>
      </li>
      <li>
        <Link to="/BuscarTipoPago"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO PAGO</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo Pago</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo de Pago</label>
                <input type="text" onChange={(e)=>setNtipopago(e.target.value)} pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} />
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" onChange={(e)=>setDescripcion(e.target.value)} className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} />
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="reset" className="btn btn-raised btn-secondary btn-sm"><i className="fas fa-paint-roller" /> &nbsp; LIMPIAR</button>
        &nbsp; &nbsp;
        <button type="submit" onClick={handleClick} className="btn btn-raised btn-info btn-sm"><i className="far fa-save" /> &nbsp; GUARDAR</button>
      </p>
    </form>
  </div>

        </div>
      </div>
    );
  }