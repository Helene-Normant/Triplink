// context/todoContext.tsx
import React, { ReactNode } from 'react';
import { UserContextType, IUser } from '../@types/user';

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<IUser>({
    id: null,
    username: null,
    token: null,
  });

  const saveUser = (user: IUser) => {
    const newUser: IUser = {
      id: user.id,
      username: user.username,
      token: user.token,
    };
    setCurrentUser(newUser);
  };

  const updateUser = (user: IUser) => {
    const updateUser: IUser = {
        id: user.id,
        username: user.username,
        token: user.token,
      };
        setCurrentUser(updateUser);
  };
  return <UserContext.Provider value={{currentUser, saveUser, updateUser}}>{children}</UserContext.Provider>;
};

export default UserProvider;