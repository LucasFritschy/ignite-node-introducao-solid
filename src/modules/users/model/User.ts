import { v4 as uuidV4 } from "uuid";

interface IRequest {
  name: string;
  email: string;
}

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor({ name, email }: IRequest) {
    this.id = uuidV4();
    this.name = name;
    this.admin = false;
    this.email = email;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
