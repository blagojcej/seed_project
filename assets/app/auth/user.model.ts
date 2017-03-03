/**
 * Created by Blagojce on 04.1.2017.
 */

export class User {
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string) {

    }
}