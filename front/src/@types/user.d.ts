//user.d.ts
export interface IUser {
    id: number | null;
    username: string | null;
    token: string | null;
}

export type UserContextType = {
    currentUser: IUser;
    saveUser: (user: IUser) => void;
    updateUser: (user: IUser) => void;
};