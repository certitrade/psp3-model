import * as gracely from "gracely"
import { Base } from "./Base"

export class Error extends Base {
	readonly result = "failure"
	readonly type = "error"
	constructor(readonly error: gracely.Error) {
		super()
	}
	static is(value: any | Error): value is Error {
		return value instanceof Error
	}
}
