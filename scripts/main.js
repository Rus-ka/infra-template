import fetch from "node-fetch";

fetch(`https://api.tracker.yandex.net/v2/issues/${process.env.TICKET_ID}`, {
  method: "PATCH",
  headers: {
    Authorization: `OAuth ${process.env.AUTH_TOKEN}`,
    "X-Org-ID": `${process.env.X_ORG_ID}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ 'Summary': "Кросс-проверка ИНФРА 03.11" }),
}).then((x) => console.log(x))


