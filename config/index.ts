import type { AppInfo } from '@/types/app'
export const APP_ID = `b5ea2c0d-8d35-4316-81a3-9a0ba9c0669e`
export const API_KEY = `app-9jCsYESQxiBEawIzYAEYcixr`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat-Threejs',
  description: 'Chat with threejs,react three fiber, theatre.js',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

