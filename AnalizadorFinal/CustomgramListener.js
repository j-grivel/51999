import gramListener from "./generated/gramListener.js";

export class CustomgramListener extends gramListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}