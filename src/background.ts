import Browser from "webextension-polyfill";
import Defs from "./assets/constants";

Browser.browserAction.onClicked.addListener(async ({ id }) => {
    try {
        await Browser.tabs.sendMessage(<number>id, {
            action: Defs.STR_V_TO_PIP,
            message: ''
        });
    } catch ({ message }) {
        await Browser.tabs.sendMessage(<number>id, {
            action: Defs.STR_ERROR,
            message: message
        });
    }
})
