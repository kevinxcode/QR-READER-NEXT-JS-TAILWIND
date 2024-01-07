// components/Alert.js
import React from 'react';
import { setAsyncStorageData, getAsyncStorageData, removeAsyncStorageData } from './utils/AsyncStorage'

const Session = ({ type, message, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  const alertClasses = `p-4 mb-4 ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  } text-white`;

  return (
    <div className={alertClasses}>
      <strong>{type === 'success' ? 'Success!' : 'Error!'}</strong> {message}
    </div>
  );
};

export default Session;
