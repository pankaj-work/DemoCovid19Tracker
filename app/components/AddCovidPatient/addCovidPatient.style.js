import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from '../../lib/normalize';
import THEME from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.$screenBackgroundColor,
    flex: 1,
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  inputData: {
    padding: verticalScale(10),
    backgroundColor: THEME.$white,
    color: THEME.$black,
    marginTop: verticalScale(12),
    height: verticalScale(40),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(4),
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: verticalScale(16),
    marginBottom: verticalScale(10),
  },
  text: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
});

export default styles;
