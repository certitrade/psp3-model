import * as authly from "authly"

export interface Reference {
	type: Reference.Type
	account?: authly.Identifier
	id?: authly.Identifier
	number?: string
}

export namespace Reference {
	export function is(value: any | Reference): value is Reference {
		return (
			typeof value == "object" &&
			Type.is(value.type) &&
			(value.id == undefined || authly.Identifier.is(value.id)) &&
			(value.account == undefined || authly.Identifier.is(value.account)) &&
			(value.number == undefined || typeof value.number == "string")
		)
	}
	export type Type = "order" | "user" | "account" | "merchant" | "authorization"
	export namespace Type {
		export function is(value: any | Type): value is Type {
			return (
				value == "order" || value == "user" || value == "account" || value == "merchant" || value == "authorization"
			)
		}
	}
}
