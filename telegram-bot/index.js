const TelegramBot = require('node-telegram-bot-api');

const token = '8306688023:AAF9YZW4oS1FW3vgdbpvo758dnlToLx6UJM';
const bot = new TelegramBot(token, { polling: true });

const userState = {};

function menuPrincipal(chatId, messageId = null) {
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📅 Agendar horário", callback_data: "agendar" }]]
    }
  };

  if (messageId) {
    bot.editMessageText("Agora você está no MenuPrincipal! O que gostaria de fazer? (Selecione um botão abaixo!)", {
      chat_id: chatId,
      message_id: messageId,
      ...options
    }).catch(() => {});
  } else {
    bot.sendMessage(chatId, "👋 Bem-vindo ao agendamento de NormaDesign!", options);
  }
}

function menuDias(chatId, messageId) {
  bot.editMessageText("Escolha o dia:", {
    chat_id: chatId,
    message_id: messageId,
    reply_markup: {
      inline_keyboard: [
        [{ text: "Segunda", callback_data: "dia_segunda" }],
        [{ text: "Terça", callback_data: "dia_terca" }],
        [{ text: "⬅️ Voltar", callback_data: "voltar" }]
      ]
    }
  }).catch(() => {});
}

function menuHorarios(chatId, messageId) {
  bot.editMessageText("Escolha o horário:", {
    chat_id: chatId,
    message_id: messageId,
    reply_markup: {
      inline_keyboard: [
        [{ text: "14:00", callback_data: "hora_14" }],
        [{ text: "16:00", callback_data: "hora_16" }]
      ]
    }
  }).catch(() => {});
}

function confirmar(chatId, messageId) {
  const { dia, hora } = userState[chatId];
  reply_markup: {
  inline_keyboard: [
    [{ text: "🔄 Novo agendamento", callback_data: "reiniciar" }]
  ]
}

  bot.editMessageText(
    `✅ Agendamento confirmado!\n\n📅 ${dia}\n⏰ ${hora}\n\nObrigado! Seu atendimento foi encerrado.`,
    {
      chat_id: chatId,
      message_id: messageId
    }
  ).catch(() => {});

  // 🔥 encerra sessão
  delete userState[chatId];
}

/* 🔥 HANDLERS DEVEM FICAR AQUI EMBAIXO, FORA DE TUDO */

bot.onText(/\/start/, (msg) => {
  menuPrincipal(msg.chat.id);
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const data = query.data;

  if (!userState[chatId]) userState[chatId] = {};

  switch (data) {
    case "agendar":
      menuDias(chatId, messageId);
      break;

    case "dia_segunda":
      userState[chatId].dia = "Segunda";
      menuHorarios(chatId, messageId);
      break;

    case "dia_terca":
      userState[chatId].dia = "Terça";
      menuHorarios(chatId, messageId);
      break;

    case "hora_14":
      userState[chatId].hora = "14:00";
      confirmar(chatId, messageId);
      break;

    case "hora_16":
      userState[chatId].hora = "16:00";
      confirmar(chatId, messageId);
      break;

    case "voltar":
      menuPrincipal(chatId, messageId);
      break;
    case "reiniciar":
      menuPrincipal(chatId, messageId);
      break;
  }

  bot.answerCallbackQuery(query.id);
});