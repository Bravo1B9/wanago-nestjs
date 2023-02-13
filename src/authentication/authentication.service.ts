import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UsersService
  ) {}

  

}