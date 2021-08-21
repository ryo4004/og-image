import { ParsedRequest } from './types';
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

function getCss() {
    return `
    body {
        background-image: linear-gradient(160deg, #b7f8db 0%, #50a7c2 100%);
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo-wrapper .emoji {
        width: 512px;
        height: 512px;
    }`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { emoji } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        <div>
            <div class="logo-wrapper">
                ${emojify(emoji)}
            </div>
        </div>
    </body>
</html>`;
}
