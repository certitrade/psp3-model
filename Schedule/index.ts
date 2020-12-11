import { Schedule as Type } from "./Schedule"
import { next as nextDate } from "./next"
import { toString as scheduleToString } from "./toString"

export type Schedule = Type
export namespace Schedule {
	export const is = Type.is
	export const next = nextDate
	export const extractDivisor = Type.extractDivisor
	export const extractOffset = Type.extractOffset
	export const frequencies = Type.frequencies
	export const months = Type.months
	export const weekdays = Type.weekdays
	export const quarterly = Type.quarterly
	export const daysOfMonth = Type.dayOfMonthTypes
	export const toString = scheduleToString
}