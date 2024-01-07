import React, {useEffect} from 'react';
import { setAsyncStorageData, getAsyncStorageData, removeAsyncStorageData } from '../utils/AsyncStorage'

const Session = async  () => {
 
  const retrievedData = await getAsyncStorageData('login-user');
      if (retrievedData== null) {
        window.location.href =  '/';
      }
};

export { Session};