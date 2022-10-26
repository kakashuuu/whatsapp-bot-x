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

    execute = async (M) => {
       const prefix = this.helper.config.prefix
       const buttons = [
        { buttonId: `${this.helper.config.prefix}ahegao`, buttonText: {displayText: 'NEXT'}, type: 1},
     ]
       const buttonMessage = {
       image: { url: 'https://api-reysekha.herokuapp.com/api/nsfw/ahegao?apikey=APIKEY'},
       caption: '*Here you go!*',
       footer: `Aika`,
       buttons: buttons,
       headerType: 1
     }
       return void (await this.helper.sendMessage(M.from, buttonMessage))
    }
}
