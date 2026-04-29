/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['254788409105','254756992340'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: 'V',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXbOiOBT8L3nVGgFBwKpbtaCAgIqI+LU1DxECRj4NAcUp//sW3rlz52F36i5PIUn16dOnOz9AXuAK2agF4x+gJLiBFHVL2pYIjIFaRxEioA9CSCEYg0qbwQm7joMdRxa7KWHOhV+bvmpUw8PRYQIor7HM+cp2Jr2BZx+U9SnFwR8Abw+hJ6yWq0HkutIIL+TBDa5Surd419tQMyGsvUvdkz3dFG/g2SFCTHAea+UZZYjA1EbtCmLyNfqH2ZKJ3QOznbrKbd66HrO7nFY74z67EEmeMrvtYVgXR870/a/Rn8XS5eJd4GiwZc7tgguWg9C9CJ524U7SZhnchalN1ashaOY7/QrHOQrNEOUU0/bLumtztPJPu9VAErX4WK2n00Nzdel8fshRnagPZOym27t+8X3ma8Rbu9SToY3x7XLe6u4g0VJ4XxSCruujejifWEtx/1BNXVsnvxNfkQ+vJP9Hd2yYyIWVOLD1h+GgeoBHylq1+Oji5DzvHNvEkfelS7z8i7qvMJnxFUL5MegdGulsPSxTSJM1KRONOobi3JwkaJPmdHY/6UNakz+6I8h6nM7BPaZllGreDYYJ3qP48djTzVBu+TK2zmJmacSZhd41n47CZj8XbIuydWOLhlREQ3t/RbW5YdPeTL2onKrEb6+OEtSaIRizzz4gKMYVJZDiIn/tiVIfwLDxUEAQfckL0keSyXOqHQeusVT9qePt+P0By/Iw3Q1sidOGnGINlguec99AH5SkCFBVoXCGK1qQdoGqCsaoAuO/v/dBju70fXBduSHbBxEmFfXzukwLGH5M9eMQBkFR59Rr82DSLRABY+ZzG1GK87jqdKxzSIIzbtDkDGkFxhFMK/SrQ0RQCMaU1OhXaidF2AnPaeKB1dU16IPsNRAcdrsCL0oSz8gsI4xH0l/Vt1sHC8vyW44o6IP0dY2VpRErMhw7ZASGkbub3cHzF8MOMEQU4rQCYzCxnO1dDlRtnit3STIMRYuVSayAz44+rPEuPX9x2dDk6EIr3Sr2DfwQ85ndrLxoc2KvOkyYLbulibljDm//AgLGoManZB/f3FTRsm198q3mlPkJrwgPY35lj7nubbVwu7axMBQyr51vkZu6S2dwsDkoB8ha1DjwtCRvSUYLbdjzROcxcd+6aiFqcIB+L1a27DUpDuv9HaVmEMsqLgZJrJZEVaT4np5Up7Amp7nt7Rxe1QKZnyC6E8+9Fg3qid3M/UcjZq0VKV6DlqK2RJfD/lXsIzTpz8cKv+zUzar7jTB6ZT+HGfrK7N6JdxZjnv3fMH6+Jv+RSBWZzHLvLclGtf25qatF1RPuLXkwOcPJ8Lwrl3q4PR0nOjXA8/m9D8oU0qggGRgDmIekwCHoA1LUnWfNPCr+UGyiJKZyi+dd5ymsqPKZgw3OUEVhVnZpFUVekLkR3wdZq5SlRyH9iA9Qus+yIvD8B7A30DlaBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: true,
    autoTyping: true,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: true,
      antibot: false,
      anticall: true, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: true,
      antidelete: true,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
