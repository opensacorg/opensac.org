'use client'

import { useEffect, useState } from 'react'
import useBanner from '@/hooks/useBanner'

/**
 * Banner component to display at the top of the page
 * @param {Object} props
 * @param {JSX.Element} props.children - The message to display in the banner
 * @returns {JSX.Element|null}
 */
export default function Banner({ children }) {
  const { visible: bannerVisible, dismissBanner } = useBanner({
    id: 'community-support-statement-2025-banner',
  })
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(bannerVisible)

  useEffect(() => {
    if (bannerVisible) {
      setShouldRender(true)
      // Small delay to ensure the DOM has updated before starting animation
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (!bannerVisible && shouldRender) {
      setIsAnimating(false)
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 500) // Match transition duration
      return () => clearTimeout(timer)
    }
  }, [bannerVisible, shouldRender])

  const handleDismiss = () => {
    setIsAnimating(false)
    // Wait for animation to finish before actually dismissing
    setTimeout(() => {
      dismissBanner()
    }, 300)
  }

  if (!shouldRender) return null

  return (
    <div className={`banner ${isAnimating ? 'animate-in' : 'animate-out'}`}>
      <div className="banner-content container-xxl">
        <span>{children}</span>
        <button
          className="banner-dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss banner"
        >
          &times;
        </button>
      </div>
    </div>
  )
}
