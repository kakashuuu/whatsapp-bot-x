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
            let text = `👋🏻 (💙ω💙) Konichiwa! *@${M.sender.jid.split('@')[0]}*, I'm ${
                this.helper.config.name
            }\nMy prefix is - "${this.helper.config.prefix}"
Hello 
`
            
        }
    }
}
