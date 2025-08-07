"use client";
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client';

export const Logout = () => {
    const router = useRouter();
    const handelLogOut = async () => {
        await authClient.signOut();
        router.push("/");
    }
  return (
    <Button onClick={handelLogOut}></Button>
  )
}
