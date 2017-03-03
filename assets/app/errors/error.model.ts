/**
 * Created by Blagojce on 24.1.2017.
 */

export class Error {

    //Sekoja greska koja ja frla serverot ima naslov (title) i poraka (message) od nasite custom greski
    constructor(public title: string, public message: string){}
}