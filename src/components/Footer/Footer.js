import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
import './Footer.css';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';


const Footer = ({
  totalPrice = 0,
  disablePrev = true,
  disableNext = true,
  onClickPrev = () => null,
  onClickNext = () => null
}) => (
  <div className="footer">
    <div>
      <button
        onClick={onClickPrev}
        disabled={disablePrev}
      >
        <MdNavigateBefore />
        <span>Prev</span>
      </button>
    </div>
    <div>
      <span>{formatPrice(totalPrice, '-')}</span>
    </div>
    <div>
      <button
        onClick={onClickNext}
        disabled={disableNext}
      >
        <span>Next</span>
        <MdNavigateNext />
      </button>
    </div>
  </div>
);

Footer.propTypes = {
  totalPrice: PropTypes.number,
  disablePrev: PropTypes.bool,
  disableNext: PropTypes.bool,
  onClickPrev: PropTypes.func,
  onClickNext: PropTypes.func
};

export default Footer;
