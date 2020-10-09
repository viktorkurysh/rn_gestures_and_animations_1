import {StyleSheet} from 'react-native';
import StyleGuide from 'src/constants/styleGuide';
import {CHECK_ICON_SIZE} from './CheckIcon';

export default StyleSheet.create({
  buttonContainer: {
    borderBottomWidth: 1,
    borderColor: '#f4f6f3',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: StyleGuide.spacing * 2 + CHECK_ICON_SIZE,
    padding: StyleGuide.spacing,
  },
});