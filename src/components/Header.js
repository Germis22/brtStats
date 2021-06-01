import React from 'react';
import fire from '../fire';
import BrtStats from './brtStats';
import { MDBBtn } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Route, Navlink, Switch, Link} from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <Router>      
        <div
          className='p-5 text-center bg-image'
          style={{ 
            backgroundImage: "url('http://gmsantacruz.gob.bo/_activos-municipales/img/brt-sarao/portada.jpg')", height: 895, 
            marginTop: '-1.8rem' 
          }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Estadísticas del BRT</h1>
                <h4 className='mb-3'>Pasajeros por hora, dia, semana, mes, y año</h4>
                <Link to="/brtStats">
                  <MDBBtn outline tag='a' className='btn btn-outline-light btn-lg'>
                    Mostrar
                  </MDBBtn>
                </Link>
                <Switch>
                  <Route exact path="/brtStats" component={BrtStats} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
}
}
export default Header
