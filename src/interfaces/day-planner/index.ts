import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DayPlannerInterface {
  id?: string;
  user_id: string;
  plan_date: any;
  activities: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DayPlannerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  activities?: string;
}
