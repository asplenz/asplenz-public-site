'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SovereigntyRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/evidence/docs')
  }, [router])
  return null
}
