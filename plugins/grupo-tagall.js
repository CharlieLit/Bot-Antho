let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*@ff_florez* ${pesan}`
let teks = `*𝗔𝗡𝗢𝗧𝗘𝗡𝗦𝗘 𝗡𝗘𝗚𝗥𝗫𝗦 𝗣𝗔𝗥𝗧𝗜𝗖𝗜𝗣𝗘𝗡 😾‼️*\n\n ${oi}\n\n🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
for (let mem of participants) {
teks += `•🫂•  @${mem.id.split('@')[0]}\n`}
teks += `*🐾AnthoBot*\n\n*😼♥️*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
