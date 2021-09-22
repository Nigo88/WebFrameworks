import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotifications from './components/NewsNotifications';
import SideNews from './components/SideNews';
import SideSection from './components/SideSection';


function App() {
  return (
    <div className="background">
    <div>
      
      <Header />
      <NewsNotifications topic='PÄIVÄN TIMANTTI' body='Tutkija kertoo: Näin sota näkyy meissä edelleen' />
      <NewsNotifications topic='PÄIVÄN TIMANTTI' body='Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa' />
      <NewsNotifications topic='MAINOS' body='Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!'/>
      <MainSection />
      <SideSection />
      <SideNews topic='Rikosepäilyt | ' body='Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa'/>
      <SideNews topic='HS Vantaa' body='Vantaalle nousi vankilan näköinen päiväkoti,jota pilkataan nyt surutta verkossa'/>
      <SideNews topic= 'Päivittyvä seuranta'  body='STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden.'/>
      <SideNews topic= 'Nyt.fi |' body= 'Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummuon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maiilman - Soitimme vaatesuunnittelijalle'/>




    <div>
          <img src="/images/sosiaali.jpg.jpg" alt=""/>
          
          </div>
          </div>
          </div>
  );
}

export default App;
