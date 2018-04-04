export const JOIN_MATCH = 'JOIN_MATCH'

export default (toggle, index) => {
  console.log(toggle)
  const content = [toggle, index]
  return {
    type: JOIN_MATCH,
    payload: content
  }
}
