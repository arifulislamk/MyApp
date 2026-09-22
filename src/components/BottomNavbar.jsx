import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function BottomNavbar({activeScreen, onChangeScreen}) {
  const items = [
    {
      name: 'Home',
      icon: '🏠',
    },
    {
      name: 'Add',
      icon: '➕',
    },
    {
      name: 'Community',
      icon: '🌱',
    },
    {
      name: 'Profile',
      icon: '👤',
    },
  ];

  return (
    <View style={styles.navbar}>
      {items.map(item => {
        const isActive = activeScreen === item.name;

        return (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => onChangeScreen(item.name)}
            activeOpacity={0.7}>
            
            <Text
              style={[
                styles.icon,
                isActive && styles.activeIcon,
              ]}>
              {item.icon}
            </Text>

            <Text
              style={[
                styles.label,
                isActive && styles.activeLabel,
              ]}>
              {item.name}
            </Text>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 72,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    elevation: 10,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 22,
    opacity: 0.55,
  },

  activeIcon: {
    opacity: 1,
  },

  label: {
    marginTop: 4,
    fontSize: 11,
    color: '#888888',
  },

  activeLabel: {
    color: '#F59E0B',
    fontWeight: '700',
  },
});

export default BottomNavbar;