import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Observable } from "rxjs";

@Injectable()
export class DailyGuard implements CanActivate {
    // @ts-ignore
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const date = new Date()
        return date.getHours() <= 12

    }
}