import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default function NuevoProducto() {
  const[nombres,setNombre]=React.useState('')
  const[sala,setSala]=React.useState('')
  const[artista,setArtista]=React.useState('')
  const[año,setAño]=React.useState('')
  const[cat,setCat]=React.useState('')
  const[precio,setPrecio]=React.useState('')
  const[pintura,setPintura]=React.useState('')



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

  const[precios,setPrecios]=React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:8080/precios")
    .then(res=>res.json())
    .then((result)=>{
      setPrecios(result);
    }
  )
  },[])

  const[categorias,setCategorias]=React.useState('')
  React.useEffect(()=>{
    fetch("http://localhost:8080/categorias")
    .then(res=>res.json())
    .then((result)=>{
      setCategorias(result);
    }
  )
  },[])

  

  const convertir=(archivos)=>{
    Array.from(archivos).forEach(archivo=>{
      var reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload=function(){
        var arrayAuxiliar=[];
        var base64 = reader.result;

        arrayAuxiliar=base64.split(',');
        console.log(arrayAuxiliar[1]);
        setPintura(arrayAuxiliar[1]);
      }
      
    })
  }

  const handleClick=(e)=>{
    e.preventDefault()
    const producto={nombres,sala,artista,año,cat,precio,pintura}
    console.log(producto)
    fetch("http://localhost:8080/producto",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(producto)

    }).then(()=>{
      console.log("Estudiante añadido")
      return window.location = '/ListarProductos';
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
      <i className="fas fa-clipboard-list fa-fw" /> &nbsp; NUEVO PRODUCTO
    </h3>
  </div>
  <div className="container-fluid">
    <ul className="full-box list-unstyled page-nav-tabs">
      <li>
        <Link className="active" to="/NuevoProducto"><i className="fas fa-plus fa-fw" /> &nbsp; NUEVO PRODUCTO</Link>
      </li>
      <li>
        <Link to="/ListarProductos"><i className="fas fa-clipboard-list fa-fw" /> &nbsp; LISTA DE PRODUCTOS</Link>
      </li>
      <li>
        <Link to="/BuscarProducto"><i className="fas fa-search fa-fw" /> &nbsp; BUSCAR PRODUCTO</Link>
      </li>
    </ul>	
  </div>     
  {/* Content */}
  <div className="container-fluid">
    <form action className="form-neon" autoComplete="off" enctype="multipart/form-data">
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Producto</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="usuario_nombre" className="bmd-label-floating">Nombres</label>
                <input type="text" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,35}" className="form-control" name="usuario_nombre_reg" id="usuario_nombre" maxLength={35}
                onChange={(e)=>setNombre(e.target.value)} />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <div className="form-group">
                <label htmlFor="usuario_apellido" className="bmd-label-floating">Año Creación</label>
                <input type="date" pattern="" className="form-control" name="usuario_apellido_reg" id="usuario_apellido" maxLength={35} 
                onChange={(e)=>setAño(e.target.value)}/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="usuario_direccion" className="bmd-label-floating">Pintura</label>
                <input type="file" pattern="[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ().,#\- ]{1,190}" className="form-control" name="file" id="file" maxLength={190} 
                onChange={(e)=>convertir(e.target.files)}/>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Artista</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setArtista(e.target.value)}>
                  <option value selected disabled>Seleccione al Artista</option>
                  {usuario.map(contratos=>(
                  <option>{contratos.username}</option>
                  ))
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Categoría</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setCat(e.target.value)}>
                  <option value selected disabled>Seleccione una categoría</option>
                  
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información del Precio</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setPrecio(e.target.value)}>
                  <option value selected disabled>Seleccione un Precio</option>
                  {precios.map(contratop=>(
                  <option>{contratop.valor}</option>
                  ))
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <br /><br />
      <fieldset>
        <legend><i className="far fa-address-card" /> &nbsp; Información de la Sala</legend>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="form-group">
                <select className="form-control" name="usuario_privilegio_reg" onChange={(e)=>setSala(e.target.value)}>
                  <option value selected disabled>Seleccione una Sala de Exhibición</option>
                  {ssala.map(ssalas=>(
                  <option>{ssalas.nsala}</option>
                  ))
                }
                </select>
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
