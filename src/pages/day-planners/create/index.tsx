import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createDayPlanner } from 'apiSdk/day-planners';
import { dayPlannerValidationSchema } from 'validationSchema/day-planners';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { DayPlannerInterface } from 'interfaces/day-planner';

function DayPlannerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: DayPlannerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createDayPlanner(values);
      resetForm();
      router.push('/day-planners');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<DayPlannerInterface>({
    initialValues: {
      plan_date: new Date(new Date().toDateString()),
      activities: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: dayPlannerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Day Planners',
              link: '/day-planners',
            },
            {
              label: 'Create Day Planner',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Day Planner
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="plan_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Plan Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.plan_date ? new Date(formik.values?.plan_date) : null}
              onChange={(value: Date) => formik.setFieldValue('plan_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.activities}
            label={'Activities'}
            props={{
              name: 'activities',
              placeholder: 'Activities',
              value: formik.values?.activities,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/day-planners')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'day_planner',
    operation: AccessOperationEnum.CREATE,
  }),
)(DayPlannerCreatePage);
