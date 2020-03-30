import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from '../../../lib/normalize';
import THEME from '../../../config/theme';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: THEME.$buttonColor,
    width: moderateScale(150),
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: THEME.$buttonBorder,
    borderWidth: moderateScale(2),
    marginTop: verticalScale(12),
  },
  buttonText: {
    color: THEME.$black,
    fontSize: scale(18),
  },
});

export default styles;
