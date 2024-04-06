'use client';

import React, { useMemo } from 'react';

import Image from 'next/image';

import CheckmarkActiveIcon from '@/public/icons/checkmark-active.svg';
import CheckmarkInactiveIcon from '@/public/icons/checkmark-inactive.svg';
import { PasswordCondition, PasswordValidationResult } from '@/types/password.types';

type Props = {
  password: string;
};

const passwordConditions: PasswordCondition[] = [
  {
    label: 'Have at least one uppercase letter',
    validate: (password: string) => /[A-Z]/.test(password),
  },
  {
    label: 'Have at least one lowercase letter',
    validate: (password: string) => /[a-z]/.test(password),
  },
  {
    label: 'Have at least one number',
    validate: (password: string) => /[0-9]/.test(password),
  },
  {
    label: 'Have at least one special character\n(!@#$...etc)',
    validate: (password: string) => /[!@#$%^&*()\-_=+{};:,<.>]/.test(password),
  },
  {
    label: 'Longer than 8 characters',
    validate: (password: string) => password.length > 8,
  },
];

export function PasswordValidation({ password }: Props) {
  const validationResults = useMemo(
    () =>
      passwordConditions.map<PasswordValidationResult>((condition) => ({
        ...condition,
        isFulfilled: condition.validate(password),
      })),
    [password]
  );

  return (
    <ul className="bg-greyscale-800 py-2 px-3 mt-5 rounded-lg">
      {validationResults.map(({ isFulfilled, label }) => (
        <li key={label} className="flex items-center gap-[10px] py-1 min-h-10">
          <Image
            src={isFulfilled ? CheckmarkActiveIcon : CheckmarkInactiveIcon}
            alt={`${label} ${isFulfilled ? 'fulfilled' : 'unfulfilled'}`}
            width={24}
            height={24}
          />
          <p className="whitespace-pre-wrap font-ubuntu text-sm leading-normal tracking-[0.25px]">
            {label}
          </p>
        </li>
      ))}
    </ul>
  );
}
