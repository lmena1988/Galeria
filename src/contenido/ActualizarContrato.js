import axios from "axios";
import React, { useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from "../Header";
import NavBar from "../NavBar";
import Swal from "sweetalert2";

export default function ActualizarContrato () {
  
  let navigate = useNavigate();

  const { id } = useParams();

  const[descripcion,setDescripcion]=React.useState('')
  const[tipocontrato,setTipocontrato]=React.useState('')
  const[sala,setSala]=React.useState('')
  const[artista,setArtista]=React.useState('')
  const[plazo,setPlazo]=React.useState('')
  const[valor,setValor]=React.useState('')
  const[contrato,setContrato]=React.useState([])

  const[usuario,setUsuario]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/hola/4")
    .then(res=>res.json())
    .then((result)=>{
      setUsuario(result);
    }
  )
  },[])

  const[ssala,setSsala]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/salas")
    .then(res=>res.json())
    .then((result)=>{
      setSsala(result);
    }
  )
  },[])

  const[ttipo,setTtipo]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/Tcontratos")
    .then(res=>res.json())
    .then((result)=>{
      setTtipo(result);
    }
  )
  },[])


  useEffect(() => {
    loadUser();
  }, []);

  const handleClick=(e)=>{
    e.preventDefault()
    const contrato={descripcion,sala,artista,plazo,valor,tipocontrato}
    console.log(contrato)
    fetch(`http://localhost:8080/editc/${id}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(contrato)

    }).then(()=>{
      if(!contrato){

        

      }else{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cambios Hechos',
          showConfirmButton: false,
          timer: 1500
        })
        return window.location = '/ListarContratos';
        
      }
    })
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/getc/${id}`);
    setContrato(result.data);
  };
	return (
	  <div>
      <Header/>
      <NavBar/>
		<div class="content-wrapper">
		{/* Page content */}
		<div className="full-box page-header">
    <h3 className="text-left">
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; ACTUALIZAR CONTRATO
    </h3>
    <p className="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nostrum rerum animi natus beatae ex. Culpa blanditiis tempore amet alias placeat, obcaecati quaerat ullam, sunt est, odio aut veniam ratione.
    </p>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
    <li>
        <Link to="/NuevoContrato"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO CONTRATO</Link>
      </li>
      <li>
        <Link to="/ListarContrato"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE CONTRATOS</Link>
      </li>
      <li>
        <Link to="/BuscarContrato"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR CONTRATO</Link>
      </li>
    </ul>	
  </div>     
  {/* Page header */}

  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off">
      <fieldset>
      <legend><i className="far fa-address-card" /> &nbsp; Información del Contrato</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label htmlFor="usuario_dni" className="bmd-label-floating">Descripción</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20}
                defaultValue={contrato.descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}  />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    
      
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setTipocontrato(e.target.value)}>
                  <option value selected disabled>Seleccionar Tipo Contrato</option>
                  {ttipo.map(ssalas=>(
                  <option>{ssalas.ntipocontrato}</option>
                  ))
                } 
                </select>
              </div>
            </div>

            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setSala(e.target.value)}>
                  <option value selected disabled>Seleccionar Sala</option>
                  {ssala.map(ssalas=>(
                  <option>{ssalas.nsala}</option>
                  ))
                } 
                </select>
              </div>
            </div>

            <div className="col-4">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setArtista(e.target.value)}>
                  <option value selected disabled>Seleccionar Artista</option>
                  {usuario.map(contratos=>(
                  <option>{contratos.username}</option>
                  ))
                  } 
                </select>
              </div>
            </div>
          <br/><br/><br/><br/>
            <div className="col-12 col-md-4">
              <div className="form-group">
              <label htmlFor="usuario_clave_2" className="bmd-label-floating">Plazo del Contrato</label>
                <input type="date" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20} 
                defaultValue={contrato.plazo}
                onChange={(e)=>setPlazo(e.target.value)} />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="form-group">
              <label htmlFor="usuario_clave_2" className="bmd-label-floating">Precio del Contrato $</label>
                <input type="number" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_dni_reg" id="usuario_dni" maxLength={20} 
                defaultValue={contrato.valor}
                onChange={(e)=>setValor(e.target.value)} />
              </div>
            </div>
          </div>
      
      <p className="text-center" style={{marginTop: 40}}>
        <button type="submit" className="btn btn-raised btn-success btn-sm" onClick={handleClick}><i className="fas fa-sync-alt" /> &nbsp; ACTUALIZAR</button>
      </p>
    </form>
  </div>
  </div>
	  </div>
	);
  }

