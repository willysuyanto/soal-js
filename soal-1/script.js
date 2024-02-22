function sendMessage() {
  // Lengkapi fungsi berikut agar dapat mengirim pesan
  var messageInput = document.getElementById('') // isi dengan id yang tepat
  var message = messageInput.value
  if (message.trim() !== '') {
    var chatMessages = document.getElementById('') // isi dengan id yang tepat
    var chatBubble = document.createElement('div')
    chatBubble.className = 'chat-bubble right'
    chatBubble.textContent = message
    chatMessages.appendChild(chatBubble)
    messageInput.value = ''
    chatMessages.scrollTop = chatMessages.scrollHeight
  }
}
