import { makeObservable, observable, observe } from "mobx";

export default class AcvitivtyStore {
    title = 'Hello from MobX!';

    constructor() {
        makeObservable(this, {
            title: observable
        })
    }
}
