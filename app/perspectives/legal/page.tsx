'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LegalRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/evidence/perspectives/legal')
  }, [router])
  return null
}
