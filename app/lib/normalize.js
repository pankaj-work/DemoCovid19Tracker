import {width, height} from './deviceDimensions';
import {BASE_DIMENSIONS} from '../constants/appConstants';

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = BASE_DIMENSIONS.mobile.width;
const guidelineBaseHeight = BASE_DIMENSIONS.mobile.height;

const normalizedWidth = (size) => (width / guidelineBaseWidth) * size;
const normalizedHeight = (size) => (height / guidelineBaseHeight) * size;

const scale = (size) => normalizedWidth(size);
const verticalScale = (size) => normalizedHeight(size);
const moderateScale = (size, factor = 0.5) =>
  size + (normalizedWidth(size) - size) * factor;
const lineHeightScale = (fontSize, factor = 1.2) =>
  Math.ceil(normalizedHeight(fontSize * factor));

export {scale, verticalScale, moderateScale, lineHeightScale};
