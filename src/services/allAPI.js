import serverURL from './serverURL'
import commonAPI from './commonAPI'

//register API

export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}

//login api

export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody)
}

//quiz get api

export const getQuestionAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/get-quiz`,"",reqHeader)
}