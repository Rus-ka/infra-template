import fetch from "node-fetch";
import { threadId } from "worker_threads";
console.log(process.env.AUTH_TOKEN, process.env.X_ORG_ID, process.env.TICKET_ID)
fetch(`https://api.tracker.yandex.net/v2/issues/${process.env.TICKET_ID}/comments`, {
  method: "POST",
  headers: {
    Authorization: `OAuth ${process.env.AUTH_TOKEN}`,
    "X-Org-ID": `${process.env.X_ORG_ID}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Тест" }),
}).then((x) => console.log(x))


