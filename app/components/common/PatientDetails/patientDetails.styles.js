import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from '../../../lib/normalize';
import THEME from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(12),
    flex: 1,
    flexDirection: 'row',
    backgroundColor: THEME.$veryPaleOrange,
    padding: moderateScale(10),
    borderWidth: moderateScale(2),
    borderColor: THEME.$strongOrange,
    borderRadius: verticalScale(15),
  },
  details: {
    flex: 4,
  },
  detailText: {
    fontSize: scale(12),
    fontWeight: 'bold',
  },
  status: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: scale(40),
    height: scale(40),
  },
});

export default styles;
