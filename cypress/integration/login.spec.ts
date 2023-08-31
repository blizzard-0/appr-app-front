import { AuthData } from '../fixtures/auth.fixtures';

describe('login', () => {
  beforeEach(() => {
    cy.visit('/app/login');
  });

  describe('Login navigation', () => {
    it('should navigate to sign up', () => {
      cy.get('[data-cy="nav-signup"]').click();
      cy.url().should('include', '/app/signup');
    });

    it('should navigate to about', () => {
      cy.get('#nav-about').click();
      cy.url().should('include', '/about');
    });

    it('should navigate to careers', () => {
      cy.get('#nav-careers').click();
      cy.url().should('include', '/careers');
    });

    it('should navigate to faq', () => {
      cy.get('#nav-faq').click();
      cy.url().should('include', '/faq');
    });
  });

  describe('Login form submission', () => {
    it('should send login email successfully', () => {
      cy.get('#email').type(AuthData.email);
      cy.get('#btn-submit').click();
      cy.url().should('include', '/app/auth');
    });
  });
});
