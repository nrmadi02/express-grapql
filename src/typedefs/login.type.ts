import { Field, ObjectType } from "type-graphql";
import { User } from "./users.type";

@ObjectType()
export class UserLogin {
  @Field()
  user: User;

  @Field()
  token: string;
}
