/*
    Material design specs
    -> https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textWithBadge: {
    paddingRight: 5,
  },
  activeItem: {
    textColor: {
      color: '#1578c6',
    },
    backgroundColor: {
      backgroundColor: 'rgba(0, 0, 0, 0.15)',
    },
  },
  inactiveItem: {
    textColor: {
      color: 'rgba(0, 0, 0, .85)',
    },
    backgroundColor: {
      backgroundColor: 'transparent',
    },
  },
});
