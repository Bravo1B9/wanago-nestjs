import { AuthenticationService } from "./authentication.service";
import { Body, Controller, Get, Post } from "@nestjs/common";
import RegisterDto from "./dto/register.dto";
import LoginDto from "./dto/login.dto";

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto ) {
    return this.authenticationService.register(registrationData);
  }

  @Post()
  async getAuthenticatedUser(@Body() loginDto: LoginDto) {
    return this.authenticationService.getAuthenticatedUser(loginDto.email, loginDto.password);
  }

}