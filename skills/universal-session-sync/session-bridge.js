/**
 * Universal Session Bridge Schema
 */
class UniversalSessionBridge {
  static normalizeTurn(turn) {
    return {
      role: turn.role || (turn.source === 'USER_EXPLICIT' ? 'user' : 'assistant'),
      content: turn.content || turn.text || '',
      timestamp: turn.created_at || new Date().toISOString()
    };
  }
}
module.exports = UniversalSessionBridge;
