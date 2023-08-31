import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { routes } from '@/modules/routes';
import { Alert, AppButton, FormControl, FormInput } from '@/components/v2';
import { useRequestSignIn, SignInError } from '../../hooks';
import { StyledDisclaimer } from './SignInForm.styled';
import { StyledAuthPageLogo } from '../AuthPageLayout/AuthPageLayout.styled';
import { InputError } from '@/components/v2/InputError';
import { HyperLink } from '@/components/v2/HyperLink';
import { EMAIL_ERROR, GENERIC_ERROR } from '@/consts/error';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Invalid email address')
    .email('Invalid email address'),
});

type SignInFormProps = {
  redirectUrl?: string;
  data: {
    header: string;
    text: string;
  };
};

export const SignInForm: React.FC<SignInFormProps> = ({ data }) => {
  const { handleSubmit } = useRequestSignIn();
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const formik = useFormik({
    validateOnBlur: true,
    initialValues: {
      email: '',
    },
    onSubmit: async ({ email }, { setErrors }) => {
      try {
        const redirectUrl = await handleSubmit(email);
        router.push(redirectUrl);
      } catch (error) {
        const errorType = (error as Error).message;
        if (errorType === SignInError.NoSuchUserWithEmailError) {
          setErrors({
            email: EMAIL_ERROR,
          });
        } else {
          setFormErrorMessage(GENERIC_ERROR);
        }
      }
    },
    validationSchema,
  });
  return (
    <>
      <StyledAuthPageLogo $showMobile={false}>
        <div className="font-maison-neue-extended-medium text-2xl">
          {data.header}
        </div>
      </StyledAuthPageLogo>
      <StyledAuthPageLogo $showMobile={true}>
        <div className="font-maison-neue-extended-medium text-2xl">
          {data.header}
        </div>
      </StyledAuthPageLogo>
      {formErrorMessage ? (
        <Alert $variant="error" className="">
          {EMAIL_ERROR}
        </Alert>
      ) : (
        <div className="flex justify-center font-maison-neue-book text-gray-700 text-14-px leading-5 pt-2 pb-6">
          {data.text}
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <FormControl $align="left">
          <FormInput
            name="email"
            type="email"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            $size="medium"
            $hasError={!!formik.errors.email}
          />
          {formik.errors.email && (
            <>
              <InputError message={formik.errors.email} />
            </>
          )}
        </FormControl>
        <AppButton
          $block
          $loading={formik.isSubmitting}
          disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
          className="mt-4"
          $size="large"
        >
          Continue
        </AppButton>
      </form>
      <StyledDisclaimer>
        Don{`'`}t have an account?&nbsp;
        <HyperLink href={routes.appFrontend.signUp.fillPath(null)}>
          Sign up
        </HyperLink>
      </StyledDisclaimer>
    </>
  );
};
