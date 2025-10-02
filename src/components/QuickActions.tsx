import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type QuickAction = {
  id: string;
  label: string;
  icon: string;
  onPress?: () => void;
};

export const DEFAULT_ACTIONS: QuickAction[] = [
  { id: 'teams', label: 'Team & Athletes', icon: 'account-group-outline' },
  {
    id: 'weighin',
    label: 'Random Weigh In',
    icon: 'human-male-height-variant',
  },
  { id: 'draw', label: 'Draw List', icon: 'format-list-bulleted' },
  { id: 'live', label: 'Live Results', icon: 'broadcast' },
  { id: 'moved', label: 'Moved Matches', icon: 'swap-horizontal' },
];

type Props = { actions?: QuickAction[] };

const QuickActions = ({ actions = DEFAULT_ACTIONS }: Props) => {
  return (
    <View style={styles.quickActions}>
      {actions.map(a => (
        <TouchableOpacity
          key={a.id}
          style={styles.quickActionItem}
          activeOpacity={0.7}
          onPress={a.onPress}
        >
          <View style={styles.quickIconPlaceholder}>
            <Icon name={a.icon as any} size={22} color="#333" />
          </View>
          <Text style={styles.quickLabel} numberOfLines={2}>
            {a.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  quickActionItem: { width: `${100 / 5}%`, alignItems: 'center' },
  quickIconPlaceholder: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#efefef',
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickLabel: {
    textAlign: 'center',
    fontSize: 10,
    color: '#333',
    lineHeight: 12,
  },
});

export default QuickActions;
