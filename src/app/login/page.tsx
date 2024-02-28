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

export default function Login() {
  const [visible, setVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [supabase.auth]);

  if (loading) return <div>Loading...</div>;

  if (!loading && user) {
    router.push('/admin');
  }

  const handleSignIn = async () => {
    try {
      const loggedInUser = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log(loggedInUser.data);

      if (loggedInUser.data.user) router.push('/admin');
      else {
        
      }

      setEmail('');
      setPassword('');
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='dark h-screen w-screen bg-black'>
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Card className='min-w-96 items-center text-center'>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enactus NSUT</CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
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
              type='button'
              variant='default'
              className='w-full'
              onClick={handleSignIn}>
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
