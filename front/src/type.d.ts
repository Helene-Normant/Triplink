interface Identification {
    email: string
    password: string
    user: string
}

type UserState = {
    users: Identification[]
}

type UserAction = {
    type: string
    user: Identification 
    
}

type dispatchType = (args: UserAction) => UserAction