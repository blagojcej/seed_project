import {Error} from "./error.model";
import {EventEmitter} from "@angular/core";
/**
 * Created by Blagojce on 24.1.2017.
 */

export class ErrorService{
    errorOccurred=new EventEmitter<Error>();

    handleError(error: any){
        const errorData=new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }
}