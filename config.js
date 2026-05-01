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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVGgERP6q6apEWRFFBRRq35iFA+BAImAQEp/zvU9jTM/OwO9vLU0hS55577jn5BnCRULRGLZh9AyVJashQt2RticAMzKswRAT0QQAZBDPQKo60mqtcipQVthx28aKhj4lzPd84Z75ab82bwtubHhtOXsCjD8rKyxL/D4CbRgguUTpnFm3GBbVj5BuyubvrcbM8Xu16/DY2Ar/aVLz+Ah4dIkxIgqNFGaMcEZitUWvChHyOvrDKtJgLLztnJ2e1tBUmd2EjoOASOz0zGg3d1fJo1BeHOdHn6C9v6Rt/WSoei2/u6Grfay+xp4lQ7C9WHYhqTiwcH0++nW/e6dMkwijQA4RZwtpP664pyG62E/amaxnsqQPNWEvZcTi8D4bJYLG8LFirnouRa9ru54i3YcsY8V71aFBZpWhZak+M6za/an7oUVovDO41rLfyXrZ+J26SD6+k/0d3a2u2rZjLS+4+9A164Rf4+npK87ndTGQpXy+27hEvck/Lxc/Rd/Z6YjHerdJj0/RMJXYz0dCNt1ez18s9Dg/ydhWxa+N82KajD1lF/uiORql4c3WOgyh9fS2ZJ/QOCdNNSPD4GLfnbStrfigeLfFo4ntF5+fmtFRRGgyMt/3G6F1zhWzP02p8Wg9hGB32qIovt5dnRylq9QDM+EcfEBQllBHIkgJ3e8NJH8CgPiCfIPZUFwjWNa3XByl1Q1JgZ6VPW9G77adjfajibHLJZOG0ydx0uyheQB+UpPARpShYJpQVpN0gSmGEKJj9/bUPMGrY+9ye1fg+CBNCmY2rMitg8DHUj0Po+0WF2aHFvtItEAEz7tc2YizBEe1krDAkfpzUSIkho2AWwoyinw0iggIwY6RCP0OrFEGnu+pq6/1hI4A+yJ/zSIKu55E4nkxEbspzo9mY/4t+uXWwsCy/YMRAH2TPa/x0IvFjTuCH3Ijjpt3N7uDxk2EHGCAGk4yCGVBWzqmZ+vOFoWFuMtE0eRHJSiSDXx19OONdevFi8YEusM2itGhka8l9jJfr2jyER4+/qjDlTvyJpbrDuS//AAJmYJJIvbvA3RS0dKUUH7eLa0A9yStxL5OKSXkqsSZp9lrfSnbZxHhwhvXEGqA3S5OTk+zaLDBpOk2n2XWjDaMbqVau3NmoDwJUJz76vdiOZLFpp+pquTvddnVlVtOlIdnjm5+uOFOyFP9eZ/RUa7V1obZaDlXRsEJIxV1zRYV52sQWriRXgzJqD2LtWIJnx/K7Z5+ZyX68VcnTTt2sut8wQc/oY9hN8L9n9068sxj36P+G8eMx+ZdAzpHObd8OW3Kcr21DV+cF7Y2altw5zAlTGDvlVg1O3llRmQYej699UGaQhQXJwQxAHJAiCUAfkKLqPKvjsPhDMUVOdfkWGV3nGaRM/pWDY5IjymBeghk/Ho+lkSBJwz7IW7ksDwyyj/gAufvmCwQe3wG8FYiQWQcAAA==',
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
  
