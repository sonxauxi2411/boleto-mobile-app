import publicClient from "../client/public.client"



const endpoint = {
    topeEvents : "/event/top-events" ,
    search : "/event/search"
}


type EventFilter = {
    name? : string,
    page? : number,
    dataFilter? : any,
    cate? : any,
    limit ? : number
}

const eventApi = {
    getTopEvents : async ()=>{
        try {
            const response = await publicClient.get(endpoint.topeEvents)
            return response
        } catch (error) {
            console.error(error)
            return {error}
        }
    },

    searchEvent : async ({name, page, dataFilter , cate} : EventFilter)=>{
        try {
            const response = await publicClient.post(endpoint.search , {name, page, dataFilter, cate , limit: 10})
            return response
        } catch (error) {
            console.error(error)
            return {error}
        }
    }
}

export default eventApi




// class EventApi {
//     eventTops = async (
//         url : string, 
//         data? : any,
//         method? : "get" | "post"
//     )=>{

//         return await publicClient(`/event/${url}` , {
//             method : method ?? "get" ,
//             data,
//         })
//     }
// }
// const eventApi = new EventApi()
// export default eventApi
