import axios from 'axios';
import queryString from 'query-string';
import { InspirationInterface, InspirationGetQueryInterface } from 'interfaces/inspiration';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInspirations = async (
  query?: InspirationGetQueryInterface,
): Promise<PaginatedInterface<InspirationInterface>> => {
  const response = await axios.get('/api/inspirations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInspiration = async (inspiration: InspirationInterface) => {
  const response = await axios.post('/api/inspirations', inspiration);
  return response.data;
};

export const updateInspirationById = async (id: string, inspiration: InspirationInterface) => {
  const response = await axios.put(`/api/inspirations/${id}`, inspiration);
  return response.data;
};

export const getInspirationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/inspirations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInspirationById = async (id: string) => {
  const response = await axios.delete(`/api/inspirations/${id}`);
  return response.data;
};
