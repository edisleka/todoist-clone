export interface OnboardingState {
  pendingVerification: boolean
  hasCompletedOnboarding: boolean
  setPendingVerification: (pendingVerification: boolean) => void
  completeOnboarding: (hasCompletedOnboarding: boolean) => void
}
