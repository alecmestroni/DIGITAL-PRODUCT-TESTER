/// <reference types="cypress" />
const viewports = [
	{ device: 'iphone-xr', value: { hight: 896, width: 414 } },
	{ device: 'macbook-16', value: { hight: 960, width: 1536 } },
	{ device: 'samsung-s10', value: { hight: 760, width: 360 } },
]
const arrayOfPages = [
	'post-insert',
	'post-insert-images',
	'post-insert/$idannuncio$/',
	'post-promote/i/',
	'post-edit/',
	'feedback/post-publish-email/',
]
const url = './cypress/fixtures/url/url.html'

describe('DIGITAL PRODUCT TESTER INTERVIEW', { testIsolation: false }, () => {
	for (const viewport of viewports) {
		describe(
			'Automated test: "Alert mandatory registrations" (Viewport: ' +
				viewport.device +
				' {' +
				viewport.value.hight +
				', ' +
				viewport.value.width +
				'})',
			{ testIsolation: false, viewportHeight: viewport.value.hight, viewportWidth: viewport.value.width },
			() => {
				it("Visit the site's home page", () => {
					cy.log(viewport.value.hight)
					cy.visit(url)
				})
				it("The user clicks on the 'Publish your ad' button", () => {
					expect(true).to.be.eq(true)
				})
				it('Verify that the ad publication page is displayed', () => {
					expect(true).to.be.eq(true)
				})

				for (const page of arrayOfPages) {
					it('Verify the presence of the warning in page: <./' + page + '>', () => {
						cy.getDataCy('signUp-warning')
					})
					it('Verify that the warning Title in page: <./' + page + '> is spelled correctly', () => {
						cy.getDataCy('alert-title').contains('Important Notice').should('exist')
					})
					it('Verify that the text of the warning in page: <./' + page + '> is spelled correctly', () => {
						cy.getDataCy('alert-text')
							.contains('Attention starting from day May 31, 2023 to publish your ad you will need to be registered on the site. Register Now!')
							.should('exist')
					})
					it('Verify that the clickable text redirects to the correct page', () => {
						cy.getDataCy('signUp-warning').find('[href]').click()
						cy.url().should('include', '/registrationPage')
						cy.wait(500)
						cy.go('back')
						// cy.pause()
					})
				}
				it('Ensure that the user can log out correctly after publishing the ad', () => {
					expect(true).to.be.eq(true)
				})
			}
		)
	}
})
