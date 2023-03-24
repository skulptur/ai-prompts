import { OPENAI_API_KEY } from './keys'
import { getSummaryPrompt } from '../../src'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const getCompletion = async () => {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello world' }],
  })
  console.log(completion)
}

// getCompletion().then(console.log)

console.log('hi')
