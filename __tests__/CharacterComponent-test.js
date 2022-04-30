/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {CharacterComponent} from '../src/components';

it('renders correctly', () => {
  const tree = renderer.create(<CharacterComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
