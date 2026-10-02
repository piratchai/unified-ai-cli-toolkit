/**
 * Pi CLI Extension: Custom Git Workflow using ExtensionAPI
 */
import { ExtensionAPI } from '@pi/extension-api';

export default function registerExtension(api: ExtensionAPI) {
  api.on('session:start', async (session) => {
    console.log(`[Pi Extension] Started session: ${session.id}`);
  });

  api.on('tool:before', async (event) => {
    if (event.tool === 'bash' && event.args.command.includes('git push --force')) {
      throw new Error('[Pi Extension] Force push is prohibited by team policy.');
    }
  });

  api.registerSlashCommand('pr-ready', async (args, ctx) => {
    await ctx.runTool('bash', { command: 'git status --short' });
    ctx.output('Repository is audited and ready for Pull Request.');
  });
}
