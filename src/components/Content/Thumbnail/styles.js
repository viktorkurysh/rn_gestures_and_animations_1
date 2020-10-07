import {StyleSheet} from 'react-native';
import StyleGuide from 'src/constants/styleGuide';

export default StyleSheet.create({
  container: {
    margin: StyleGuide.spacing * 2,
    marginBottom: 0,
    borderRadius: 8,
    flex: 1,
    height: 150,
    overflow: 'hidden',
    backgroundColor: StyleGuide.palette.backgroundPrimary,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    width: undefined,
    height: undefined,
    transform: [{scale: 1}],
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    padding: StyleGuide.spacing,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#2F2E41',
  },
});
