// pages/index.js
import react, { useEffect, useState } from 'react';
import Login from "./login";
import FloatingButton from "./components/FloatingButton";
import  { setAsyncStorageData, getAsyncStorageData, removeAsyncStorageData }  from './utils/AsyncStorage'

const Index = () => {
 const [dataLogin, setdataLogin] = useState([])
  useEffect(() => {
    const check_login = async () => {
      const retrievedData = await getAsyncStorageData('login-user');
      // console.log(retrievedData);
      setdataLogin(dataLogin);
    }
    return () => {
      check_login();
    };
   
  }, []);
  
  return <Login />;
};

export default Index;
