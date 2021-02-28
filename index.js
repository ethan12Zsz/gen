const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const botname = "NexGen";
const prefix1 = "+";
var fs = require("fs");
var lineReader = require("line-reader");
var async = require("async");
const firstline = require("firstline");
const generated = new Set();
var os = require("os");
var express = require('express');
var app = express();
const chalk = require('chalk');
const { eachLine } = require("line-reader");
const ExtensionsFactory = require("line-counter-node").ExtensionsFactory;

  bot.on('ready', msg => {
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par Nexrox#1234 !`)));  
  console.log("");                                    
  console.log("");                                  

  console.log(`Statistiques globales : \n\nLe bot a un total de ${bot.guilds.cache.size} serveurs. \nPour un total de ${bot.users.cache.size} membres.`)
  console.log("Connecté en tant que " + bot.user.id + " | Prefix : " + prefix1 + " | Nombre de Serveurs "+ bot.guilds.cache.size +" | Nombres de salons "+ bot.channels.cache.size +" | Utilisateur totaux "+ bot.users.cache.size +" | Nombre d'emojis totaux "+ bot.emojis.cache.size +'');
  bot.user.setActivity("!help - NexGen V2.0");
});

bot.on("message", message => {
    if (message.channel.id === config.botChannel) { 
        if (message.author.bot) return;
        var command = message.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];

        if (command === "gen") {
            if (generated.has(message.author.id)) {
                message.channel.send(
                    "Vous avez un temps de récupération de 15 minutes! - " +
                    message.author.tag
                );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Veuillez fournir un service!");
                var fs = require("fs");
                const filePath = __dirname + "/comptes/" + args[0] + ".txt";

                const embed = {
                    title: "En rupture de stock!",
                    description: "Le service que vous avez demandé est actuellement en rupture de stock!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/9boBrV9.png",
                        text: "Développé par Nexrox#1234"
                    },
                    image: {url:"https://i.imgur.com/9boBrV9.png"},
                    author: {
                        name: botname + " - générateur de compte",
                        url: "https://discord.gg/zqFcCby9kc",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };

                fs.readFile(filePath, function (err, data) {
                    if (!err) {
                        data = data.toString();
                        var position = data.toString().indexOf("\n");
                        var firstLine = data.split("\n")[0];
                        if(position == -1)
                        return message.channel.send({ embed });
                        message.author.send(firstLine);
                        if (position != -1) {
                            data = data.substr(position + 1);
                            fs.writeFile(filePath, data, function (err) {
                                const embed = {
                                    title: "Compte " + args[0] + " généré!",
                                    description: "Le compte de votre service demandé a été envoyé en tant que DM!",
                                    color: 0xff033d,
                                    timestamp: new Date(),
                                    footer: {
                                        icon_url: "https://i.imgur.com/9boBrV9.png",
                                        text: "Développé par Nexrox#1234"
                                    },
                                    image: {
                                        url:
                                            "https://i.imgur.com/9boBrV9.png"
                                    },
                                    author: {
                                        name: botname + " - générateur de compte",
                                        url: "https://discord.gg/zqFcCby9kc",
                                        icon_url: bot.displayAvatarURL
                                    },
                                    fields: []
                                };
                                message.channel.send({ embed });
                                generated.add(message.author.id);
                                setTimeout(() => {
                                    generated.delete(message.author.id);
                                }, 300000); // 86400000 = 24 H , 150000 = 15 Min
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            message.channel.send("En rupture de stock!");
                        }
                    } else {
                        const embed = {
                            title: "Service non trouvé!",
                            description: "Le service demandé est introuvable!",
                            color: 0xff033d,
                            timestamp: new Date(),
                            footer: {
                                icon_url:
                                    "https://i.imgur.com/9boBrV9.png",
                                text: "Développé par Nexrox#12347"
                            },
                            image: {url:"https://i.imgur.com/9boBrV9.png"},
                            author: {
                                     name: botname + " - générateur de compte",
                                     url: "https://discord.gg/zqFcCby9kc",
                                icon_url: bot.displayAvatarURL
                            },
                            fields: []
                        };
                        message.channel.send({ embed });
                        return;
                    }
                });
            }
        }
        else
        if (command === "stock") {
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/comptes/" + args[1] + ".txt";
            const LineCounter = require("line-counter-node").LineCounter;
            const Rules = require("line-counter-node").Rules;
            var adn = new LineCounter();
            var crunchy = new LineCounter();
            var disney = new LineCounter();
            var napster = new LineCounter();
            var nitro = new LineCounter();
            var nordvpn = new LineCounter();
            var snapchat = new LineCounter();
            var steam = new LineCounter();
            var uplay = new LineCounter();
            var spotify = new LineCounter();
            var instagram = new LineCounter();
            var wish = new LineCounter();
            var cod = new LineCounter();
            
            adn.setPath("./comptes/adn.txt")
            adn.setExtensions(ExtensionsFactory.from("txt"));
            adn.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
            adn.getLines(function(adnr){
                crunchy.setPath("./comptes/crunchyroll.txt")
                crunchy.setExtensions(ExtensionsFactory.from("txt"));
                crunchy.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                crunchy.getLines(function(crunchyr){
                    disney.setPath("./comptes/disney.txt")
                    disney.setExtensions(ExtensionsFactory.from("txt"));
                    disney.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                    disney.getLines(function(disneyy){
                        napster.setPath("./comptes/napster.txt")
                        napster.setExtensions(ExtensionsFactory.from("txt"));
                        napster.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                        napster.getLines(function(napsterr){
                            nitro.setPath("./comptes/nitro.txt")
                            nitro.setExtensions(ExtensionsFactory.from("txt"));
                            nitro.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                            nitro.getLines(function(nitroo){
                                nordvpn.setPath("./comptes/nordvpn.txt")
                                nordvpn.setExtensions(ExtensionsFactory.from("txt"));
                                nordvpn.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                nordvpn.getLines(function(nordvpnn){
                                    snapchat.setPath("./comptes/snapchat.txt")
                                    snapchat.setExtensions(ExtensionsFactory.from("txt"));
                                    snapchat.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                    snapchat.getLines(function(snapchatt){
                                            steam.setPath("./comptes/steam.txt")
                                            steam.setExtensions(ExtensionsFactory.from("txt"));
                                            steam.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                            steam.getLines(function(steamm){
                                            	 uplay.setPath("./comptes/uplay.txt")
                                                 uplay.setExtensions(ExtensionsFactory.from("txt"));
                                                 uplay.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                                 uplay.getLines(function(uplayy){
                                                 	spotify.setPath("./comptes/spotify.txt")
                                                    spotify.setExtensions(ExtensionsFactory.from("txt"));
                                                    spotify.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                                    spotify.getLines(function(spotifyy){
                                                        instagram.setPath("./comptes/instagram.txt")
                                                        instagram.setExtensions(ExtensionsFactory.from("txt"));
                                                        instagram.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                                        instagram.getLines(function(instagramm){
                                                            wish.setPath("./comptes/wish.txt")
                                                            wish.setExtensions(ExtensionsFactory.from("txt"));
                                                            wish.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                                            wish.getLines(function(wishh){
                                                                cod.setPath("./comptes/cod.txt")
                                                                cod.setExtensions(ExtensionsFactory.from("txt"));
                                                                cod.addRule(Rules.ignoreDir, ".git", ".idea", "node_modules");  // Ignores given directories
                                                                cod.getLines(function(codd){
                                                                    
fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                const embed = {
                    title: "STOCK !?",
                    description: `Voici le stock de NexGen :\n ADN : ${adnr.lines}\n Crunchyroll : ${crunchyr.lines}\n Disney : ${disneyy.lines}\n Napster : ${napsterr.lines}\n Nitro : ${nitroo.lines}\n NordVPN : ${nordvpnn.lines}\n Snapchat : ${snapchatt.lines}\n Steam : ${steamm.lines}\n Uplay : ${uplayy.lines}\n Spotify : ${spotifyy.lines}\n Instagram : ${instagramm.lines}\n Wish : ${wishh.lines}\n Cod : ${codd.lines}`,
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/9boBrV9.png",
                        text: "Développé par Nexrox#1234"
                    },
                    author: {
                        name: botname + " - générateur de compte",
                        url: "https://discord.gg/zqFcCby9kc",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });
        });
    });
});
});
});
});
});
});
});
});
});
});
});


 } if (command === "add") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Vous n'avez pas les autorisations pour faire cela!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            if(!account) return message.reply("Fournissez d'abord une chaîne de compte formatée!")
            if(!service) return message.reply("Fournir d'abord un service!")
            const filePath = __dirname + "/comptes/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                const embed = {
                    title: "Compte ajouté!",
                    description: "Compte ajouté avec succès à `" + service + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/9boBrV9.png",
                        text: "Développé par Nexrox#1234"
                    },
                    image: {url:"https://i.imgur.com/9boBrV9.png"},
                    author: {
                        name: botname + " - générateur de compte",
                        url: "https://discord.gg/zqFcCby9kc",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });


        }
        if (command === "create") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Vous n'avez pas les autorisations pour faire cela!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/comptes/" + args[0] + ".txt";
            fs.writeFile(filePath, 'zed:zed', function (err) {
                if (err) throw err;
                const embed = {
                    title: "Service créé!",
                    description: "Service créé avec succès `" + args[0] + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/9boBrV9.png",
                        text: "Développé par ZedPasDansLoL#1337"
                    },
                    image: {url:"https://i.imgur.com/9boBrV9.png"},
                    author: {
                        name: botname + " - générateur de compte",
                        url: "https://discord.gg/zqFcCby9kc",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });
        }
        if (command === "restock") {
            const embed = {
                title: "Merci de mettre un service!",
                description: "Veuillez fournir le nom du service réapprovisionné!",
                color: 0xff033d,
                timestamp: new Date(),
                footer: {
                    icon_url:
                        "https://i.imgur.com/9boBrV9.png",
                    text: "Développé par Nexrox#123437"
                },
                 image: {url:"https://i.imgur.com/9boBrV9.png"},
                author: {
                    name: botname + " - générateur de compte ",
                    url: "https://discord.gg/zqFcCby9kc",
                    icon_url: bot.displayAvatarURL
                },
                fields: []
            };
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Vous n'avez pas les autorisations pour faire cela!");
            if (!args[0])
            {
                return message.channel.send({ embed });
            }
            if (!args[1])
            {
                return message.channel.send({ embed });
            }
            else {
            bot.channels.cache.get("799590844503687178").then(message.channel.send("● Restock de compte: **" + args[0] + "**\n● Nombre de compte restock: **" + args[1] + " compte(s)**"));
            }
        }
    }
});

bot.login(process.env.TOKEN);
