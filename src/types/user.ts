export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}
