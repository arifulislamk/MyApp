import React, {createContext, useEffect, useState} from 'react';

export const DeedContext = createContext();

const API_URL = 'http://localhost:5000';

export function DeedProvider({children}) {
  const [deeds, setDeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // GET DEEDS FROM MONGODB
  // =========================

  const fetchDeeds = async () => {
    try {
      const response = await fetch(`${API_URL}/api/deeds`);

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

  // =========================
  // ADD DEED
  // =========================

  const addDeed = async text => {
    try {
      const response = await fetch(`${API_URL}/api/deeds`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          text: text,
          userId: 'demo-user',
          userName: 'Robin',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create deed');
      }

      const data = await response.json();

      // Add newly created deed to current state
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

  // =========================
  // DELETE DEED
  // =========================

  const deleteDeed = async id => {
    try {
      const response = await fetch(
        `${API_URL}/api/deeds/${id}`,
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        throw new Error('Failed to delete deed');
      }

      setDeeds(prevDeeds =>
        prevDeeds.filter(deed => deed._id !== id),
      );
    } catch (error) {
      console.error('Delete deed error:', error);
      throw error;
    }
  };

  // =========================
  // LOAD DATA WHEN APP STARTS
  // =========================

  useEffect(() => {
    fetchDeeds();
  }, []);

  return (
    <DeedContext.Provider
      value={{
        deeds,
        loading,
        addDeed,
        deleteDeed,
        fetchDeeds,
      }}>
      {children}
    </DeedContext.Provider>
  );
}