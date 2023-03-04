import Browser from "webextension-polyfill";
import Defs from "./assets/constants";

Browser.runtime.onMessage.addListener(async req => {
    switch (req.action) {
        case Defs.STR_V_TO_PIP:
            const video = <HTMLVideoElement>document.querySelector('video');

            if (video !== null) {
                if (document.pictureInPictureElement) {
                    await document.exitPictureInPicture();
                }

                if (document.pictureInPictureEnabled) {
                    await video.requestPictureInPicture();
                }
            }
            break
        case Defs.STR_ERROR:
        default:
            console.log(req.message);
            break;
    }
})
