const mailgun = require("mailgun-js")
const DOMAIN = "unqualified.dev"
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN })

exports.handler = function(event, context, callback) {
  // your server-side functionality

  const body = JSON.parse(event.body).payload

  const { visitor_name, visitor_email, messaage } = body.data

  const data = {
    from: `Guest <guest@unqualified.dev>`,
    to: "7ravikp@gmail.com",
    subject: `Hello from ${visitor_name}`,
    text: `From: ${visitor_name} <${visitor_email}> \n ${messaage}`,
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
