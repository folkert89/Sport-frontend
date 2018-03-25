export const CREATE_MATCH = 'CREATE_MATCH'

export default (newMatch) => {
  return {
    type: CREATE_MATCH,
    payload: newMatch
  }
}
