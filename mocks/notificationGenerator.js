const generateNotification = () => {
  const types = ['mention', 'direct_message', 'friend_request', 'invite'];
  const usernames = ['Emma', 'Sophia', 'Aiden', 'Mia', 'Jordan', 'Olivia', 'Ethan', 'Taylor', 'Liam', 'Noah', 'Ava', 'Isabella', 'Lucas', 'Mason', 'Harper', 'Ella', 'Amelia', 'Evelyn', 'Logan'];
  
  const type = types[Math.floor(Math.random() * types.length)];
  const target_user_username = 'Cameron';
  const originUserUsername = usernames[Math.floor(Math.random() * usernames.length)];
  const content = type === 'mention' ? `@${target_user_username}, this is a random mention!` : 
                  type === 'direct_message' ? `Hey ${target_user_username}, this is a random direct message.` :
                  type === 'friend_request' ? null :
                  type === 'invite' ? `@${target_user_username}, please join our team!` :
                  null;

  return {
    id: Math.floor(Math.random() * 1000).toString(),
    target_user_id: '603f650b38f750047ce0b052',
    origin_user_id: Math.floor(Math.random() * 1000).toString(),
    origin_user_username: originUserUsername,
    channel_id: Math.floor(Math.random() * 1000).toString(),
    channel_name: type === 'mention' || type === 'invite' ? 'General' : null,
    community_id: type === 'mention' || type === 'invite' ? '523f650b38f750047ce0b082' : null,
    community_name: type === 'mention' ? 'Root Developers' : null,
    direct_message_id: type === 'direct_message' ? Math.floor(Math.random() * 1000).toString() : null,
    timestamp: new Date().toISOString(),
    read: false,
    type,
    target_user_username,
    content
  }
}

export { generateNotification }