const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
 
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [                       
      
        "🔥 Artık 7/24 Aktif",  
        "💡 c!davet | Botumuzu ekleyin",
        "👨 320  Kullanıcı!",
        "🌍 5 Sunucuda Hizmet!",
        "c!yardım 🔥 + c!davet 🔥 + c!küfür-engelle 🔥  + c!reklam-engelle 🔥  + c!otorol 🔥 + c!slowmode 🔥 "
        
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "");
        }, 2 * 2500);
}
