import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, ApplicationProvider  } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default InputSizeShowcase = () => {

  const smallInputState = useInputState();
  const mediumInputState = useInputState();
  const largeInputState = useInputState();
  const multilineInputState = useInputState();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <React.Fragment>
        
  

     
      </React.Fragment>
    </ApplicationProvider>

  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
    borderWidth:5,
    borderColor:'red',
    backgroundColor:'green'
  },
});

