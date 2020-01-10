const mailgun = require("mailgun-js")
const DOMAIN = "unqualified.dev"
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN })

exports.handler = function(event, context, callback) {
  // your server-side functionality

  const info = JSON.parse(event.body).payload.data

  const { message } = info
  const visitorName = info['visitor-name']
  const visitorEmail = info['visitor-email']

  const data = {
    from: `Visitor <visitor@unqualified.dev>`,
    to: "7ravikp@gmail.com",
    subject: `Hello from ${visitorName}`,
    text: `From: ${visitorName} <${visitorEmail}> \n ${message}`,
  }

  mg.messages().send(data, function(error, body) {
    if (error) {
      console.log(error)
    } else {
      console.log(body)
    }
    return callback(null, {
      statusCode: 200,
      body: "Message processed!",
    })
  })
}
