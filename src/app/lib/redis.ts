import { Redis } from "@upstash/redis"

export const redis = new Redis({
  url: "https://pure-insect-36606.upstash.io",
  token: process.env.REDIS_KEY!,
})
