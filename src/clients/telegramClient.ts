import { Telegraf } from 'telegraf'
import { TELEGRAM_ACCESS_TOKEN } from '../utils/secrets'

export const TelegramClient = new Telegraf(TELEGRAM_ACCESS_TOKEN)
