Feature('add to cart');

Scenario('adding item to cart', ({ I }) => {
    I.amOnPage('/');
    I.click('Dresses', '//*[@id="block_top_menu"]/ul/li[2]');
    I.click('Summer Dresses', '//*[@id="categories_block_left"]/div/ul/li[3]/a');
    I.see('Summer Dresses');
    I.click('List', '//*[@id="list"]');
    I.click('Add to cart', '//*[@id="center_column"]/ul/li[3]/div/div/div[3]/div/div[2]/a[1]/span');
    I.click('Proceed to checkout', '.btn.btn-default.button.button-medium');
    I.see('Printed Chiffon Dress');

});

