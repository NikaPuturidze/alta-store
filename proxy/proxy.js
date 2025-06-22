import express from 'express'
import https from 'https'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, accept-language')

  if (req.method === 'OPTIONS') {
    res.sendStatus(204)
  } else {
    next()
  }
})

const HOST = process.env.HOST

function proxyRequest(path, method, body, extraHeaders = {}) {
  const options = {
    host: HOST,
    port: 443,
    path,
    method,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    servername: HOST,
    ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256',
    secureProtocol: 'TLS_method',
    ecdhCurve: 'X25519:P-256:P-384:P-521',
    honorCipherOrder: true,
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      const chunks = []

      res.on('data', (chunk) => chunks.push(chunk))

      res.on('end', () => {
        const data = Buffer.concat(chunks).toString('utf8')

        if (res.headers['content-type'] && res.headers['content-type'].includes('application/json')) {
          try {
            resolve(JSON.parse(data))
          } catch (e) {
            reject(new Error('Failed to parse JSON: ' + e.message))
          }
        } else {
          resolve(data)
        }
      })
    })

    req.on('error', (err) => reject(err))

    if (body && ['POST', 'PUT', 'PATCH'].includes(method)) {
      req.write(JSON.stringify(body))
    }

    req.end()
  })
}

app.get('/', (req, res) => {
  res.status(400).json({
    error: 'No endpoint specified. Please provide a valid API path.',
  })
})

app.use(async (req, res) => {
  const path = req.originalUrl
  const method = req.method
  const body = req.body && Object.keys(req.body).length > 0 ? req.body : null

  const acceptLanguage = req.headers['accept-language']
  const extraHeaders = {}

  if (acceptLanguage) {
    extraHeaders['accept-language'] = acceptLanguage
  }

  try {
    const data = await proxyRequest(path, method, body, extraHeaders)
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message || 'Unknown error' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Proxy server listening on \x1b[34mhttp://localhost:${PORT}\x1b[0m`)
})
