import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {DeedContext} from '../context/DeedContext';

function ProfileScreen({user, onLogout}) {
  const {deeds = []} = useContext(DeedContext);

  const totalDeeds = deeds.length;

  const userName = user?.name || 'User';
  const userEmail = user?.email || '';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>

      {/* Profile Header */}

      <View style={styles.profileHeader}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {userName.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.name}>
          {userName}
        </Text>

        <Text style={styles.email}>
          {userEmail}
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
            {totalDeeds > 0 ? 1 : 0}
          </Text>

          <Text style={styles.statLabel}>
            Days
          </Text>
        </View>

      </View>

      {/* Progress */}

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

      {/* Recent Deeds */}

      <Text style={styles.sectionTitle}>
        Your Recent Deeds
      </Text>

      <View style={styles.deedsCard}>

        {totalDeeds === 0 ? (
          <View style={styles.emptyState}>

            <Text style={styles.emptyEmoji}>
              🌱
            </Text>

            <Text style={styles.emptyTitle}>
              No deeds yet
            </Text>

            <Text style={styles.emptyText}>
              Start your good deed journey today.
            </Text>

          </View>
        ) : (
          deeds.slice(0, 3).map(item => (
            <View
              key={item._id}
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

      {/* Logout */}

      <TouchableOpacity
        style={styles.logoutButton}
        activeOpacity={0.8}
        onPress={onLogout}>

        <Text style={styles.logoutText}>
          Log Out
        </Text>

      </TouchableOpacity>

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
    paddingBottom: 40,
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

  email: {
    marginTop: 4,
    fontSize: 13,
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

  deedsCard: {
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },

  deedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
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
    fontSize: 14,
    lineHeight: 20,
    color: '#444444',
  },

  emptyState: {
    alignItems: 'center',
    paddingVertical: 25,
  },

  emptyEmoji: {
    fontSize: 38,
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
    textAlign: 'center',
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

  logoutButton: {
    height: 54,
    marginTop: 25,
    borderRadius: 17,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoutText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});

export default ProfileScreen;