/* eslint-disable @typescript-eslint/no-explicit-any */
 
import axios from 'axios';
import {PersonalDetailsTypes, ExperienceDetailsTypes, EducationDetailsTypes} from '../Types/types'

const API_BASE_URL = 'http://localhost:5000';


// Function to fetch user details by ID
export const getUserDetails = (userId: any) => {
  return axios.get(`${API_BASE_URL}/users/${userId}`);
};

// Function to post experience details
// export const updateUserDetails = (_userId: string | undefined, experienceData: ExperienceDetailsTypes) => {
//   return axios.post(`${API_BASE_URL}/users`, experienceData);
// };


// Function to post personal details
export const postPersonalDetails = (personalDetailsData: PersonalDetailsTypes) => {
  return axios.post(`${API_BASE_URL}/personal`, personalDetailsData);
};

// Function to post experience details
export const postExperienceDetails = (experienceDetailsData: ExperienceDetailsTypes) =>{
  return axios.post(`${API_BASE_URL}/experience`,experienceDetailsData)
}

// Function to post education details

export const postEducationDetails = (educationDetailsData: EducationDetailsTypes) =>{
  return axios.post(`${API_BASE_URL}/education`, educationDetailsData)
}

export const getExperienceInfo = () => {
  try {
    
    const getRes = axios.get(`${API_BASE_URL}/experience`)
    return getRes
  } catch (error) {
  console.log("error",error)   
  }
}


export const getEducationInfo = () => {
  try {
    
    const getRes = axios.get(`${API_BASE_URL}/education`)
    return getRes
  } catch (error) {
  console.log("error",error)   
  }
}

export const getPersonalInfo = () => {
  try {
    
    const getRes = axios.get(`${API_BASE_URL}/personal`)
    return getRes
  } catch (error) {
  console.log("error",error)   
  }
}