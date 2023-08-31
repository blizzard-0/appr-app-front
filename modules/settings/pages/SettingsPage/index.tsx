import React, { useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';

import { PreUpload } from '@/modules/image-upload/cloudinary';
import { useCurrentUser, useSignOut } from '@/modules/auth/hooks';
import { CurrentUser } from '@/modules/auth/context/types';
import { useToastContext } from '@/modules/toast';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormInput,
  ProgressIndicator,
  AppButton,
  DockedButton,
  Avatar,
  LinkButton,
  Modal,
} from '@/components/v2';

import { InstagramIcon, TikTokIcon, TwitterIcon } from '../../Icons';
import { SettingsPageLayout, InlineInput } from '../../components';
import {
  UpdateUserProfileError,
  useRequestDeleteUser,
  useUpdateUserProfile,
} from '../../hooks';
import { DeleteUserConfirmModal, PickProfilePhotoModal } from '../../Modal';
import {
  SettingsForm,
  SettingsPageContainer,
  SettingsPageFormContent,
  SettingsPageFormContentInner,
  SettingsPageTitle,
  SettingsPageSectionHeading,
  SettingsPageAvatarWrapper,
  SettingsPageDivider,
} from '../../components/SettingsPage/SettingsPage.styled';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .max(24, 'Entry must be between 5 and 24 characters long.')
    .min(5, 'Entry must be between 5 and 24 characters long.')
    .required('Entry must be between 5 and 24 characters long.')
    .matches(/^[a-zA-Z0-9]*$/, 'You’ve entered an invalid character.'),
  fullName: Yup.string()
    .required('Your full name must be at least 2 characters long.')
    .min(2, 'Your full name must be at least 2 characters long.'),
  // instagram: Yup.string().url('Invalid URL provided!'),
  // tiktok: Yup.string().url('Invalid URL provided!'),
  // twitter: Yup.string().url('Invalid URL provided!'),
});

const SettingsPageInner: React.FC<{ currentUser: CurrentUser }> = ({
  currentUser,
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const router = useRouter();
  const [preUpload, setPreUpload] = useState<PreUpload | null>(null);
  const { pushError, pushSuccess } = useToastContext();
  const [showLogout, setShowLogout] = useState(false);
  const { signOut } = useSignOut();

  const { handleUpdateUserProfile, loading } = useUpdateUserProfile();
  const { handleRequestDeleteUser, loading: requestDeleteTokenLoading } =
    useRequestDeleteUser();

  const closeDeleteConfirmation = useCallback(
    () => setDeleteConfirmation(false),
    [setDeleteConfirmation],
  );

  const sendDeleteConfirmation = useCallback(async () => {
    setDeleteConfirmation(false);
    try {
      const redirectUrl = await handleRequestDeleteUser(
        currentUser.primaryEmailAddress,
      );
      router.push(redirectUrl);
    } catch {
      pushError('Something went wrong, please try again later.');
    }
  }, [handleRequestDeleteUser, currentUser, pushError, router]);

  const handlePreUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.length) {
        return;
      }
      const avatarImage = e.target.files[0];
      e.target.value = '';
      const preUpload: PreUpload = {
        imageUploadId: uuid(),
        file: avatarImage,
        uploadSource: 'filesystem',
      };
      setPreUpload(preUpload);
    },
    [],
  );

  const formik = useFormik({
    initialValues: {
      username: currentUser.username || '',
      fullName: currentUser.fullName || '',
      instagram: currentUser.socialAccounts.instagram || '',
      tiktok: currentUser.socialAccounts.tiktok || '',
      twitter: currentUser.socialAccounts.twitter || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        handleUpdateUserProfile(values);
        formik.resetForm({ values });
        pushSuccess('You’ve successfully updated your profile.');
      } catch (err) {
        const errCode = (err as Error).message;
        if (errCode === UpdateUserProfileError.InvalidFullNameError) {
          formik.setErrors({
            fullName: 'Your full name must be at least 2 characters long.',
          });
          return;
        }
        if (errCode === UpdateUserProfileError.UsernameAlreadyTakenError) {
          formik.setErrors({
            username: 'This username is already in use.',
          });
          return;
        }
        pushError('Something went wrong, please try again later.');
        return;
      }
    },
  });

  return (
    <>
      <SettingsForm onSubmit={formik.handleSubmit}>
        <SettingsPageContainer>
          <SettingsPageTitle>Account</SettingsPageTitle>
          <SettingsPageFormContent>
            <SettingsPageFormContentInner>
              <SettingsPageAvatarWrapper>
                <Avatar
                  avatarUrl={currentUser.avatarImage?.url}
                  userName={currentUser.fullName}
                  onUploadAvatar={handlePreUpload}
                  $size="small"
                />
                <p className="flex-1">Change Profile Avatar</p>
              </SettingsPageAvatarWrapper>

              <FormControl $align="left" className="mb-5">
                <FormLabel>Username</FormLabel>
                <FormInput
                  id="username"
                  name="username"
                  placeholder="username"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.username.toLowerCase()}
                />
                {formik.errors.username && (
                  <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl $align="left" className="mb-5">
                <FormLabel>Full Name</FormLabel>
                <FormInput
                  id="fullName"
                  name="fullName"
                  placeholder=""
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                />
                {formik.errors.fullName && (
                  <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl $align="left">
                <FormLabel>Email</FormLabel>
                <p className="text-base leading-6 tracking-wider text-gray-900 truncate">
                  {currentUser.primaryEmailAddress}
                </p>
              </FormControl>
              <SettingsPageDivider />
              <SettingsPageSectionHeading>
                Social Accounts
              </SettingsPageSectionHeading>
              <InlineInput title="Instagram" icon={<InstagramIcon />}>
                <FormInput
                  type="text"
                  value={formik.values.instagram.trim()}
                  onChange={formik.handleChange}
                  name="instagram"
                  placeholder="Enter handle"
                  $noBorder
                />
              </InlineInput>
              <InlineInput title="Twitter" icon={<TwitterIcon />}>
                <FormInput
                  type="text"
                  value={formik.values.twitter.trim()}
                  onChange={formik.handleChange}
                  name="twitter"
                  placeholder="Enter handle"
                  $noBorder
                />
              </InlineInput>
              <InlineInput title="TikTok" icon={<TikTokIcon />}>
                <FormInput
                  type="text"
                  value={formik.values.tiktok.trim()}
                  onChange={formik.handleChange}
                  name="tiktok"
                  placeholder="Enter handle"
                  $noBorder
                />
              </InlineInput>
              <SettingsPageDivider />
              <SettingsPageSectionHeading>
                Danger Zone
              </SettingsPageSectionHeading>
              <LinkButton
                $noUnderline
                $color="danger"
                className="tracking-wider"
                onClick={() => setDeleteConfirmation(true)}
                type="button"
              >
                Delete your account
              </LinkButton>
              <SettingsPageDivider />
              <LinkButton
                $color="danger"
                $noUnderline
                className="tracking-wider mb-8"
                type="button"
                onClick={() => setShowLogout(true)}
              >
                Log Out
              </LinkButton>
            </SettingsPageFormContentInner>
            <DockedButton>
              <AppButton
                disabled={
                  !formik.dirty || !formik.isValid || formik.isSubmitting
                }
                type="submit"
                $variant="primary"
                $loading={loading}
                $block
              >
                Save
              </AppButton>
            </DockedButton>
          </SettingsPageFormContent>
        </SettingsPageContainer>
      </SettingsForm>
      <DeleteUserConfirmModal
        active={deleteConfirmation}
        onClose={closeDeleteConfirmation}
        onProceed={sendDeleteConfirmation}
      />
      <PickProfilePhotoModal
        preUpload={preUpload}
        onClose={() => setPreUpload(null)}
      />
      <ProgressIndicator active={requestDeleteTokenLoading} />
      <Modal.Base
        $size="medium"
        $show={showLogout}
        onClose={() => setShowLogout(false)}
      >
        <Modal.Header>Log out?</Modal.Header>
        <Modal.Content className="p-5 text-center">
          We{"'"}ll be here when you get back. <br /> Please confirm below.
        </Modal.Content>
        <Modal.Footer>
          <DockedButton>
            <AppButton $variant="primary" onClick={signOut} $block>
              <span className="hidden sm:inline-flex">Yes,&nbsp;</span>Log out
            </AppButton>
            <AppButton
              $variant="secondary"
              onClick={() => setShowLogout(false)}
              $block
            >
              Cancel
            </AppButton>
          </DockedButton>
        </Modal.Footer>
      </Modal.Base>
    </>
  );
};

export const SettingsPage: React.FC = () => {
  const { currentUser } = useCurrentUser();

  const innerChildren = useMemo(() => {
    if (!currentUser) return null;
    return <SettingsPageInner currentUser={currentUser} />;
  }, [currentUser]);

  return <SettingsPageLayout>{innerChildren}</SettingsPageLayout>;
};
