const generateNotification = () => {
  const types = ['mention', 'direct_message', 'friend_request', 'invite'];
  const usernames = ['Emma', 'Sophia', 'Aiden', 'Mia', 'Jordan', 'Olivia', 'Ethan', 'Taylor', 'Liam', 'Noah', 'Ava', 'Isabella', 'Lucas', 'Mason', 'Harper', 'Ella', 'Amelia', 'Evelyn', 'Logan'];
  
  const type = types[Math.floor(Math.random() * types.length)];
  const targetUserId = '603f650b38f750047ce0b052';
  const targetUserUsername = 'Cameron';
  const originUserId = Math.floor(Math.random() * 1000).toString();
  const originUserUsername = usernames[Math.floor(Math.random() * usernames.length)];
  const content = type === 'mention' ? `@${targetUserUsername}, this is a random mention!` : 
                  type === 'direct_message' ? `Hey ${targetUserUsername}, this is a random direct message.` :
                  type === 'friend_request' ? null :
                  type === 'invite' ? `@${targetUserUsername}, please join our team!` :
                  null;
  const timestamp = new Date().toISOString();
  const channelId = Math.floor(Math.random() * 1000).toString();
  const channelName = type === 'mention' || type === 'invite' ? 'General' : null;
  const communityId = type === 'mention' || type === 'invite' ? '523f650b38f750047ce0b082' : null;
  const communityName = type === 'mention' ? 'Root Developers' : null;
  const directMessageId = type === 'direct_message' ? Math.floor(Math.random() * 1000).toString() : null;

  return {
    type,
    id: Math.floor(Math.random() * 1000).toString(),
    target_user_id: targetUserId,
    target_user_username: targetUserUsername,
    origin_user_id: originUserId,
    origin_user_username: originUserUsername,
    content,
    timestamp,
    channel_id: channelId,
    channel_name: channelName,
    community_id: communityId,
    community_name: communityName,
    direct_message_id: directMessageId,
  }
}

export { generateNotification }