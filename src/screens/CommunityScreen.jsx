import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Config from 'react-native-config';

const API_URL = Config.API_URL;

function CommunityScreen() {
  const [deeds, setDeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // =========================
  // FETCH ALL COMMUNITY DEEDS
  // =========================

  const fetchCommunityDeeds = async () => {
    try {
      const response = await fetch(`${API_URL}/api/deeds`);

      if (!response.ok) {
        throw new Error('Failed to fetch community deeds');
      }

      const data = await response.json();

      setDeeds(data);
    } catch (error) {
      console.error('Community fetch error:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {
    fetchCommunityDeeds();
  }, []);

  // =========================
  // PULL TO REFRESH
  // =========================

  const onRefresh = () => {
    setRefreshing(true);
    fetchCommunityDeeds();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>Community 🌱</Text>

        <Text style={styles.subtitle}>Small actions. Big impact.</Text>
      </View>

      {/* Community Stats */}

      <View style={styles.statsCard}>
        <Text style={styles.statsNumber}>{deeds.length}</Text>

        <Text style={styles.statsLabel}>Good Deeds Shared</Text>
      </View>

      {/* Section */}

      <Text style={styles.sectionTitle}>Recent Good Deeds</Text>

      {/* Feed */}

      <View style={styles.feedCard}>
        {loading ? (
          <View style={styles.loadingState}>
            <ActivityIndicator size="large" color="#F59E0B" />

            <Text style={styles.loadingText}>Loading community...</Text>
          </View>
        ) : deeds.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>🌱</Text>

            <Text style={styles.emptyTitle}>The community is waiting</Text>

            <Text style={styles.emptyText}>
              Be the first to share a good deed!
            </Text>
          </View>
        ) : (
          deeds.map(item => (
            <View key={item._id} style={styles.deedItem}>
              {/* Avatar */}

              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.userName ? item.userName.charAt(0).toUpperCase() : 'U'}
                </Text>
              </View>

              {/* Content */}

              <View style={styles.deedContent}>
                <Text style={styles.userName}>{item.userName || 'User'}</Text>

                <Text style={styles.deedText}>{item.text}</Text>

                <Text style={styles.time}>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : ''}
                </Text>
              </View>

              {/* Likes */}

              <Text style={styles.heart}>♡</Text>
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
    paddingBottom: 35,
  },

  header: {
    marginTop: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#222222',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: '#777777',
  },

  statsCard: {
    marginTop: 22,
    padding: 22,
    borderRadius: 22,
    backgroundColor: '#F59E0B',
    alignItems: 'center',
  },

  statsNumber: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  statsLabel: {
    marginTop: 4,
    fontSize: 14,
    color: '#FFF8E1',
  },

  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '800',
    color: '#222222',
  },

  feedCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
  },

  deedItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF1CC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#F59E0B',
  },

  deedContent: {
    flex: 1,
    marginLeft: 12,
  },

  userName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#222222',
  },

  deedText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: '#555555',
  },

  time: {
    marginTop: 5,
    fontSize: 11,
    color: '#AAAAAA',
  },

  heart: {
    marginLeft: 8,
    fontSize: 25,
    color: '#AAAAAA',
  },

  loadingState: {
    alignItems: 'center',
    paddingVertical: 35,
  },

  loadingText: {
    marginTop: 10,
    fontSize: 13,
    color: '#888888',
  },

  emptyState: {
    alignItems: 'center',
    paddingVertical: 35,
  },

  emptyEmoji: {
    fontSize: 42,
  },

  emptyTitle: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: '700',
    color: '#333333',
  },

  emptyText: {
    marginTop: 6,
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
  },
});

export default CommunityScreen;
