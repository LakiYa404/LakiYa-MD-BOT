/*
 ▬▬▬▬▬▬▬▬▬▬▬▬
 𝙇𝘼𝙆𝙄𝙔𝘼-𝙈𝘿-𝘽𝙊𝙏
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 08 / 23 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙤𝙧 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 ▬▬▬▬▬▬▬▬▬▬▬▬
 ❤️𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
            @𝙈𝙖𝙙𝙝𝙪𝙬𝙖
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94767353051'] // Owner number , (ඔයාගෙ නම්බර් එක )
global.pemilik = ['94768353051'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94768353051'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'LakiYa' // Your name ඔබේ නම 
global.botnma = '© ꪶꪖᴋɪꪗꪖ ʙꪮᴛ.!°' // Your bot name , ඔබගෙ බොට්ගේ නම 
global.ownernma = 'ꪶꪖᴋɪꪗꪖ' //ownernama,ownername
global.packname = 'LakiYa Pack' // Sticker package name 
global.author = 'LakiYa' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති `*© ꪶꪖᴋɪꪗꪖ ʙꪮᴛ ꀤꪀᥴ.!°*` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/6093a01339d35077bd45d.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks For using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `*◉═════════════◉*
*🎃ᴍꪮᴅ ᴋ𝐢ɴɢ ꪮꜰꜰɪᴄɪꪖʟ⭐*
*◉═════════════◉*`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© ꪶꪖᴋɪꪗꪖ ʙꪮᴛ ꀤꪀᥴ.!°`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
