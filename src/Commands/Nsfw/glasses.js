const Command = require('../../Structures/Command')

module.exports = class command extends Command {
    constructor() {
        super('glasses', {
            description: 'Sends a random nsfw ero image',
            category: 'nsfw',
            usage: 'glasses',
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
        { buttonId: `${this.helper.config.prefix}blowjob`, buttonText: {displayText: 'NEXT'}, type: 1},
     ]
       const buttonMessage = {
       image: { url: 'https://api-reysekha.herokuapp.com/api/nsfw/glasees?apikey=APIKEY'},
       caption: '*Here you go!*',
       footer: `Aika`,
       buttons: buttons,
       headerType: 1
     }
       return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}
