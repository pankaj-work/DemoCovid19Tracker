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
  buttonText: {
    color: THEME.$black,
    fontSize: scale(18),
  },
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
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.$white,
    marginTop: verticalScale(12),
    height: verticalScale(40),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(4),
  },
  searchIcon: {
    width: scale(20),
    height: scale(20),
    marginLeft: verticalScale(10),
  },
  searchInput: {
    flex: 1,
    padding: verticalScale(10),
    backgroundColor: THEME.$white,
    color: THEME.$black,
  },
  listTitle: {
    fontSize: scale(16),
    color: THEME.$black,
    marginTop: verticalScale(14),
  },
});

export default styles;
