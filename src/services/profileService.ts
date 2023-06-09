// services
import * as tokenService from './tokenService'

// types
import { Profile } from '../types/models'
import { ProfileData } from '../types/forms'
import { SwapPartyData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles(): Promise<Profile[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile[]
  } catch (error) {
    throw error
  }
}

async function getUser(): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/user`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

async function addPhoto(
  photoData: FormData, 
  _id: string
): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/${_id}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

async function updateProfile(
  profileData: ProfileData, 
  _id: Profile['_id']
): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/${_id}/update`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData)
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

async function associatePack(): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/pack`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

async function swapPartyOrder(swap: SwapPartyData): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/partyOrder`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(swap)
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

export { 
  getAllProfiles, 
  getUser, 
  addPhoto, 
  updateProfile, 
  associatePack,
  swapPartyOrder,
}
