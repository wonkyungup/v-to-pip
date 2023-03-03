import Browser from "webextension-polyfill";

Browser.runtime.onMessage.addListener(async action => {
    if (action === 'V To PIP') {
        const video = <any>document.querySelector('video');
        console.log(video);

        if (video !== null) {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            }

            if (document.pictureInPictureEnabled) {
                await video.requestPictureInPicture();
            }
        }
    }

    return false;
})
