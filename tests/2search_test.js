Feature('search');

Scenario('Search for an Item', ({ I }) => {
    I.amOnPage('/');
    I.fillField({id: 'search_query_top'}, 'Blouse');
    I.click('.btn.btn-default.button-search')
    I.see('Blouse');
});