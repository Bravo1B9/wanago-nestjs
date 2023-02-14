import { AuthenticationService } from "./authentication.service";
import { Body, Controller, HttpCode, Post, Req, Res, UseGuards } from "@nestjs/common";
import RegisterDto from "./dto/register.dto";
import RequestWithUser from "./requestWithUser.interface";
import { Response } from "express";
import { LocalAuthenticationGuard } from "./localAuthentication.guard";

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto ) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('login')
  async login(
    @Req() request: RequestWithUser,
    @Res() response: Response
  ) {
    const {user} = request;
    const cookie = this.authenticationService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return response.send(user);
  }

}