const Message = require('../../Structures/Message')
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
     * @param {string} jid
     * @param {number} gold
     * @param {field} 'wallet' | 'bank'
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
            footer: '',
            buttons: buttons,
            headerType: 1
        }
       return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}

