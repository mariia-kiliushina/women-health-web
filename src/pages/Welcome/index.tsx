import { FC, useEffect, useState } from 'react'
import classes from './index.module.css'
import { Button } from '@components/Button'

export const WelcomePage: FC = () => {
  return (
    <div>
      <input></input>
      <input></input>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </div>
  )
}
