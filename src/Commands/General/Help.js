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
            let text = `👋🏻 (❤️ω💙)Konichiwa! *@${M.sender.jid.split('@')[0]}*, I'm ♡︎ᴀIᴋA♡︎
              📒Note: This is just a simple bot without any fun commands soon all commands will be add in this bot!
          
              🏮My prefix is - ${this.helper.config.prefix}
              ☘️ Owner ~ Toshi_sama
              🧧Instagram - https://instagram.com/itz_toshi_02

*━━━❰ General ❱━━━*

${this.helper.config.prefix}Hi
${this.helper.config.prefix}help
${this.helper.config.prefix}info
${this.helper.config.prefix}rank
${this.helper.config.prefix}profile

*━━━❰ Utils ❱━━━*

${this.helper.config.prefix}carbon
${this.helper.config.prefix}emoji
${this.helper.config.prefix}prettier
${this.helper.config.prefix}retrieve
${this.helper.config.prefix}sticker

*━━━❰ Moderation ❱━━━*
${this.helper.config.prefix}ping

*━━━❰ Weeb ❱━━━*
${this.helper.config.prefix}waifu
${this.helper.config.prefix}character
${this.helper.config.prefix}neko
${this.helper.config.prefix}kitsune
${this.helper.config.prefix}manga
${this.helper.config.prefix}anime`

return void (await M.reply(text, 'text', undefined, undefined, undefined, [M.sender.jid]))
        }
    }
}
