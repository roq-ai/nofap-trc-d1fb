import axios from 'axios';
import queryString from 'query-string';
import { DayPlannerInterface, DayPlannerGetQueryInterface } from 'interfaces/day-planner';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDayPlanners = async (
  query?: DayPlannerGetQueryInterface,
): Promise<PaginatedInterface<DayPlannerInterface>> => {
  const response = await axios.get('/api/day-planners', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDayPlanner = async (dayPlanner: DayPlannerInterface) => {
  const response = await axios.post('/api/day-planners', dayPlanner);
  return response.data;
};

export const updateDayPlannerById = async (id: string, dayPlanner: DayPlannerInterface) => {
  const response = await axios.put(`/api/day-planners/${id}`, dayPlanner);
  return response.data;
};

export const getDayPlannerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/day-planners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDayPlannerById = async (id: string) => {
  const response = await axios.delete(`/api/day-planners/${id}`);
  return response.data;
};
