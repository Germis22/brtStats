import React from 'react';
import fire from '../fire'
import '../App.css'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

class brtStats extends React.Component {

    state = {
        datos: []
      }
    
      componentDidMount() {
         fire.database().ref('Datos')
          .on('value', value => {
              this.setState({
                  datos : [value.val()]
              })
          })
     }

    render() {
        console.log(this.state.datos)
        return (
            this.state.datos.map((item, i) => (
            <MDBTable bordered className="tabla1">
                <MDBTableHead>
                    <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>BUS</th>
                    <th scope='col'>Pasajeros/Hora</th>
                    <th scope='col'>Pasajeros/Dia</th>
                    <th scope='col'>Pasajeros/Semana</th>
                    <th scope='col'>Pasajeros/Mes</th>
                    <th scope='col'>Pasajeros/Año</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                    <th scope='row'>1</th>
                    <td>{item.BUS.nomBus}</td>
                    <td>{item.PASAJEROS.perIn}</td>
                    <td>200</td>
                    <td>300</td>
                    <td>400</td>
                    <td>500</td>
                    </tr>
                    <tr>
                    <th scope='row'>2</th>
                    <td>Bus N2</td>
                    <td>40</td>
                    <td>180</td>
                    <td>280</td>
                    <td>380</td>
                    <td>480</td>
                    </tr>
                    <tr>
                    <th scope='row'>3</th>
                    <td>Bus N3</td>
                    <td>60</td>
                    <td>220</td>
                    <td>320</td>
                    <td>420</td>
                    <td>520</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
            ))
        )
    }
}

export default brtStats
