export const createUserAdapter = ( user) => ({
    name:user.data.name,
    gender : user.data.gender,
    status :user.data.status
})