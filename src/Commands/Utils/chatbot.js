const Message = require('../../Structures/Message')
const Command = require('../../Structures/Command')

module.exports = class command extends Command {
    constructor() {
        super('chat', {
            description: 'Chat with the Bot in group.',
            category: 'fun',
            usage: 'chat hi',
            aliases: ['bot'],
            exp: 15,
            cooldown: 3
        })
    }

    /**
     * @param {Message} M
     * @returns {Promise<void>}
     */

    execute = async (M, { context }) => {
        const texas = context.trim()
        const myUrl = this.helper.config.chatBotUrl
        if (!myUrl) return void M.reply(`Chat Bot Url not set.`)
        if (!context) return void M.reply(`Whats up? I'm ᴀIᴋA ✨`)
        let get = new URL(myUrl)
        let params = get.searchParams
        try {
            const response = await this.helper.utils.fetch(
                `${encodeURI(
                    `http://api.brainshop.ai/get?bid=165801&key=1ftAuFL7Fhj21Fyp&uid=[uid]&msg=[msg]`
                )}`
            )
            return void M.reply(response.cnt)
        } catch (err) {
            this.helper.log(err.message, true)
            return void (await M.reply('An error occurred. Try again later'))
        }
    }
}
