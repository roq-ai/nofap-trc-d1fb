import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DayStreakInterface {
  id?: string;
  user_id: string;
  streak_count: number;
  last_streak_date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DayStreakGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
