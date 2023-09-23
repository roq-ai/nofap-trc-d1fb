import * as yup from 'yup';

export const dayPlannerValidationSchema = yup.object().shape({
  plan_date: yup.date().required(),
  activities: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
