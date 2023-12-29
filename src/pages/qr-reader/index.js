import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { QrReader } from 'react-qr-reader';


export default function Myqr(){
  const [data, setData] = useState('No result');
  const [selected, setSelected] = useState("environment");

 
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);


  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
    return(
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center " >
      <div className="flex-grow flex items-center justify-center" style={{width: '100%'}}>
        <div className="container mx-auto px-4 py-8">
          
        <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
       
      <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
      <p>{data}</p>
    
        
          
        </div>
      </div>
      </main>
      <Footer />
    </div>
       
    )
}
