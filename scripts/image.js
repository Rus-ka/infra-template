import fetch from "node-fetch";
import exec from "@actions/exec";

const { TAG, TICKET_ID, AUTH_TOKEN, X_ORG_ID } = process.env;
const headers = {
    Authorization: `OAuth ${AUTH_TOKEN}`,
    'X-Org-ID': X_ORG_ID,
};

const main = async () => {
    try {
        await exec.exec('docker', ['build', '-t', `app:${TAG}`, '.']);
        console.log('Listen on port 3000');

        await fetch(`https://api.tracker.yandex.net/v2/issues/${TICKET_ID}/comments`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
            'text': `Собрали образ с тегом ${TAG}`
            })
        });
        console.log('Комментарий успешно создан')
    } catch (e) {
    console.error("Ошибка при создании комментария", e.message)
    }
};

main().then(() => console.log('Comment added'));