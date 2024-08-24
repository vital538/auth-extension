import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService){}

    @Post('sign-up')
    signUp(@Body() signUpDto: SignUpDto){
        return
        
    }
}
