'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HorizonPage() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/evidence')
  }, [router])
  return null
}
