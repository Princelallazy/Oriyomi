//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347077816250";
global.owner = process.env.OWNER_NUMBER || "2347077816250";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FGckxXdllKUU1BNFh3RGlOQ0NFREp4ZmlscE55RmtZWndkZ3hNUXQxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiditDNEtRMFErTWpMb1duNWVoQVNnTUhsZlltUzJBcEJKU2NGRnQvMkVTUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QUNoZHpXMmlYclYyL09HTzIxb1YvZlgwWmpIUk1tUDV2TTZ6NmpGZDFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5VkM3RnpoWTd0aE5USmd2eElTMTdZaHhLWDF5NUVFZnZOTFgyRURQUW0wPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Ld2NGbVhaKzM5Tk04eWdGNm5PeWN1d0FRbjhLNkNRcVQyamowTzdJSGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpmVm9xRjZOa3hQZ1VMSWlDSVQ1VFVQVjU0V01Ddk1OTkRzSndtakZsRzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUl5YXQxcnNlbVJBdjlOckhPWE1CZ0xCTnNHZlB3NTZpUWptSEhDclkwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejJRVU4rd0ZOM1paN1BqWlZhVkxva1FBMGZyemJSZ0s2VlU0Y0Y4eld3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlU4Z0N1QWpKSzdWeXlPUGt3dEdiUmtzRUdSbFBYcWVSLzd4c3hEWXh0ckJ4SHdMUXVRR2JLMnJkNE5TeVVvMGtKNWhZNzNpT1BxbysrdWI4b3RRaGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6InI2WDY5Uis4TVMvc1hZS0RPT3o1NXdDQzdWcm9CMVl6L25vdmd1ODI0bWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlncVJ1WG12VGl5Ri1UcERFUHhrVWciLCJwaG9uZUlkIjoiYzYxZjFlYzItMjM4Ni00NjY1LTk4ZTktYzdkNmFlYWFhMDVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNRbXNqRnFRZ2k4REoxODFCWmY4RG1wYzNtWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Y0Q3dWI0bi9GM2c4bGtuQXZVa2dqN1ZPRTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjdGQ1g2WlkiLCJtZSI6eyJpZCI6IjIzNDcwNzc4MTYyNTA6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhlIFJlYWwgVmlzaW9uIE9mIFNoYXJwIEJsYWRlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJL014ZUFGRUxic243c0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWQ2pHL0Q5TExPbFk3a3RMN0hESGloYjd0eXdVelVjYm93SEk2eGc5WlVVPSIsImFjY291bnRTaWduYXR1cmUiOiJybnhsWVNZSEdJaTlqVmxlTnltS01WSlNqNXNaWFFNdW1QWUpubmRSbVVYamdZMG40dkI2cWszekk3cEovSlBiWUVWNHFrMGtXaU1PSjk4TWhWNFJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibi9zSEFaTUkrelc4aVd0a01PUUNFeFJMcFZXSkNtVXhUSjBDdlJEbEpFd2JxeXBJYzBBZVhVbENpbXhTZHE4Ujc3SWxuRDFRanF4b0F2WC9MOHIvamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDc3ODE2MjUwOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZRb3h2dy9TeXpwV081TFMreHd4NG9XKzdjc0ZNMUhHNk1CeU9zWVBXVkYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ4NjY0OTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUEJvIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
