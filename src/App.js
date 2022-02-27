import React from 'react';
// import header
import Header from './components/header.js';
// import hero
import Hero from './components/hero.js';
// import browse
import Browse from './components/browse.js';
// import justArrived
import Justarrived from './components/justArrived.js';
// import clients
import Client from './components/clients.js';
// import aside menu
import Aside from './components/asideMenu.js';
// import footer
import Footer from './components/footer.js';

import './tailwind/style.css';

function App() {
  // state untuk menampung data dari API
  // kita beri nilai default useState adalah array kosong sebagai wadah unuk menampung data nantinya
  const [items, setItems] = React.useState([])

  // gunakan useEfect supaya ketika web dibuka data dari API langsung ditampilkan
  // useEffect ini memiliki 2 parameter, yaitu function dan dependency, pada kasus ini kita tidak menggunakan dependency supaya data langsung muncul ketika web dibuka 

  React.useEffect(function () {
    // porses pengambian data dari API
    (async function () {
      const response = await fetch("https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc", {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          // untuk api key kita pisah di file lain dan agar aman kita masukan ke gitignore agar tidak ikut ke push
          "x-api-key": process.env.REACT_APP_APIKEY
        }
      })
      // kita konvert hasil pengambilan data menjadi format JSON
      const { nodes } = await response.json()
      setItems(nodes)
    })()
  }, [])


  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Justarrived items={items}/>
      <Client />
      <Aside />
      <Footer />

    </>
  );
}

export default App;
