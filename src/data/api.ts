import { env } from "@/env";

export function api(path: string, init?: RequestInit){
    
    const base_url = env.API_BASE_URL ; 
    const newUrl = new URL("/api".concat(path), base_url)
    
    return fetch(newUrl, init)
}