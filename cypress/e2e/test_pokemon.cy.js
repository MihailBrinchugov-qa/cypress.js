
describe('Тестирование покупку аватара', function () {
    
    it('Тестирование покупку аватара', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('mihail.brinchugov@yandex.ru');
        cy.get('#password').type('8vs3Puuc');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
       // cy.get(':nth-child(7) > .shop__button').click(); 
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 5555 5599');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Misha');
        cy.wait(5000);
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        cy.get('.payment__adv').click();


        })
    
})

