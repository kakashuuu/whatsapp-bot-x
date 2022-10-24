import { BaseCommand, Command, Message } from '../../Structures'

@Command('blowjob', {
    description: 'Sends a random nsfw blowjob image',
    category: 'nsfw',
    usage: 'blowjob',
    exp: 20,
    cooldown: 5
})
export default class extends BaseCommand {
    public override execute = async (M: Message): Promise<void> => {
       const prefix = this.client.config.prefix
       const buttons = [
        { buttonId: `${prefix}blowjob`, buttonText: {displayText: 'NEXT ➡️'}, type: 1},
     ]
       const buttonMessage = {
       image: { url: 'https://api-reysekha.herokuapp.com/api/nsfw/blowjob?apikey=APIKEY'},
       caption: '*Here, you go!*',
       footer: `${this.client.config.name}`,
       buttons: buttons,
       headerType: 1
     }
       return void (await this.client.sendMessage(M.from, buttonMessage))
    }
}
