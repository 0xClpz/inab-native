import React from 'react';
import {Platform} from 'react-native';
import {colors} from '../../constants/colors';
import styled from 'styled-components';

export const _TopBar = styled.View`
  height: 24;
  background-color: ${colors.banner};
`;

export const TopBar = () => (Platform.OS === 'ios' ? null : <_TopBar />);
