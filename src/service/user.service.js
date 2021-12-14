import { httpService } from './http.service.js';
export const userService = {
    login
}

async function login(userName,password) {
    console.log('userName:',userName,'password',password);
    const user = await httpService.post('user',{user:userName})
    return user
}