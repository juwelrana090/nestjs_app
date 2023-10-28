import { Controller, Get, Post, Put, Delete, Patch, Req } from "@nestjs/common";
import { of } from "rxjs";
import { Request } from "express";

@Controller("/albums")

export class AlbumsController {
    @Get("/profile")
    getProfile(@Req() req: Request) {
        // console.log('request', req);
        return of({ profile: "This is user profile" });
    }

    @Post("/profile")
    postProfile(@Req() req: Request) {
        // console.log('request', req);
        return of({ profile: "This is user profile" });
    }
}
