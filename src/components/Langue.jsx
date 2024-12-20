import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLangue } from '../redux/ActionsCreators';

const Langue = () => {
  const dispatch = useDispatch();
  const handleLanguageChange = (language) => {
    dispatch(changeLangue(language));
  };

  return (
      <div className='dropdown'>
        <p className="dropdown-link">Language</p>
        <div className='dropdown-content'>
        <p onClick={() => handleLanguageChange("fr")}>Français</p>
          <p onClick={() => handleLanguageChange("en")}>English</p>
          <p onClick={() => handleLanguageChange("ar")}>Arabic</p>
          <p onClick={() => handleLanguageChange("es")}>Español</p>
        </div>
      </div>
  );
};

export default Langue;