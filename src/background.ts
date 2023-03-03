import Browser from "webextension-polyfill";

Browser.action.onClicked.addListener(async ({ id }) => {
    try {
        await Browser.tabs.sendMessage(<number>id, 'V To PIP');
    } catch (err) {
        console.log(err);
    }
})
