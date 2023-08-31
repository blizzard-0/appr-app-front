import {
  FormControl,
  FormInput,
  AppButton,
  FormErrorMessage,
} from '@/components/v2';
import React from 'react';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RequestCoverageArgs } from '../..';

export const AboutYou: React.FC<{
  onNext: () => void;
  emailAddress: string;
  formData: RequestCoverageArgs;
  setFormData: (formData: RequestCoverageArgs) => void;
}> = ({ onNext, emailAddress, formData, setFormData }) => {
  const formik = useFormik({
    initialValues: {
      legalName: formData.legalName,
      dateOfBirth: formData.dateOfBirth,
    },
    validationSchema: Yup.object({
      legalName: Yup.string().min(
        2,
        'Legal name must be at least 2 characters',
      ),
      dateOfBirth: Yup.string()
        .matches(
          /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
          'Date of birth must be in the format of MM/DD/YYYY',
        )
        .test(
          'dateOfBirth',
          'You must be at least 21 years old to request coverage',
          (value) => {
            if (!value) return false;
            const today = new Date();
            const birthDate = new Date(value);
            // get difference days between today and birthDate
            const diffDays = Math.floor(
              (today.getTime() - birthDate.getTime()) /
                (1000 * 60 * 60 * 24 * 365),
            );
            return diffDays >= 21;
          },
        ),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      setFormData({
        ...formData,
        legalName: values.legalName,
        dateOfBirth: values.dateOfBirth,
      });
      onNext();
    },
  });

  return (
    <>
      <div className="mb-8">
        <FormControl $align="left">
          <FormInput
            placeholder="Legal name"
            type="text"
            name="legalName"
            onChange={(e) => {
              const latinCharsRegEx =
                /^([A-Za-z\u015E\u011E\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s\'\-]*)$/gi;
              if (e.target.value.match(latinCharsRegEx) != null) {
                formik.handleChange('legalName')(e);
              }
            }}
            onBlur={formik.handleBlur}
            value={formik.values.legalName}
            $hasError={!!formik.errors.legalName && !!formik.touched.legalName}
          />
          {formik.errors.legalName && formik.touched.legalName && (
            <FormErrorMessage>{formik.errors.legalName}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl $align="left" className="mt-4">
          <InputMask
            name="dateOfBirth"
            mask="99/99/9999"
            maskPlaceholder="mm/dd/yyyy"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <FormInput
              placeholder="Date of birth"
              type="text"
              name="name"
              $hasError={
                !!formik.errors.dateOfBirth && !!formik.touched.dateOfBirth
              }
            />
          </InputMask>
          {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
            <FormErrorMessage>{formik.errors.dateOfBirth}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl $align="left" className="mt-4">
          <FormInput
            placeholder="Date of birth"
            type="email"
            value={emailAddress}
            readOnly
          />
        </FormControl>
      </div>
      <div className="flex justify-end">
        <AppButton onClick={formik.submitForm} disabled={!formik.isValid}>
          Continue
        </AppButton>
      </div>
    </>
  );
};
