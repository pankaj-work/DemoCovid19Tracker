import {Dimensions} from 'react-native';
import {BASE_DIMENSIONS} from '../constants/appConstants';

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = BASE_DIMENSIONS.mobile.width;
const guidelineBaseHeight = BASE_DIMENSIONS.mobile.height;
let deviceHeight = Dimensions.get('window').height;

// Fix max height to 812 to avoid overscaling.
deviceHeight = deviceHeight > 812 ? deviceHeight * (667 / 812) : deviceHeight;

const width = deviceHeight * (guidelineBaseWidth / guidelineBaseHeight);
const height = deviceHeight;

export {width, height};
