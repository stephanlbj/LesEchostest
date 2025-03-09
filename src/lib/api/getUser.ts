import { USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION, UserWithSubscriptions } from "@/types/user";

 export async function getUser(): Promise<UserWithSubscriptions> {
  return new Promise((resolve) => {
 
    setTimeout(() => {
      const users = [USER_WITH_ONE_SUBSCRIPTION, USER_WITHOUT_SUBSCRIPTION, USER_WITH_MULTIPLE_SUBSCRIPTION];
      const randomUser = users[Math.floor(Math.random() * users.length)];
         resolve(randomUser);
    }, 1000);  
  });
}
