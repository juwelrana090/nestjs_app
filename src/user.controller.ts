import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Req,
    HttpCode,
    Res,
    Header,
    Param,
    Query,
    Body
} from "@nestjs/common";
import { of } from "rxjs";
import { Request, Response } from "express";


interface UserDTO {
    name: string;
    email: string;
}


@Controller("/users")

export class UserController {
    @Get("/profile")
    @Header('cache-control', 'none')
    @Header('X-Name', 'Juwel')
    getProfile(@Query() query: Record<string, any>, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
        console.log('query', query);
        res.status(200);
        return of({ profile: "This is user profile" });
        // res.json({ profile: "This is user profile" });
    }

    @Post("/profile")
    postProfile(@Body() requestData: UserDTO, @Req() req: Request) {
        console.log('requestData', requestData);
        return of({ profile: "This is user profile" });
    }
}
