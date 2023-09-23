import * as yup from 'yup';

export const inspirationValidationSchema = yup.object().shape({
  inspiration_text: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
