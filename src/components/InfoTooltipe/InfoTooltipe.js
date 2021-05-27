import React from 'react';
import check from '../../images/Check.png';
import cross from '../../images/Cross.png';
import './InfoTooltipe.css';

// popup_type_error popup_type_success popup_opened

function InfoTooltip({ isOpen, onClose, infoText, infoImage}) {
  let openClass = '';
  if (isOpen) openClass = ' popup_opened';


  let img;

  if (infoImage === 'success') {
    img = check
  }

  if (infoImage === 'error') {
    img = cross
  }

  return (
    <div className={"popup" + openClass}>
      <div className="popup__content">
        {/* <div className="popup__form"> */}
          {img && (<img className="popup__info-image" src={img} alt="Каринка" />)}
          <p className="popup__info-text">{infoText}</p>
        {/* </div> */}
        <button type="button" className="popup__button-close" onClick={onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;