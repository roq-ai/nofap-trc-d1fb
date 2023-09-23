import * as yup from 'yup';

export const dayStreakValidationSchema = yup.object().shape({
  streak_count: yup.number().integer().required(),
  last_streak_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
