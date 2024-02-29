'use client';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  User,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { login } from './actions';

export default function Login() {
  const [visible, setVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className='dark h-screen w-screen bg-black'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Card className='min-w-96 items-center text-center'>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enactus NSUT</CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-6'>
              <Input
                type='email'
                name='email'
                placeholder='Email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className='flex w-full items-center space-x-2'>
                <Input
                  type={visible ? 'text' : 'password'}
                  name='password'
                  placeholder='Password...'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type='button'
                  variant='secondary'
                  onClick={() => setVisible((prev) => !prev)}>
                  {visible ? (
                    <VisibilityOffRoundedIcon />
                  ) : (
                    <VisibilityRoundedIcon />
                  )}
                </Button>
              </div>
              <Button
                type='submit'
                variant='default'
                className='w-full'
                formAction={login}>
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
