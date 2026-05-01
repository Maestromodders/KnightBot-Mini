/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['254788409105','254103260460'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVmgZUUKu6amlQ/EQRP8CteQgQIBI+TAKIU/73KezpmXnYne19CyF17rnnnHu/gSzHDC1RA8bfQEFxBTlqj7wpEBiDtzIMEQVdEEAOwRiUc+ovbjd9wfPTttzE9oiph0l8MQ67OFrycO+ITnkrJP80fwWPLihKj2D/D4DrF9tduldc7pnVCxq50/QxmiFlWuzc6uQdhKRJ4eAqOdh6BY8WEWKKs2hSxChFFJIlarYQ08/Rn6yN8+XFrNS7j8JUpmvpVrsOJeu+b51FyU7FIY83yUY4CJ+jXzpXifiesVexKG6Pts+13TaawS1Zn04E5961yXWHzZTd8J0+w1GGgnmAMo5582ndc2M4TZlMRtMgSfQYJxm/Xp1R52BLHfKiC3E0o0Z0ORLh8Dnib0dhONJJKnX0ReWL28ul1zjGKNd03ZoqxnR5i+/CVL/EE+t34lv6kZXk/+ieT4f3m+Nrrpps1pAI+VQ/XNBgOb3It4nIEnchNYujoWHjk7GJ7/fadnNls5sdS2PpapbReMHwRc+tEJpKMGGHmq2GqTGZ/KIPeUn/xJJzd+rv/PC08N5Ifkr6mtOxC1x4Kyfx31Z3wWy8tJZGbuhFtZoyQpZGIphz1zg7I2EvknqD1rwfY4zssgzCq6pQtX59dpSgZh6AsfjoAooizDiFHOdZe9frAhhUNvIp4k9xwTKYDYomjm8ZMo6TKVGvJd3WZ1M6mmfJNHQ91vyXqLmvjPoVdEFBcx8xhoIZZjynzRoxBiPEwPjvr12QoRt/t+1ZTOyCEFPGD1lZkBwGH55+/IS+n5cZt5vM19oDomAs/LpGnOMsYq2KZQapH+MKaTHkDIxDSBj62R+iKABjTkv0c2a1PGhl3/UHjm3OLNAF6dMOHIAxkAZ9UehJstCXhbEk/8W+1C0sLIovGeKgC8jzWU9QRGXUF+VBT5Z67cP2/vGTYIsXIA4xYWAMtI3Xj+vEGiqX/b12XdVW1aWqtqJ9NPSRi3fle7vzfGMqVfribE6H0bUj7S/zRnZX+3ze31vldietijUhjOT/BNKGykyrwFws1G2mLAMsYX0S3FZJNarLRWLcFUVRWHCzfdvSIn6I9pZKJ7O6ULNsIDkenAy1E10Mwr4qW+Z1NSK9RLrr1mtbLUAV9tHvxRadjnVXtYjIHc2r30SyDU3WY/dgp3q7gVndmGGEehn3hpM95voMCTNpCS+eOfM6m+bSGa5Ec0NuL1ezqm3qmrujIr9Z74l9Tgz5sanwM02tVe1niNFz8DPYGvjf1r0TbxMmPLq/YfxYJf+2ogLhZOsXpAwq8U7IFlY86TfrMtUEWdtMhNVFCLC8X5y9BQSPx9cuKAjkYU5TMAYwC2iOA9AFNC/byM6zMP9DMU1N5roV2W3nBDKu/hqDPU4R4zAtwFhUFEUe9EfC8PEdwclK2DoHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
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
  
