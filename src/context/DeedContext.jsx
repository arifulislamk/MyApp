import React, {
  createContext,
  useEffect,
  useState,
} from 'react';

export const DeedContext = createContext();

const API_URL = 'http://localhost:5000';

export function DeedProvider({
  children,
  user,
  token,
}) {
  const [deeds, setDeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  /* =========================
     FETCH USER DEEDS
  ========================= */

  const fetchDeeds = async () => {
    if (!user?._id) {
      setDeeds([]);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/api/deeds/user/${user._id}`,
      );

      if (!response.ok) {
        throw new Error('Failed to fetch deeds');
      }

      const data = await response.json();

      setDeeds(data);
    } catch (error) {
      console.error('Fetch deeds error:', error);
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     ADD DEED
  ========================= */

  const addDeed = async text => {
    if (!user?._id) {
      throw new Error('User is not logged in');
    }

    try {
      const response = await fetch(
        `${API_URL}/api/deeds`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',

            ...(token && {
              Authorization: `Bearer ${token}`,
            }),
          },

          body: JSON.stringify({
            text: text,
            userId: user._id,
            userName: user.name,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to create deed',
        );
      }

      setDeeds(prevDeeds => [
        data.deed,
        ...prevDeeds,
      ]);

      return data.deed;
    } catch (error) {
      console.error('Add deed error:', error);
      throw error;
    }
  };

  /* =========================
     DELETE DEED
  ========================= */

  const deleteDeed = async id => {
    try {
      const response = await fetch(
        `${API_URL}/api/deeds/${id}`,
        {
          method: 'DELETE',

          headers: {
            ...(token && {
              Authorization: `Bearer ${token}`,
            }),
          },
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to delete deed',
        );
      }

      setDeeds(prevDeeds =>
        prevDeeds.filter(
          deed => deed._id !== id,
        ),
      );
    } catch (error) {
      console.error('Delete deed error:', error);
      throw error;
    }
  };

  /* =========================
     LOAD DEEDS
  ========================= */

  useEffect(() => {
    if (user?._id) {
      fetchDeeds();
    } else {
      setDeeds([]);
    }
  }, [user?._id]);

  return (
    <DeedContext.Provider
      value={{
        deeds,
        loading,
        addDeed,
        deleteDeed,
        fetchDeeds,
        user,
        token,
      }}>
      {children}
    </DeedContext.Provider>
  );
}