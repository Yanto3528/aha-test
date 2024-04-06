'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { DatePicker } from '@/components/ui/DatePicker';
import { Input } from '@/components/ui/Input';
import { PasswordInput } from '@/components/ui/PasswordInput';
import { getFormErrorMessage } from '@/lib/utils';

const schema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z.string().email(),
  password: z
    .string({ required_error: 'Password is required' })
    .regex(
      /^.*(?=.{9,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      {
        message: 'Password must meet all of the requirements',
      }
    ),
  birthday: z.date({ required_error: 'Birthday is required' }),
});

type FormValues = z.infer<typeof schema>;

export function SignupForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      birthday: undefined,
    },
  });

  const onSubmit = handleSubmit(() => {
    setSuccessMessage('Signup successfully!');
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <Controller
        render={({ field }) => (
          <Input
            label="Name"
            placeholder="Name"
            {...field}
            error={getFormErrorMessage(errors, 'name')}
          />
        )}
        name="name"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <Input
            label="Email"
            placeholder="Email"
            {...field}
            error={getFormErrorMessage(errors, 'email')}
          />
        )}
        name="email"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <PasswordInput
            label="Password"
            placeholder="Password"
            {...field}
            error={getFormErrorMessage(errors, 'password')}
          />
        )}
        name="password"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <DatePicker
            label="Birthday"
            placeholder="mm/dd/yyyy"
            error={getFormErrorMessage(errors, 'birthday')}
            {...field}
          />
        )}
        name="birthday"
        control={control}
      />
      <button type="submit" className="bg-primary px-4 py-2 rounded-lg hover:opacity-90">
        Submit
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
