export interface UserProfile {
  firstName: string;
  lastName: string;
  age: number;
  gender?: "M"|"F";
}

export function getProfile(): UserProfile {
  const profile: UserProfile = {
    firstName: 'first',
    lastName: 'last',
    age: 33,
  }
  return profile;
}

export function helloWorld() {
  const message = 'Hello World from my example modern npm package!';
  return message;
}

export function goodBye() {
  const message = 'Goodbye from my example modern npm package!';
  return message;
}

export default {
  helloWorld,
  goodBye,
  getProfile
};
