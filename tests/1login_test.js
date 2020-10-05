Feature('login');

Scenario('login with a valid datas', ({ I }) => {
    I.amOnPage('/');
    I.click('Sign in', '//*[@id="header"]/div[2]/div/div/nav/div[1]/a');
    I.fillField({id: 'email'}, 'eneskilinch@hotmail.com');
    I.fillField({id: 'passwd'}, 'eneseness');
    I.click('Sign in', {id: 'SubmitLogin'});
    I.seeInTitle('My account - My Store');
});
