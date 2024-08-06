import publicClient from "../client/public.client"


const authEndpoint = {
    login : "auth/login"
}

type Props = {
    email : string,
    password : string,
}

const authApi = {
    login : async ({email, password} : Props ) =>{
        try {
            console.log(email, password)
            const response = await publicClient.post(authEndpoint.login, {email, password, isAdminPage: true})

            return response
        } catch (error) {
            console.log(error)
            return {error}
        }
    }
}


export default authApi;