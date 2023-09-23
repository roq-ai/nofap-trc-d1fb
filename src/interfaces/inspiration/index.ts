import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InspirationInterface {
  id?: string;
  user_id: string;
  inspiration_text: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface InspirationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  inspiration_text?: string;
}
