import React from 'react';
import CustomButton from './Components/CustomButton';
import './App.css'
const App = () => {
  return (
    <div className='main'>
      <CustomButton text="Button 1" />
      <CustomButton text="Button 2" warnMessage="Bu bir xəbərdarlıq mesajıdır!" />
      <CustomButton text="Button 3" hint="Bu bir ipucu mesajıdır." />
    </div>
  );
};

export default App;
