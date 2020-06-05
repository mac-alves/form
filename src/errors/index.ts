export class CustomErrorForm extends Error {
    constructor(path: string, message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = path; // stack traces display correctly now
    }
}