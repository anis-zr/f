// src/utils/getProductImage.js

import tomateImg from '../../assets/tomate.jpg';
import carotteImg from '../../assets/carrote.jpg';
import batataImg from '../../assets/batata.jpg';

export const getProductImage = (product) => {
  switch (product.toLowerCase()) {
    case 'طماطم':
      return tomateImg;
    case 'جزر':
      return carotteImg;
    case 'بطاطا':
      return batataImg;
    default:
      return null;
  }
};