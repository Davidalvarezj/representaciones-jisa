import React from 'react'
import "./Contacto.css"



const Contacto = () => {
  return (
    <div className="container-fluid contacto-main" id="contacto">
      <div className="container">
        <div className="row contact-row">
          <div className="col text-lefth text-white offset-1 mt-5 mb-0">
            <h3 className="m-0 p-0 text-white">CONTACTENOS</h3>
            <span className="text-warning h5">_________</span>
            <h4 className="text-warning mt-5">
              <i className="fa fa-phone" /> Teléfono
            </h4>
            <p className="mb-3"> (+57) 315 434 35 59</p>

            <h4 className="text-warning m-0">
              <i className="fa fa-envelope-o" /> email
            </h4>
            <a
              role="button"
              className="btn btn-link text-white mb-3"
              href="jgjalt@gmail.com"
            >
              jgjalt@gmail.com
            </a>
            <h4 className="text-warning">
              <i className="fa-solid fa-location-dot" /> Dirección
            </h4>
            <p className="m-0">Carrera 44 # 48-51, Medellin, Colombia</p>
          </div>
          <div className="col-xs-12 col-sm-6 d-flex justify-content-center">
            <img
              src={require("../img/Logojisa3 - Copy.png").default}
              alt="Girl in a jacket"
              width="200"
              height="150"
              className=""
            />
            {/* <a
              href="https://wa.me/+573187165424?text=Hola%20estoy%20interesado%20en%20productos%20Representaciones%20JISA"
              class="float"
              target="_blank"
            >
              <i class="fa fa-whatsapp my-float"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );


}

export default Contacto