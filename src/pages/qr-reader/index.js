import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { QrReader } from 'react-qr-reader';


export default function Myqr(){
  const [data, setData] = useState('No result');
  const [selected, setSelected] = useState("environment");

 
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);



    return(
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center " >
      <div className="flex-grow flex items-center justify-center" style={{width: '100%'}}>
        <div className="container mx-auto px-4 py-8">
          
      <QrReader
            facingMode={selected}
            delay={1000}
           
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }
    
              if (!!error) {
                console.info(error);
              }
            }}
          
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
