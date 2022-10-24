const Command = require('../../Structures/Database')

module.exports = class command extends Command {
    constructor() {
        super('bank', {
            description: 'Sends the user bank',
            category: 'economey',
            usage: 'bank',
            exp: 20,
            cooldown: 5
        })
    }

    /**
     * @param {Message} M
     * @param {import('../../Structures/Database').args} args
     * @returns {Promise<void>}
     */

    execute = async (M) => {
       const prefix = this.helper.config.prefix
       const { bank, tag } = await this.client.DB.getUser(sender.jid)
       const buttons = [
        { buttonId: `${this.helper.config.prefix}wallet`, buttonText: {displayText: 'Wallet'}, type: 1},
     ]
       const buttonMessage = {
            text: `🏦 *Bank* 🏦\n\n🧧 *Name:- ${sender.username}*\n\n  🌀 *Tag: #${tag}*\n\n🪙 *Gold: ${bank}*`,
            footer: '© Eternity 2022',
            buttons: buttons,
            headerType: 1
        }
       return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}

