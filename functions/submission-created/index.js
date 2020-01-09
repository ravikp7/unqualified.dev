const mailgun = require("mailgun-js")
const DOMAIN = "unqualifed.dev"
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN })

exports.handler = function(event, context, callback) {
  // your server-side functionality

  const body = JSON.parse(event.body).payload

  const data = {
  from: "Excited User <me@samples.mailgun.org>",
  to: "bar@example.com, 7ravikp@gmail.com",
  subject: "Hello",
  text: JSON.stringify(body),
}

  mg.messages().send(data, function(error, body) {
    if (error) {
      console.log(error)
    } else {
      console.log(body)
    }
    return callback(null, {
      statusCode: 200,
      body: "Beep, boop, you just got serverless."
    })
  })
}
