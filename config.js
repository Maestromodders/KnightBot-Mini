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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGOUORnTEIoLgBcU7vTEP1VJACRRYFApO+O8T2NMz87A72/tWt8iTJzNPfQOkwBWaoRYMv4GS4itkqFuytkRgCEZ1FCEKeiCEDIIhCBynFAPf03kpQy43YKbk+Bjtr5dl2dRTrYnFtxMSxDaNX8CjB8r6LcOnPwDuDsItlxZBKTPxroW3PS5mVmPPHH/tFWnpLvcz6bw9CnyqvYBHhwgxxSS2ygTliMJshtoVxPRz9IXpPLoJZwv7RppETuqacw3tHaLg5aFBu5utxSshZnZ92H2OvgMvjnCl6/7ikhabxeyY+tp8UsH2MgnTdHSI7ehwWvrXQ2y8069wTFDohogwzNpP686t9iyu9HCG/biNNwOyutdSdN8xS3g9uKN2U2sB3zc3rm18jnhwaXkcJCo5izJV/NRxLffNiazBesbW94m0i+ea0WS5edR+J76iH1lJ/4/um5F0T51YvSz4HE2nULdGGZnOzZt218NMHcxMIr3uxqGyX3yOfjUtEsbm58NaMEwb08gLlLmK+vbK6+MwGTkn/8JmRK3w7Rd9yGr6J5YL/+qtjEHLe+7aFE2jX56T6Xk12Y+EWpdHXJPvbtOBuDHq7b6t81mTXzhvWU9Xb9p+xw5KmLf6qwOD1lsUh4jciD3YGMbLs6MUtW4IhvyjByiKccUoZLggzzO5B2B43aATReypLhh5rd1XOKdk42R6cZWNkRg64qvrZBHNoutu6yjBjfrOQQ5eQA+UtDihqkKhgytW0HaBqgrGqALDv7/2AEENe/etqybyPRBhWrEdqcusgOGHqR+X8HQqasI2LTmZ3QJRMBz8OkaMYRJXnYw1gfSU4CsyE8gqMIxgVqGfDSKKQjBktEY/h9Yswk53bS/5E3VrgB7In37gsJtNWVJlRdcFURoMee2v6sutg4Vl+YUgBnogez7jJUkXZEWUeUURBa172V08fjLsAEPEIM4qMATmQo3OU2lire5cW0mTiWHFhhl3tT86+kjGu/R5pLX82I9mzak9VAPoFDNVXh5lVccyURMxnkurhkoraXB7+QcQMAR9mnHCNX6bhLc2rkn6qsh6E+9u1bQZ+42zZXebln0+yCYuOduG3Nw5dLbefH3XWNMB13BEigsb+WmbCzYOA4672Ub80lUL0RWf0O/F6pFr1Wv1rnjmZKlH/Jnfi9MiyHbzLFnK/TQae0zcK+o+POSkgOmybiQ9KbOAyddjubQ0m95TK4vvXoXP26OuJpk89t8z+5yZ7MdfhZ9x6rzqthFGz9EnsHPwv717J95FbPDo/Ybx4zP5l4EcvZL+gvkDp62Oi4x6k0Qxa26bcagf1K+cFEomN9YgN+a8BXg8vvZAmUEWFTQHQwBJSAscgh6gRd1l1iVR8YdipuG6Vhy7XecZrJjxaw62OEcVg3kJhryqyhKvC4ry/mpFi9KBVQKGQMwz/rwBj+/eFz+aVAcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
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
      antiall: true, // Owner only - blocks all messages from non-admins
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
  
