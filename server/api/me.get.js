export default defineEventHandler(async(event)=>{
    const token = getCookie(event, 'token');

    try {
        const data = await $fetch('http://localhost:8000/api/me', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        return data.user;
    } catch (error) {
        if(error.statusCode == 401) {
            setCookie(event, 'token', '', {
                httpOnly: true,
                secure: true,
                maxAge: new Date(0),
                path: '/'
            })
        }

        return error
    }
})