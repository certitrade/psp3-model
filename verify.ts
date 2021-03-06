import * as authly from "authly"

const productionVerifier = authly.Verifier.create(
	authly.Algorithm.RS256(
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4b69lzXDidPJ2OtQIQtuYFlVWO1IBDXvN8iWyFph3HSP18EWCdZ6+5RcMgdyEfxWByurM7kbCgORMGqBm66n8XNBs78Rkva3jMudSoOHunsfI3Iu75dd8DJp3J2plti2eudbRw9v7T8F7f+MG9kITwXH5LHJ/bTA9R5JurcsyNY51iGpZ5spI+59GgJ8NomMyFKwkYcyPU3Elg+XiEK2vSmG3Onigo7Xo76CXPAyTRilwfvyNYM1s6a2P31fm8e0y98bwPxiv/qVNOQ8xu409R8gMC9ieyPeuR6pRR9/IK0vdcL62NhRQov6rd89exAxte909dpCHVqeDpSyNfgu6wIDAQAB"
	)
)
const developmentVerifier = authly.Verifier.create(
	authly.Algorithm.RS256(
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+u7ZnXr3XecpcgEbYAPLOrNKZ1V0+JxiPawhOJ+LrbfP5czPB2VnWLyD8xVnZ+0rZnJrG4Iu+AZmpdT44KNAqTpN7xQirLlg+bfUJqGlEDQiSw2rJaa+/Y+dCvoC3MFVtTWMlre6bVmCbX+PIl8tg8rSNN7E+tkkl7T4UuHt/ONVOOOvwCJDo5I0SOotfHSCIckc/CkxLEELgIiR8F800+Ww5ofwzJwLw3zLw0BvqzB4OH74v82DS1mYpS38ZQwQKMcE/BP6eyHokHlmeOaXo993RyWfuVj3ocpbOACaNzqNp9eiREmYY8RfO4r9ZNhkrfetoQxPqQcG+FAiObv/EQIDAQAB"
	)
)

export async function verify(token: authly.Token): Promise<authly.Payload | undefined> {
	return (
		(productionVerifier && (await productionVerifier.verify(token, "production"))) ||
		(developmentVerifier && developmentVerifier.verify(token, "development"))
	)
}
