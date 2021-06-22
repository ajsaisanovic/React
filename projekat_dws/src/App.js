import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./component/Login";
import RegistrujSe from "./component/RegistrujSe";
import ZaboravljenaLozinka from "./component/ZaboravljenaLozinka";
import {useState} from "react";
import NavBar from "./component/NavBar";
import Pocetna from "./component/Pocetna";
import "./component/Pocetna.css"
import "./component/Login.css"
import EvidencijaNastave from "./component/EvidencijaNastave";
import EvidencijaRadaOdKuce from "./component/EvidencijaRadaOdKuce";
import PredmetInformacije from "./component/PredmetInformacije";
import PredmetiInformacije from "./component/PredmetiInformacije";
import NastavnoOsoblje from "./component/NastavnoOsoblje";
import Postavke from "./component/Postavke";
import Sidebar from "./component/Sidebar";
import PostavkeKartice from "./component/PostavkeKartice";


function App() {
    const [registrujSe,setRegistrujSe]=useState(false)
    const [zaboravljenaLozinka,setzaboravljenaLozinka]=useState(false)
    const [pocetnaStranica,setPocetnaStranica]=useState(false)
    const [evidencijaNastave,setEvidencijaNastave]=useState(false)
    const [evidencijaRada,setEvidencijaRada]=useState(false)
    const [postavke,setPostavke]=useState(false)
    const [predmetiInformacije,setPredmetiInformacije]=useState(false)
    const [nastavnoOsoblje,setNastavnoOsoblje]=useState(false)
    const[podaci,setPodaci]=useState([])
    const[id,setId]=useState(0)
    function registar(){
        setRegistrujSe(true)
        setzaboravljenaLozinka(false)
    }
    function zaborvaljena_lozinka(){
        setRegistrujSe(false)
        setzaboravljenaLozinka(true)
    }
    function pocetna(niz,idi){
        setId(idi)
        setPodaci(niz)
        console.log("DAnas")
        console.log(id)
        setPocetnaStranica(true)

    }
    function evidencija(){
        setEvidencijaNastave(true)
        setPocetnaStranica(false)
        setEvidencijaRada(false)
        setPredmetiInformacije(false)
        setNastavnoOsoblje(false)
        setPostavke(false)
    }
    function evidencijaR(){
        setEvidencijaNastave(false)
        setPocetnaStranica(false)
        setEvidencijaRada(true)
        setPredmetiInformacije(false)
        setNastavnoOsoblje(false)
        setPostavke(false)
    }
    function predmeti(){
        setEvidencijaNastave(false)
        setPocetnaStranica(false)
        setEvidencijaRada(false)
        setPredmetiInformacije(true)
        setNastavnoOsoblje(false)
        setPostavke(false)
    }
    function post(){
        setEvidencijaNastave(false)
        setPocetnaStranica(false)
        setEvidencijaRada(false)
        setPredmetiInformacije(false)
        setNastavnoOsoblje(false)
        setPostavke(true)
    }
    function osoblje(){
        setEvidencijaNastave(false)
        setPocetnaStranica(false)
        setEvidencijaRada(false)
        setPredmetiInformacije(false)
        setNastavnoOsoblje(true)
        setPostavke(false)
    }
    function odjava(){
        setEvidencijaNastave(false)
        setPocetnaStranica(false)
        setEvidencijaRada(false)
        setPredmetiInformacije(false)
        setNastavnoOsoblje(false)
        setPostavke(false)
    }
    if(registrujSe){
        return (
            <RegistrujSe/>
        )
    }
    else if(zaboravljenaLozinka){
        return <ZaboravljenaLozinka/>
    }
    else if(pocetnaStranica){
        return <Pocetna id={id} odjava={odjava} pocetna={pocetna} podaci={podaci}  pred={predmeti} evidencija={evidencija} evidencijaR={evidencijaR} postavke={post} osoblje={osoblje}/>
    }
    else if(evidencijaNastave){
        return <EvidencijaNastave id={id} odjava={odjava} pocetna={pocetna} info={podaci}  pred={predmeti} evidencija={evidencija} evidencijaR={evidencijaR} postavke={post} osoblje={osoblje}/>
    }
    else if(nastavnoOsoblje){
        return <NastavnoOsoblje id={id} odjava={odjava} pocetna={pocetna} info={podaci}  pred={predmeti} evidencija={evidencija} evidencijaR={evidencijaR} postavke={post} osoblje={osoblje}/>
    }
    else if(evidencijaRada){
        return <EvidencijaRadaOdKuce id={id} tip={podaci.tip_korisnika} odjava={odjava} pocetna={pocetna} info={podaci}  pred={predmeti} evidencija={evidencija} evidencijaR={evidencijaR} postavke={post} osoblje={osoblje}/>
    }
    else if(predmetiInformacije){
        return <PredmetiInformacije id={id} tip={podaci.tip_korisnika} odjava={odjava} pocetna={pocetna} info={podaci}  pred={predmeti} evidencija={evidencija} evidencijaR={evidencijaR} postavke={post} osobljee={osoblje}/>
    }
    else if(postavke){
        return <Postavke id={id} odjava={odjava} pocetna={pocetna} info={podaci}  pred={predmeti} evidencija={evidencija} evidencijaR={evidencijaR} postavke={post} osoblje={osoblje}/>
    }
    const lista=["Adis Alihodzic","Elmedin Selmanovic","Amela Ribic","Dzeno Gusic"]
  return (

        <div className="default">
      <Login registruj={registar} lozinka={zaborvaljena_lozinka} pocetna={pocetna} postavi={setId}/>
      {/*<EvidencijaNastave id={1}/>*/}
      {/*<EvidencijaRadaOdKuce id={1} tip={"Šef odsjeka"}/>*/}
      {/*<PredmetiInformacije id={1} tip="Šef odsjeka"/>*/}
      {/*<NastavnoOsoblje profesori={lista}/>*/}

      {/*<Postavke id={1}/>*/}

            {/*<Switch>*/}
            {/*    <Route path="/predmeti/informacije">*/}
            {/*        <PredmetiInformacije id={id} tip={podaci.tip_korisnika}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/registracija">*/}
            {/*        <RegistrujSe/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/registracija">*/}
            {/*        <Pocetna/>*/}
            {/*    </Route>*/}

            {/*    <Route path="/evidencijaNastave">*/}
            {/*        <EvidencijaNastave id={id}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/nastavnoOsoblje">*/}
            {/*        <NastavnoOsoblje profesori={lista}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/postavke">*/}
            {/*        <Postavke id={id}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/evidencijaRada">*/}
            {/*        <EvidencijaRadaOdKuce id={id} tip={podaci.tip_korisnika}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/">*/}
            {/*        <Login registruj={registar} lozinka={zaborvaljena_lozinka} pocetna={pocetna} postavi={setId}/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
        </div>

  );
}

export default App;
