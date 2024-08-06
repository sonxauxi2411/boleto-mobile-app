import publicClient from "../client/public.client"


const eventEndpoin = {
    topEvents : "event/top-events"
}

const eventApi = {

    getTopEvents : async ()=>{
        try {
            const response = await publicClient.get(eventEndpoin.topEvents)
            return response
        } catch (error) {
            console.error(error)
            return {error}
        }
    }
}

export default eventApi;