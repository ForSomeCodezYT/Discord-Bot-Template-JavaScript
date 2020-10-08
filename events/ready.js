module.exports = (client) => {
    console.log(`${client.user.tag} (${client.user.id}) ${client.guilds.cache.size} servers and ${client.users.cache.size} members`)
}