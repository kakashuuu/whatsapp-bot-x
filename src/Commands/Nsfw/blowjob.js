const Command = require('../../Structures/Command')

module.exports = class command extends Command {
    constructor() {
        super('blowjob', {
            description: 'Sends a random nsfw blowjob image',
            category: 'nsfw',
            usage: 'blowjob',
            exp: 20,
            cooldown: 5
        })
    }

    /**
     * @param {Message} M
     * @returns {Promise<void>}
     */

    execute = async (M) => {
       const prefix = this.helper.config.prefix
       const buttons = [
        { buttonId: `${prefix}blowjob`, buttonText: {displayText: 'NEXT ➡️'}, type: 1},
     ]
       const buttonMessage = {
       image: { url: 'https://api-reysekha.herokuapp.com/api/nsfw/blowjob?apikey=APIKEY'},
       caption: '*Here, you go!*',
       footer: `Aika`,
       buttons: buttons,
       headerType: 1
     }
       return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}
