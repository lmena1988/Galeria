import axios from "axios";
import React, {  useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';
import Swal from "sweetalert2";

export default function ActualizarTipoContrato () {

  let navigate = useNavigate();

  const { id } = useParams();

  const[ntipocontrato,setNtipocontrato]=React.useState('')
  const[descripcion,setDescripcion]=React.useState('')
  const[tcontrato,setTcontrato]=React.useState([])


  useEffect(() => {
    loadUser();
  }, []);

  const handleClick=(e)=>{
    e.preventDefault()
    const tcontrato={ntipocontrato,descripcion}
    console.log(tcontrato)
    fetch(`http://localhost:8080/edittc/${id}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(tcontrato)

    }).then(()=>{
      if(!tcontrato){

        

      }else{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cambios Hechos',
          showConfirmButton: false,
          timer: 1500
        })
        return window.location = '/ListarTipoContratos';
        
      }
    })
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/gettc/${id}`);
    setTcontrato(result.data);
  };

	return (
	  <div>
      <Header/>
      <NavBar/>
		<div class="content-wrapper">
		{/* Page content */}
		<div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR TIPO CONTRATO
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
        <Link to="/BuscarTipoContrato"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR TIPO CONTRATO</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
    <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Tipo de Contrato</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombre Tipo de Contrato</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35} 
                defaultValue={tcontrato.ntipocontrato}
                onChange={(e)=>setNtipocontrato(e.target.value)}/>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Descripción</label>
                <input type="text" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
                defaultValue={tcontrato.descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}/>
              </div>
            </div>
            
          </div>
        </div>
      </fieldset>
      <p className="text-center" style={{marginTop: 40}}>
        <button type="submit" onClick={handleClick} className="btn btn-raised btn-success btn-sm"><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }

