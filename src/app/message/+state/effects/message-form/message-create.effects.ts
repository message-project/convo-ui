import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";

@Injectable()
export class MessageCreateEffects {
    createMessage$ = createEffect


    constructor(private readonly _actions$: Actions, private _messageFormService: ){

    }
}S