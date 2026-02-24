'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AIGovernanceRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/evidence/perspectives/ai-governance')
  }, [router])
  return null
}
