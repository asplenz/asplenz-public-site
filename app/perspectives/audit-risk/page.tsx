'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuditRiskRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/evidence/perspectives/audit-risk')
  }, [router])
  return null
}
