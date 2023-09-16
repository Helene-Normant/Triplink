interface Identification {
    email: string
    password: string
    user: string
}

export const setUser = ({user}: Identification) => ({
   type: "SET_IDENTIFICATION",
   user
})