import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {DeedContext} from '../context/DeedContext';

function HomeScreen({onChangeScreen}) {
  const {deeds} = useContext(DeedContext);

  const completed = deeds.length;
  const target = 100;
  const progress = Math.min(completed / target, 1);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>
            Good morning 👋
          </Text>

          <Text style={styles.name}>
            Robin
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            R
          </Text>
        </View>
      </View>

      {/* Hero */}
      <View style={styles.heroCard}>
        <Text style={styles.heroEmoji}>
          ✨
        </Text>

        <Text style={styles.heroTitle}>
          Make today a little better.
        </Text>

        <Text style={styles.heroSubtitle}>
          Every good deed counts. Keep spreading kindness.
        </Text>
      </View>

      {/* Progress */}
      <View style={styles.progressCard}>

        <View style={styles.progressHeader}>
          <View>
            <Text style={styles.cardLabel}>
              TODAY'S PROGRESS
            </Text>

            <Text style={styles.progressNumber}>
              {completed}
              <Text style={styles.targetText}>
                {' '} / {target}
              </Text>
            </Text>
          </View>

          <Text style={styles.progressEmoji}>
            🌱
          </Text>
        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${progress * 100}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.progressMessage}>
          {completed === 0
            ? 'Start your first good deed today!'
            : completed >= target
            ? 'Amazing! You reached your daily goal! 🎉'
            : `${target - completed} more deeds to reach your goal.`}
        </Text>

      </View>

      {/* Add Deed Button */}
      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.8}
        onPress={() => onChangeScreen('Add')}>

        <Text style={styles.addIcon}>
          ＋
        </Text>

        <Text style={styles.addButtonText}>
          Add a Good Deed
        </Text>

      </TouchableOpacity>

      {/* Recent Deeds Header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Recent Deeds
        </Text>

        <TouchableOpacity
          onPress={() => onChangeScreen('Community')}>
          <Text style={styles.seeAll}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Deeds */}
      <View style={styles.deedsCard}>

        {deeds.length === 0 ? (
          <View style={styles.emptyState}>

            <Text style={styles.emptyEmoji}>
              🌱
            </Text>

            <Text style={styles.emptyTitle}>
              No deeds yet
            </Text>

            <Text style={styles.emptyText}>
              Your good deeds will appear here.
            </Text>

          </View>
        ) : (
          deeds
            .slice(-3)
            .reverse()
            .map(item => (
              <View
                key={item.id}
                style={styles.deedItem}>

                <View style={styles.checkCircle}>
                  <Text style={styles.check}>
                    ✓
                  </Text>
                </View>

                <Text style={styles.deedText}>
                  {item.text}
                </Text>

              </View>
            ))
        )}

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9EC',
  },

  content: {
    padding: 20,
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  smallText: {
    fontSize: 14,
    color: '#8A8A8A',
  },

  name: {
    marginTop: 3,
    fontSize: 28,
    fontWeight: '800',
    color: '#222222',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  heroCard: {
    marginTop: 25,
    padding: 24,
    borderRadius: 24,
    backgroundColor: '#F59E0B',
  },

  heroEmoji: {
    fontSize: 28,
  },

  heroTitle: {
    marginTop: 12,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  heroSubtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: '#FFF8E1',
  },

  progressCard: {
    marginTop: 18,
    padding: 20,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#999999',
  },

  progressNumber: {
    marginTop: 5,
    fontSize: 32,
    fontWeight: '800',
    color: '#222222',
  },

  targetText: {
    fontSize: 18,
    color: '#999999',
  },

  progressEmoji: {
    fontSize: 30,
  },

  progressBackground: {
    height: 10,
    marginTop: 18,
    borderRadius: 10,
    backgroundColor: '#F1F1F1',
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#F59E0B',
  },

  progressMessage: {
    marginTop: 10,
    fontSize: 13,
    color: '#777777',
  },

  addButton: {
    marginTop: 18,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#222222',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addIcon: {
    fontSize: 24,
    color: '#FFFFFF',
    marginRight: 8,
  },

  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  sectionHeader: {
    marginTop: 28,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222222',
  },

  seeAll: {
    fontSize: 13,
    fontWeight: '600',
    color: '#F59E0B',
  },

  deedsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
  },

  emptyState: {
    alignItems: 'center',
    paddingVertical: 20,
  },

  emptyEmoji: {
    fontSize: 35,
  },

  emptyTitle: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: '700',
    color: '#333333',
  },

  emptyText: {
    marginTop: 5,
    fontSize: 13,
    color: '#888888',
  },

  deedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },

  checkCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFF1CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  check: {
    fontSize: 17,
    fontWeight: '800',
    color: '#F59E0B',
  },

  deedText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 21,
    color: '#444444',
  },
});

export default HomeScreen;