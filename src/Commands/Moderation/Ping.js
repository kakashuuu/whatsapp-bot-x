const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')

module.exports = class command extends Command {
    constructor() {
        super('ping', {
            description: 'Tags all of the members in a group',
            usage: 'ping (--tags=hidden)',
            category: 'moderation',
            exp: 35,
            cooldown: 15,
            aliases: ['all', 'tagall', 'everyone']
        })
    }

    /**
     * @param {Message} M
     * @param {import('../../Handlers/Message').args} args
     * @returns {Promise<void>}
     */

    execute = async (M, { flags, context }) => {
    if (!M.groupMetadata) return void M.reply('*Try Again!*')
        const hidden = this.getPingOptions(flags)
        flags.forEach((flag) => (context = context.replace(flag, '')))
        const message = context ? context.trim() : M.quoted ? M.quoted.content : ''
        let text = `${message !== '' ? `🏮 *Message: ${message}*\n\n` : ''}💬 *Group:* ${
            M.groupMetadata.subject
        }\n👥 *Members:* ${M.groupMetadata.participants.length}\n📣 *Tagger: @${
            M.sender.jid.split('@')[0]
        }*\n📧 *Tags:* ${hidden ? '*[HIDDEN]*' : '\n'}`
        const botJid = this.helper.correctJid(this.client.user?.id || '')
        if (!hidden) {
            text += `\n🎉 *@${botJid.split('@')[0]}*`
            const mods = []
            const admins = []
            const members = []
            for (const jid of M.groupMetadata.participants.map((x) => x.id)) {
                if (jid === M.sender.jid || jid === botJid) continue
                if (this.helper.config.mods.includes(jid)) {
                    mods.push(jid)
                    continue
                }
                if (M.groupMetadata.admins?.includes(jid)) {
                    admins.push(jid)
                    continue
                }
                members.push(jid)
            }
            for (let i = 0; i < mods.length; i++) text += `${i === 0 ? '\n\n' : '\n'}🏅 *@${mods[i].split('@')[0]}*`
            for (let i = 0; i < admins.length; i++) text += `${i === 0 ? '\n\n' : '\n'}👑 *@${admins[i].split('@')[0]}*`
            for (let i = 0; i < members.length; i++)
                text += `${i === 0 ? '\n\n' : '\n'}⭐ *@${members[i].split('@')[0]}*`
        }
        return void (await M.reply(
            text,
            'text',
            undefined,
            undefined,
            undefined,
            M.groupMetadata.participants.map((x) => x.id)
        ))
    }

    /**
     * @param {string[]} flags 
     * @returns {boolean}
     */

    getPingOptions = (flags) => {
        if (!flags.length) return false
        const taggingFlags = flags.filter((flag) => flag.startsWith('--tags='))
        let hidden = false
        if (taggingFlags.length && taggingFlags[0].split('=')[1].toLowerCase().includes('hidden')) hidden = true
        return hidden
    }
}
