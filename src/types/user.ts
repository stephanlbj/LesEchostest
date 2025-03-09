export type Gender = "M" | "F" | "Other";

export interface BaseUser {
    id: string;
    firstName: string;
    lastName: string;
    gender: Gender
    email: string;
  }
  
  export interface UserWithSubscriptions extends BaseUser {
    subscriptions: string[]; 
  }
  
  export const BASE_USER: BaseUser = {
    id: "507f1f77bcf86cd799439011",
    firstName: "Jamie",
    lastName: "Doe",
    gender: "M",
    email: "jamie.doe@example.com",
  };
  
  export const USER_WITH_ONE_SUBSCRIPTION: UserWithSubscriptions = {
    ...BASE_USER,
    subscriptions: ["RIGHT_1"],
  };
  
  export const USER_WITHOUT_SUBSCRIPTION: UserWithSubscriptions = {
    ...BASE_USER,
    subscriptions: [],
  };
  
  export const USER_WITH_MULTIPLE_SUBSCRIPTION: UserWithSubscriptions = {
    ...BASE_USER,
    subscriptions: ["RIGHT_1", "RIGHT_2"],
  };