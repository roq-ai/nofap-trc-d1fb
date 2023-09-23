import * as yup from 'yup';

export const quoteValidationSchema = yup.object().shape({
  quote_text: yup.string().required(),
  content_creator_id: yup.string().nullable().required(),
});
