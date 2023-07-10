import { Header } from './Componentes/Header/header';
import {Hero} from './Componentes/Hero/hero';
import {Boton} from './Componentes/Boton/boton';
import {Navbar} from './Componentes/Navbar/navbar';
import {S1_ProyDest} from './Componentes/S1_ProyDest/S1_ProyDest';
import {S2_Como} from './Componentes/S2_Como/S2_Como';
import {S3_Equipo} from './Componentes/S3_Equipo/S3_Equipo';
import {S4_Contacto} from './Componentes/S4_Contacto/S4_Contacto';
import {S5_Servicios} from './Componentes/S5_Servicios/S5_Servicios';
import {S5_1_Desarrollo} from './Componentes/S5_1_Desarrollo/S5_1_Desarrollo';
import {S5_2_Disenio} from './Componentes/S5_2_Disenio/S5_2_Disenio';
import {S6_Faqs} from './Componentes/S6_Faqs/S6_Faqs';
import {S7_Contrato} from './Componentes/S7_Contrato/S7_Contrato';
import {S8_Planes} from './Componentes/S8_Planes/S8_Planes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Navbar />
      <Boton />
      <S1_ProyDest />
      <S2_Como />
      <S3_Equipo />
      <S4_Contacto />
      <S5_Servicios />
      <S5_1_Desarrollo />
      <S5_2_Disenio />
      <S6_Faqs />
      <S7_Contrato />
      <S8_Planes />
    </div>
  );
}

export default App;
