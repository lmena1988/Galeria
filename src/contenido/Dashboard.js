import React, { Component } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../NavBar';

export default function Dashboard () {
  
  const[tventa,setTVenta]=React.useState([])
  const[usuario,setUsuario]=React.useState([])
  const[tpago,setTpago]=React.useState([])
  const[incorporacion,setIncorporacion]=React.useState([])
  const[contrato,setContrato]=React.useState([])
  const[tcontrato,setTcontrato]=React.useState([])
  const[producto,setProducto]=React.useState([])
  const[categoria,setCategoria]=React.useState([])
  const[sala,setSala]=React.useState([])
  const[precio,setPrecio]=React.useState([])

  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalTP")
    .then(res=>res.json())
    .then((result)=>{
      setTpago(result);
    }
  )
  },[])

  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalI")
    .then(res=>res.json())
    .then((result)=>{
      setIncorporacion(result);
    }
  )
},[])
  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalCO")
    .then(res=>res.json())
    .then((result)=>{
      setContrato(result);
    }
  )
  },[])

  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalTC")
    .then(res=>res.json())
    .then((result)=>{
      setTcontrato(result);
    }
  )
  },[])

  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalProducto")
    .then(res=>res.json())
    .then((result)=>{
      setProducto(result);
    }
  )
  },[])

  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalCA")
    .then(res=>res.json())
    .then((result)=>{
      setCategoria(result);
    }
  )
},[])
  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalS")
    .then(res=>res.json())
    .then((result)=>{
      setSala(result);
    }
  )
  },[])

  React.useEffect(()=>{////
    fetch("http://localhost:8080/TotalPrecio")
    .then(res=>res.json())
    .then((result)=>{
      setPrecio(result);
    }
  )
  },[])
  React.useEffect(()=>{
      fetch("http://localhost:8080/Total")
      .then(res=>res.json())
      .then((result)=>{
        setUsuario(result);
      }
    )
    },[])
    React.useEffect(()=>{
      fetch("http://localhost:8080/TotalTV")
      .then(res=>res.json())
      .then((result)=>{
        setTVenta(result);
      }
    )
    },[])

    return (
      <div>
        <Header/>
      <NavBar/>
         <div class="content-wrapper">
          
    {/* Main container */}
<main className="full-box main-container">
  {/* Nav lateral */}
  {/* Page content */}
  <section className="full-box page-content">
    <nav className="full-box navbar-info">
      <a href="#" className="float-left show-nav-lateral">
        <i className="fas fa-exchange-alt" />
      </a>
      <a href="user-update.html">
        <i className="fas fa-user-cog" />
      </a>
      <a href="#" className="btn-exit-system">
        <i className="fas fa-power-off" />
      </a>
    </nav>
    
    {/* Content */}
    <div className="full-box tile-container">
      <a href="ListarUsuarios" className="tile">
        <div className="tile-tittle">Usuarios</div>

        <div className="tile-icon">
          <i className="fas fa-users fa-fw" />
          <p>{usuario} Registrados</p>
        </div> 
      </a>
      <a href="ListarProductos" className="tile">
        <div className="tile-tittle">Productos</div>
        <div className="tile-icon">
          <i className="fas fa-pallet fa-fw" />
          <p>{producto} Registrados</p>
        </div>
      </a>
      <a href="ListarCategorias" className="tile">
        <div className="tile-tittle">Categorías</div>
        <div className="tile-icon">
          <i className="far fa-calendar-alt fa-fw" />
          <p>{categoria} Registradas</p>
        </div>
      </a>
      <a href="ListarSalas" className="tile">
        <div className="tile-tittle">Sala de Exhibiciones</div>
        <div className="tile-icon">
          <i className="fas fa-hand-holding-usd fa-fw" />
          <p>{sala} Registrados</p>
        </div>
      </a>
      <a href="ListarPrecios" className="tile">
        <div className="tile-tittle">Precios</div>
        <div className="tile-icon">
          <i className="fas fa-clipboard-list fa-fw" />
          <p>{precio} Registrados</p>
        </div>
      </a>
      <a href="ListarTipoVentas" className="tile">
        <div className="tile-tittle">Tipo de Ventas</div>
        <div className="tile-icon">
          <i className="fas fa-user-secret fa-fw" />
          <p>{tventa} Registrados</p>
        </div>
      </a>
      <a href="ListarTipoPagos" className="tile">
        <div className="tile-tittle">Tipo de Pagos</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>{tpago} Registrada</p>
        </div>
      </a>
      <a href="ListarIncorporaciones" className="tile">
        <div className="tile-tittle">Incorporaciones</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>{incorporacion} Registrada</p>
        </div>
      </a>
      <a href="ListarContrato" className="tile">
        <div className="tile-tittle">Contratos</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>{contrato} Registrada</p>
        </div>
      </a>
      <a href="ListarTipoContratos" className="tile">
        <div className="tile-tittle">Tipos de Contratos</div>
        <div className="tile-icon">
          <i className="fas fa-store-alt fa-fw" />
          <p>{tcontrato} Registrada</p>
        </div>
      </a>
    </div>
  </section>
</main>

      </div>
</div>
    );
  }


