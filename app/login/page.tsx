'use client'

import Input from '@/components/input/Input'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

interface initialStateProps {
    email: string,
    password: string
}

const initialState:initialStateProps = {
    email: '',
    password: ''
}

export default function page() {
    const [state,  setState] = useState(initialState)
    const router = useRouter();

    function handleChange(e:any){
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e:FormEvent) => {
      e.preventDefault();

      signIn('credentials', {
        ...state,
        redirect: false,
      })
      .then((callback) => {
        if(callback?.ok) {
          router.refresh()
        }

        if(callback?.error){
          throw new Error('Wrong Credentials')
        }
      })
      router.push('/')
    }

  return (
    <div className="min-h-screen mx-auto max-w-xl w-full flex flex-col gap-y-5 justify-center items-center">
        <h1 className='text-2xl font-[500] text-slate-500'>Login</h1>
        <form className='text-center flex flex-col gap-y-2 w-full' onSubmit={onSubmit}>
            <Input placeholder='Email' name='email' id='email' type='email' onChange={handleChange} value={state.email}/>
            <Input placeholder='Password' name='password' id='password' type='password' onChange={handleChange} value={state.password}/>
            <button type='submit'>Login</button>
            <div className="">
                Haven't you got an account yet ? <Link href='/register'>Sign up</Link>
            </div>
        </form>
    </div>
  )
}
