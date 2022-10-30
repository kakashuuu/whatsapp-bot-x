const Command = require('../../Structures/Command')

module.exports = class command extends Command {
    constructor() {
        super('ahegao', {
            description: 'Sends a random nsfw ahegao image',
            category: 'nsfw',
            usage: 'ahegao',
            exp: 20,
            cooldown: 5
        })
    }

    /**
     * @param {Message} M
     * @returns {Promise<void>}
     */

    execute = async ({ from, sender, message }: Message): (M) => {
       const prefix = this.helper.config.prefix
       const { bank, tag } = await this.client.DB.getUser(M.sender.jid)
       const buttons = [
        { buttonId: `${this.helper.config.prefix}ahegao`, buttonText: {displayText: 'NEXT'}, type: 1},
     ]
       const buttonMessage = {
       text: `🏦 *Bank* 🏦\n\n🧧 *Name:- ${M.sender.username}*\n\n  🌀 *Id tag: #${tag}*\n\n🪙 *Gold: ${bank}*`,
       caption: '*Here you go!*',
       footer: `Aika`,
       buttons: buttons,
       headerType: 1
     }
       return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}
