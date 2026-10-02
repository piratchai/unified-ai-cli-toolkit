#!/usr/bin/env bash
# Qwen Code PreToolUse Hook
TOOL_NAME="$1"
COMMAND="$2"

if [[ "$COMMAND" =~ rm[[:space:]]+-rf[[:space:]]+[/~] ]]; then
  echo "[Qwen Security Hook] BLOCKED dangerous command: $COMMAND" >&2
  exit 1
fi

exit 0
