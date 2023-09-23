import axios from 'axios';
import queryString from 'query-string';
import { DayStreakInterface, DayStreakGetQueryInterface } from 'interfaces/day-streak';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDayStreaks = async (
  query?: DayStreakGetQueryInterface,
): Promise<PaginatedInterface<DayStreakInterface>> => {
  const response = await axios.get('/api/day-streaks', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDayStreak = async (dayStreak: DayStreakInterface) => {
  const response = await axios.post('/api/day-streaks', dayStreak);
  return response.data;
};

export const updateDayStreakById = async (id: string, dayStreak: DayStreakInterface) => {
  const response = await axios.put(`/api/day-streaks/${id}`, dayStreak);
  return response.data;
};

export const getDayStreakById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/day-streaks/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDayStreakById = async (id: string) => {
  const response = await axios.delete(`/api/day-streaks/${id}`);
  return response.data;
};
