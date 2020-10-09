import React from 'react';
import {Dimensions} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';
import {FlexibleCard as Card, cards} from 'src/components/Card';
import Selection from 'src/components/Selection';
import StyleGuide from 'src/constants/styleGuide';
import styles from './styles';

const {width} = Dimensions.get('window');
const column = {
  id: 'column',
  name: 'Column',
  layout: {
    container: {},
  },
};
const row = {
  id: 'row',
  name: 'Row',
  layout: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
};
const wrap = {
  id: 'wrap',
  name: 'Wrap',
  layout: {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    child: {
      flex: 0,
      width: width / 2 - StyleGuide.spacing * 2,
    },
  },
};

const layouts = [column, row, wrap];
const transition = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);
const Transitions = () => {
  const ref = React.useRef(null);
  const [currentLayout, setCurrentLayout] = React.useState(layouts[1].layout);

  return (
    <>
      <Transitioning.View
        style={[styles.container, currentLayout.container]}
        {...{ref, transition}}>
        {cards.map((card) => (
          <Card key={card.id} style={currentLayout.child} {...{card}} />
        ))}
      </Transitioning.View>
      {layouts.map((layout) => {
        return (
          <Selection
            key={layout.id}
            name={layout.name}
            isSelected={layout.layout === currentLayout}
            onPress={() => {
              if (ref.current) {
                ref.current.animateNextTransition();
                setCurrentLayout(layout.layout);
              }
            }}
          />
        );
      })}
    </>
  );
};

export default Transitions;
