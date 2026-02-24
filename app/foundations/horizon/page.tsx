'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FoundationsHorizonRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/evidence')
  }, [router])
  return null
}
