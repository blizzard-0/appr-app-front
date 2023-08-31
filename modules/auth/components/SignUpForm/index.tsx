import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { routes } from '@/modules/routes';
import { gtagReport } from '@/utils/gtag';
import { Alert, AppButton, FormControl, FormInput } from '@/components/v2';
import { useRequestSignUp, SignUpError } from '../../hooks';
import { StyledDisclaimer } from './SignUpForm.styled';
import {
  StyledAuthPageLogo,
  StyledTos,
} from '../AuthPageLayout/AuthPageLayout.styled';
import { InputError } from '@/components/v2/InputError';
import { HyperLink } from '@/components/v2/HyperLink';
import { GENERIC_ERROR, IN_USE_ERROR } from '@/consts/error';

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Must be 2 characters or more.')
    .required('Name cannot be blank.'),
  email: Yup.string()
    .required('Invalid email address.')
    .email('Invalid email address.'),
});

export const SignUpForm: React.FC = () => {
  const { handleSubmit } = useRequestSignUp();
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const { affiliateId } = router.query;
  const formik = useFormik({
    validateOnBlur: true,
    initialValues: {
      fullname: '',
      email: '',
    },
    validationSchema,
    onSubmit: async ({ email, fullname }, { setErrors }) => {
      gtagReport();
      try {
        const redirectUrl = await handleSubmit(
          email,
          fullname,
          affiliateId?.toString(),
        );
        router.push(redirectUrl);
      } catch (error) {
        const errorType = (error as Error).message;
        if (errorType === SignUpError.EmailAlreadyTakenError) {
          setErrors({
            email: IN_USE_ERROR,
          });
        } else {
          setFormErrorMessage(GENERIC_ERROR);
        }
      }
    },
  });
  return (
    <>
      <StyledAuthPageLogo $showMobile={false}>
        <div className="font-maison-neue-extended-medium text-2xl">
          Create your account
        </div>
      </StyledAuthPageLogo>
      <StyledAuthPageLogo $showMobile={true}>
        <div className="font-maison-neue-extended-medium text-2xl">
          Create your account
        </div>
      </StyledAuthPageLogo>
      {formErrorMessage ? (
        <Alert $variant="error" className="">
          {GENERIC_ERROR}
        </Alert>
      ) : (
        <StyledDisclaimer className="pb-4">
          Have an acccount?&nbsp;
          <HyperLink href={routes.appFrontend.logIn.fillPath(null)}>
            Sign in
          </HyperLink>
        </StyledDisclaimer>
      )}
      <form onSubmit={formik.handleSubmit}>
        <FormControl $align="left">
          <FormInput
            placeholder="Enter Email Address"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            $size="medium"
            $hasError={!!formik.errors.email && formik.touched.email}
          />
          {formik.touched.email && (
            <>
              {formik.errors.email && (
                <InputError message={formik.errors.email} />
              )}
              {formErrorMessage && <InputError message={IN_USE_ERROR} />}
            </>
          )}
        </FormControl>
        <FormControl $align="left">
          <FormInput
            className="mt-4"
            placeholder="Enter Full Name"
            type="text"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="fullname"
            $size="medium"
            $hasError={!!formik.errors.fullname && formik.touched.fullname}
          />
          {formik.errors.fullname && formik.touched.fullname && (
            <>
              <InputError message={formik.errors.fullname} />
            </>
          )}
        </FormControl>
        <div>
          <StyledTos className="mt-4 mb-9">
            By creating an account above you certify that you are at least 18
            years of age and have read and agree with our{' '}
            <HyperLink href="/tos">terms and conditions</HyperLink> appreciate
            may send you communications; you may change your preferences in your
            settings.
          </StyledTos>
        </div>
        <AppButton
          type="submit"
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          $loading={formik.isSubmitting}
          $block
          className="max-h-51-px"
          $size="large"
        >
          Continue
        </AppButton>
      </form>
    </>
  );
};
