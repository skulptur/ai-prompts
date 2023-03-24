// utils
export function getOptionalCharacterLimit(characterLimit?: number) {
  return characterLimit ? ` of up to ${characterLimit} characters` : ''
}

export function getNoExtraInformation() {
  return 'Do not give any explanations or extra information, just'
}

// prompt generators
export function getSentenceContinuationPrompt(sentence: string) {
  return `${getNoExtraInformation()} give me the the continuation for this sentence: ${sentence}`
}

export function getSummaryPrompt(text: string, summarySize?: number) {
  const sizeText = getOptionalCharacterLimit(summarySize)
  return `Provide a summary${sizeText} for this text: ${text}`
}
