const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')

module.exports = class command extends Command {
    constructor() {
        super('help', {
            description: "Displays the bot's usable commands",
            category: 'general',
            exp: 20,
            usage: 'help || help <command_name>',
            aliases: ['h'],
            cooldown: 10
        })
    }

    /**
     * @param {Message} M
     * @param {import('../../Handlers/Message').args} args
     * @returns {Promise<void>}
     */

    execute = async (M, args) => {
        const { context } = args
        if (!context) { 
            const commands = Array.from(this.handler.commands, ([command, data]) => ({
                command,
                data
            }))
            const reactionMessage = {
            react: `✅`
}
            let text = `👋🏻 (❤️ω💙)Konichiwa! *@${M.sender.jid.split('@')[0]}*, I'm ♡︎ᴀIᴋA♡︎!

📒Note: This is just a simple bot without any fun commands soon all commands will be add in this bot!

🏮My prefix is - ${this.helper.config.prefix}
☘️Owner ~ Toshi_sama
🧧Instagram - https://instagram.com/itz_toshi_02
💮GitHub ~ https://github.com/Toshi-san001

*━━━━〖･General•〗━━━━*

Hi,help,rank,profile

*━━━━〖･Utils•〗━━━━*

carbon,emoji,prettier,retrieve,sticker

*━━━━〖･Moderation•〗━━━━*

ping

*━━━━〖･Weeb•〗━━━━*

waifu,character,neko,kitsune,manga,anime

📕 *Note:* Use ${this.helper.config.prefix}help <command_name> for more info of a specific command. Example: *${this.helper.config.prefix}help hello*`

return void (await M.reply(text, 'text', reactionMessage, undefined, undefined, undefined, [M.sender.jid]))
} else {
            const cmd = context.trim().toLowerCase()
            const command = this.handler.commands.get(cmd) || this.handler.aliases.get(cmd)
            if (!command) return void M.reply(`No command found | *"${context.trim()}"*`)
            return void M.reply(
                `🎐 *Command:* ${this.helper.utils.capitalize(command.name)}\n🎴 *Aliases:* ${
                    !command.config.aliases
                        ? ''
                        : command.config.aliases.map((alias) => this.helper.utils.capitalize(alias)).join(', ')
                }\n🔗 *Category:* ${this.helper.utils.capitalize(command.config.category)}\n⏰ *Cooldown:* ${
                    command.config.cooldown ?? 3
                }s\n🎗 *Usage:* ${command.config.usage
                    .split('||')
                    .map((usage) => `${this.helper.config.prefix}${usage.trim()}`)
                    .join(' | ')}\n🧧 *Description:* ${command.config.description}`
            )
        }
    }
}
