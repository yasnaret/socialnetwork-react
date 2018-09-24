import React, {Component} from 'react';
import Header from '../Global/Header';
import Publicidad from '../Global/Publicidad';
import Post from '../Post/Post'
import Perfil from './Perfil';
import BarraLateral from '../Global/BarraLateral';
import Menu from '../Global/Menu'

class Home extends Component(props) {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <Header {...props}/>
                <main className="container">
                    <div className="row">
                        <div
                            className="col-md-3 barra-lateral-izquierda"
                            id="barra-lateral-izquierda"
                            ref="barraLateral">
                            <BarraLateral {...props}/>
                            <Publicidad/>
                        </div>
                        <div className="col col-md-6 mx-auto contenido-principal profile">
                            <Menu/>
                            <Perfil {...props}/>
                        </div>
                    </div>
                    {/* <Post /> */}
                </main>
            </section>
        )
    }
}

export default Home;
