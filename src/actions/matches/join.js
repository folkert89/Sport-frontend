export const JOIN_MATCH = 'JOIN_MATCH'

export default (toggle) => {
  return {
    type: JOIN_MATCH,
    payload: toggle
  }
}
