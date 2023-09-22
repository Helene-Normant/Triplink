//User interface type
interface IUser {
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

type dispatchType = (args: UserAction) => {UserAction}

type payloadType = {
payload: number;
}

//Publication Interface Type
interface IPublication {
  id: number
  title: string
  description: string
  country: string
  budget: number
  bagTips: string
  travelType: string
  picture: string
  travelPartner: string
  createdAt: Date
  modifiedAt: Date,
  traveler: {
    id: number,
    username: string
    picture: string
  },
  userWhoLiked: [
    {
      id: number
      username: string
      picture: string
    }
  ],
  stepTravel: [
    {
      id: number,
      title: string
    }
  ]
}
  type PublicationState = {
    publications: IPublication[]
  }
  
  type PublicationsAction = {
    type: string
    publications: IPublication[]
  }
  
  type DispatchTypePublications = (args: PublicationsAction) => PublicationAction
  