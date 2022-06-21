/* eslint-disable no-unused-vars */
import { LensterPost } from '@generated/lenstertypes'
import { Profile } from '@generated/types'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  profiles: Profile[] | []
  setProfiles: (profiles: Profile[]) => void
  userSigNonce: number
  setUserSigNonce: (userSigNonce: number) => void
  showNewPostModal: boolean
  setShowNewPostModal: (showNewPostModal: boolean) => void
  quotedPub: LensterPost | null
  setQuotedPub: (quotedPub: LensterPost | null) => void
}

export const useAppStore = create<AppState>((set, get) => ({
  profiles: [],
  setProfiles: (profiles) => set(() => ({ profiles })),
  userSigNonce: 0,
  setUserSigNonce: (userSigNonce) => set(() => ({ userSigNonce })),
  showNewPostModal: false,
  setShowNewPostModal: (showNewPostModal) => set(() => ({ showNewPostModal })),
  quotedPub: null,
  setQuotedPub: (quotedPub) => set(() => ({ quotedPub }))
}))

interface PersistState {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  currentUser: Profile | undefined
  setCurrentUser: (currentUser: Profile | undefined) => void
  staffMode: boolean
  setStaffMode: (staffMode: boolean) => void
}

export const usePersistStore = create(
  persist<PersistState>(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (isAuthenticated) => set(() => ({ isAuthenticated })),
      currentUser: undefined,
      setCurrentUser: (currentUser) => set(() => ({ currentUser })),
      staffMode: false,
      setStaffMode: (staffMode) => set(() => ({ staffMode }))
    }),
    { name: 'lenster.store' }
  )
)
