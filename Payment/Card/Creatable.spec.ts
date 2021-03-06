import * as model from "../../index"
describe("Payment.Card.Creatable", () => {
	it("from", async () => {
		const payment = await model.Payment.Card.Creatable.from(
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXJkIiwiaWF0IjoxNTY5MjY1MzQ3MDk4LCJpZCI6InhMRmp6RWYzX3M0YyIsIm51bWJlciI6InRlc3QwMDEiLCJyZWZlcmVuY2UiOiJjY2ExODEyMS05YjZjLTRkYjQtODJhZS0yZjk5ZjkxNGM0YWQiLCJkZXNjcmlwdG9yIjoidGVzdCB0cmFuc2FjdGlvbiIsImlwIjoiODIuMjA5LjE0MC4xOTUiLCJjcmVhdGVkIjoiMjAxOS0wOS0yM1QxOTowMjoyNiswMDowMCIsImFtb3VudCI6MTMzNy40MiwiY3VycmVuY3kiOiJTRUsiLCJjYXJkIjp7ImlkIjoiT2l0cGl5ZE8iLCJzY2hlbWUiOiJ2aXNhIiwiaWluIjoiNDExMTExMTEiLCJsYXN0NCI6IjExMTEiLCJleHBpcmVzIjpbMSwyMF19LCJjYXB0dXJlIjpbXSwicmVmdW5kIjpbXX0.Zw-j7VnqnXehpfs7aLmhdrVBzQ2rNsRAvL7o_0Y-JmFPX-6H3MTjd_3UZBLxL9GBoTcOMIOa0OrtAFf0-kwzBzTmTBOpSs9ISjI6PupemmDz5ye9wqtNgu6XLRBSs2f-XaJ9ZhMOFPgmiko-_jhAoZ0ZM4rll9Secib5TwNfmaaVGySbSPUTHNkSc9NtZivsVQJr45SQ5Y_bhOKcjueSrj8Czp3Al7Z6jGVWwRfwgZmv_YkSumSO8yiORWzsrVBP_SyrvOwovxL0xYu9eGDAOf3xmimqCkZe9fI-dtCTvnNc_SSLaZSA4ev1BR04jnP0ruSBLqebHydDl6BBltx1xQ"
		)
		expect(payment).toEqual({
			reference:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXJkIiwiaWF0IjoxNTY5MjY1MzQ3MDk4LCJpZCI6InhMRmp6RWYzX3M0YyIsIm51bWJlciI6InRlc3QwMDEiLCJyZWZlcmVuY2UiOiJjY2ExODEyMS05YjZjLTRkYjQtODJhZS0yZjk5ZjkxNGM0YWQiLCJkZXNjcmlwdG9yIjoidGVzdCB0cmFuc2FjdGlvbiIsImlwIjoiODIuMjA5LjE0MC4xOTUiLCJjcmVhdGVkIjoiMjAxOS0wOS0yM1QxOTowMjoyNiswMDowMCIsImFtb3VudCI6MTMzNy40MiwiY3VycmVuY3kiOiJTRUsiLCJjYXJkIjp7ImlkIjoiT2l0cGl5ZE8iLCJzY2hlbWUiOiJ2aXNhIiwiaWluIjoiNDExMTExMTEiLCJsYXN0NCI6IjExMTEiLCJleHBpcmVzIjpbMSwyMF19LCJjYXB0dXJlIjpbXSwicmVmdW5kIjpbXX0.Zw-j7VnqnXehpfs7aLmhdrVBzQ2rNsRAvL7o_0Y-JmFPX-6H3MTjd_3UZBLxL9GBoTcOMIOa0OrtAFf0-kwzBzTmTBOpSs9ISjI6PupemmDz5ye9wqtNgu6XLRBSs2f-XaJ9ZhMOFPgmiko-_jhAoZ0ZM4rll9Secib5TwNfmaaVGySbSPUTHNkSc9NtZivsVQJr45SQ5Y_bhOKcjueSrj8Czp3Al7Z6jGVWwRfwgZmv_YkSumSO8yiORWzsrVBP_SyrvOwovxL0xYu9eGDAOf3xmimqCkZe9fI-dtCTvnNc_SSLaZSA4ev1BR04jnP0ruSBLqebHydDl6BBltx1xQ",
			type: "card",
		})
	})
	it("Payment.Card.Creatable.is reference", async () => {
		const payment = {
			number: "5KZD-k",
			reference:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXJkIiwiaWF0IjoxNTY5MzE1MTk1MDkxLCJpZCI6IkxSUXkwR1duajZ2byIsIm51bWJlciI6IjVLWkQtayIsInJlZmVyZW5jZSI6ImY5ZTc4ODA3LTcxNzctNDZkNS04NmJiLTkwMTM4MDE1MTNkNyIsImNyZWF0ZWQiOiIyMDE5LTA5LTI0VDA4OjUzOjE0KzAwOjAwIiwiYW1vdW50Ijo4OTksImN1cnJlbmN5IjoiU0VLIiwiY2FyZCI6eyJpZCI6IndfRHZsQWQyIiwic2NoZW1lIjoidmlzYSIsImlpbiI6IjQxMDAwMDAwIiwibGFzdDQiOiIwMDAwIiwiZXhwaXJlcyI6WzIsMjBdfSwiY2FwdHVyZSI6W10sInJlZnVuZCI6W119.MTmSc8eMo49wFeLoHli7kfdVpaWDt7vLcoirYFRUWHrf3KkuyK-_ZtHsLdRqiSUS_jrMhm0q-v-VxOcvK25XiwQFb5OvDtsjkIMXD4FKroNl4ajJ8xJvn_yFq7xWQeXUKuEFkIAeV11gKxR6zhFci9AFSYYl_G4BsShVe134UgT8uCUbGXxfh54tcEgT3DgKzJ_A09RmXp2-6ZPe6y8kr-MqQMoCd8Ew86reSjf4m3hJtpKeAyKEXf_-gZ0VaWDbrFvDXzy22BJ8SeSS7l44AcLL1Zq7ohwWYx1EeyURmQuqeOfQ6gofYK5MipDa_opgxgXSuEIvB4XdyZEu2GrvKg",
			type: "card",
		}
		expect(model.Payment.Creatable.is(payment)).toBe(true)
	})
	it("Payment.Card.Creatable.is and has account id", async () => {
		const payment = {
			type: "card",
			card: "eyJ.body.sign",
			account: "1234567890123456",
			currency: "SEK",
			amount: 10,
		}
		expect(model.Payment.Creatable.is(payment)).toBe(true)
	})
	it("Payment.Card.Creatable.is card payment missing currency", async () => {
		const payment = {
			type: "card",
			card: "eyJ.body.sign",
			amount: 10,
		}
		expect(model.Payment.Creatable.is(payment)).toBeFalsy()
	})
	it("Payment.Card.Creatable.is card payment missing amount", async () => {
		const payment = {
			type: "card",
			card: "eyJ.body.sign",
			currency: "SEK",
		}
		expect(model.Payment.Creatable.is(payment)).toBeFalsy()
	})
	it("Payment.Card.Creatable.is card payment missing amount and currency", async () => {
		const payment = {
			type: "card",
			card: "eyJ.body.sign",
			currency: "SEK",
		}
		expect(model.Payment.Creatable.is(payment)).toBeFalsy()
	})
	it("Payment.Card.Creatable.is reference payment that doesn't allow amount and currency", async () => {
		const payment = {
			type: "card",
			reference: "eyJ.body.sign",
			currency: "SEK",
			amount: 10,
		}
		expect(model.Payment.Creatable.is(payment)).toBeFalsy()
	})
	it("Payment.Card.Creatable.is with verification", async () => {
		const payment = {
			type: "card",
			card: "eyJ.body.sign",
			currency: "SEK",
			amount: 10,
			verification: {
				type: "method",
				data: {
					threeDSServerTransID: "abcd",
				},
			},
		}
		expect(model.Payment.Creatable.is(payment)).toBeTruthy()
	})
})
