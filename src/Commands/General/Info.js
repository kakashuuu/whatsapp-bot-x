const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')
const { description, homepage, name } = require('../../../package.json')

module.exports = class command extends Command {
    constructor() {
        super('info', {
            description: "Displays bot's info",
            aliases: ['bot'],
            category: 'general',
            exp: 100,
            usage: 'info',
            cooldown: 10
        })
    }

    /**
     * @param {Message} M
     * @returns {Promise<void>}
     */

    execute = async (M) => {
        const users = await this.client.DB.user.count();
        const uptime = this.client.utils.formatSeconds(process.uptime())
        const text = `🔰 *Commands:* ${this.handler.commands.size}\n\n💮 *Uptime:* ${uptime}\n\n🌀 *Users: ${users}*`
        }
    }
}
