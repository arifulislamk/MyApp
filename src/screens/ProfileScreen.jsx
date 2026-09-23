import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {DeedContext} from '../context/DeedContext';

function ProfileScreen() {
  const {deeds} = useContext(DeedContext);

  const totalDeeds = deeds.length;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      {/* Profile Header */}
      <View style={styles.profileHeader}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            R
          </Text>
        </View>

        <Text style={styles.name}>
          Robin
        </Text>

        <Text style={styles.username}>
          @robin
        </Text>

        <Text style={styles.bio}>
          Making the world a little better, one deed at a time. 🌱
        </Text>

      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            {totalDeeds}
          </Text>

          <Text style={styles.statLabel}>
            Deeds
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            0
          </Text>

          <Text style={styles.statLabel}>
            Likes
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>
            1
          </Text>

          <Text style={styles.statLabel}>
            Day
          </Text>
        </View>

      </View>

      {/* Achievement */}
      <Text style={styles.sectionTitle}>
        Your Progress
      </Text>

      <View style={styles.progressCard}>

        <View style={styles.progressTop}>

          <View>
            <Text style={styles.progressTitle}>
              Good Deed Journey
            </Text>

            <Text style={styles.progressSubtitle}>
              {totalDeeds} / 100 deeds completed
            </Text>
          </View>

          <Text style={styles.progressEmoji}>
            🏆
          </Text>

        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${Math.min(totalDeeds, 100)}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.progressText}>
          {totalDeeds >= 100
            ? 'You reached your goal! 🎉'
            : `${100 - totalDeeds} more deeds to reach your goal.`}
        </Text>

      </View>

      {/* About */}
      <Text style={styles.sectionTitle}>
        About GoodDeeds
      </Text>

      <View style={styles.aboutCard}>

        <Text style={styles.aboutEmoji}>
          💛
        </Text>

        <Text style={styles.aboutText}>
          GoodDeeds is a place where small positive actions
          become meaningful habits. Share your deeds,
          inspire others, and make kindness part of your day.
        </Text>

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
    paddingBottom: 35,
  },

  profileHeader: {
    alignItems: 'center',
    marginTop: 15,
  },

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  name: {
    marginTop: 14,
    fontSize: 27,
    fontWeight: '800',
    color: '#222222',
  },

  username: {
    marginTop: 3,
    fontSize: 14,
    color: '#999999',
  },

  bio: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#666666',
    paddingHorizontal: 20,
  },

  statsContainer: {
    marginTop: 24,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  statBox: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 23,
    fontWeight: '800',
    color: '#222222',
  },

  statLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#888888',
  },

  divider: {
    width: 1,
    height: 35,
    backgroundColor: '#EEEEEE',
  },

  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '800',
    color: '#222222',
  },

  progressCard: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },

  progressTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  progressTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },

  progressSubtitle: {
    marginTop: 5,
    fontSize: 12,
    color: '#888888',
  },

  progressEmoji: {
    fontSize: 30,
  },

  progressBackground: {
    height: 9,
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

  progressText: {
    marginTop: 9,
    fontSize: 12,
    color: '#777777',
  },

  aboutCard: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  aboutEmoji: {
    fontSize: 27,
    marginRight: 12,
  },

  aboutText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: '#666666',
  },
});

export default ProfileScreen;