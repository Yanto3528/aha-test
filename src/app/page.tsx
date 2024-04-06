'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import Link from 'next/link';

import { Calendar } from '@/components/ui/Calendar';
import { DatePicker } from '@/components/ui/DatePicker';
import { PasswordInput } from '@/components/ui/PasswordInput';

export default function Home() {
  const [password, setPassword] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();

  const onPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-4 px-20 pb-40 mt-20">
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        label="Birthday"
        placeholder="mm/dd/yyyy"
      />
      <PasswordInput
        value={password}
        onChange={onPasswordChange}
        label="Password"
        placeholder="Password"
        className="w-[335px]"
      />
      <Calendar />
      <Link href="/demo" className="underline underline-offset-4">
        See demo form using these components
      </Link>
    </div>
  );
}
