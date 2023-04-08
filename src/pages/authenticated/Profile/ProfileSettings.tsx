import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Button';
import { useAuth } from '../../../contexts/Auth/useAuth';
import { useAddEmailMutation, useUpdatePriceDifferenceMutation } from '../../../graphql/generated/hooks';
import { User } from '../../../graphql/generated/types';
import { EMAIL_REGEX } from '../../unauthenticated/AddEmailPage/AddEmailPage';

type FormInputs = {
  email: string;
  priceDifference?: number;
};

const ProfileSettings = () => {
  const { myUser, setMyUser } = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: { email: myUser?.email || '', priceDifference: myUser?.priceDifference || 5 } });

  const [addEmail, { loading: addEmailLoading, error: addEmailError }] = useAddEmailMutation({
    onCompleted: ({ addEmail }) => {
      setMyUser(addEmail as User);
    }
  });

  const [updatePriceDifference, { loading: priceDifferenceLoading, error: priceDifferenceError }] =
    useUpdatePriceDifferenceMutation({
      onCompleted: ({ updatePriceDifference }) => {
        setMyUser(updatePriceDifference as User);
      }
    });

  const onSubmit = ({ email, priceDifference }: FormInputs) => {
    const emailHasBeenAltered = email !== myUser?.email;
    const differenceHasBeenAltered = priceDifference !== myUser?.priceDifference;

    if (emailHasBeenAltered) addEmail({ variables: { email } });
    if (differenceHasBeenAltered)
      updatePriceDifference({ variables: { priceDifference: Number(priceDifference) || 5 } });
  };

  const formValues = watch();

  const [formHasBeenTouched, setFormHasBeenTouched] = useState(false);

  useEffect(() => {
    const emailHasBeenAltered = getValues('email') !== myUser?.email;
    const differenceHasBeenAltered = getValues('priceDifference') !== myUser?.priceDifference;

    setFormHasBeenTouched(differenceHasBeenAltered || emailHasBeenAltered);
  }, [formValues]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-dark-90 rounded-[14px] p-6 mt-6 flex flex-col space-y-6">
      <div className="flex flex-col space-y-3">
        <span className="text-lg font-medium">Email</span>
        <input
          placeholder="Add email"
          className="rounded-2xl bg-dark-100 placeholder:text-dark-60 py-3 px-5 text-white w-full"
          {...register('email', {
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email address'
            }
          })}
        />
        {!!errors.email && <span className="text-alert-100 text-sm">{errors.email.message}</span>}
      </div>
      {!!myUser?.email && (
        <div className="flex flex-col space-y-3">
          <span className="text-lg font-medium">Price difference</span>
          <div className="rounded-2xl bg-dark-100 w-full flex items-center relative">
            <span className="text-dark-40 absolute left-5">%</span>
            <input
              placeholder="Difference"
              type="number"
              {...register('priceDifference', {
                required: 'This field is required',
                min: { value: 1, message: 'Difference cannot be lower than 1%' },
                max: { value: 100, message: 'Difference cannot be more than 100%' }
              })}
              className="rounded-2xl bg-dark-100 placeholder:text-dark-60 py-3 px-10 text-white w-full"
            />
          </div>
          {!!errors.priceDifference && <span className="text-alert-100 text-sm">{errors.priceDifference.message}</span>}
          <span className="text-dark-20 text-sm">
            We will email you if any of your favorited collections floor price moves by this amount{' '}
          </span>
        </div>
      )}
      {formHasBeenTouched && (
        <Button variant="small" isActionLoading={addEmailLoading || priceDifferenceLoading}>
          Update
        </Button>
      )}
      {!!addEmailError && <span className="text-alert-100 text-sm">{addEmailError.message}</span>}
      {!!priceDifferenceError && <span className="text-alert-100 text-sm">{priceDifferenceError.message}</span>}
    </form>
  );
};

export default ProfileSettings;
