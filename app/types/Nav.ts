import type { RouteLocationAsString } from '#vue-router'

export interface NavType {
  title: string
  icon: string
  path: RouteLocationAsString
  class?: string
}
