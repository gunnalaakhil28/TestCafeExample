
import { Selector } from 'testcafe';
fixture(`Test structure`)
    .page`https://dev.deepthought.education/login`;

const successScreen = Selector('.mb-4');
const errorMessage = Selector('#login-error-notify');

test('Test with valid credentials', async t => {


    await t
        .maximizeWindow()
        .typeText('#username', 'gunnalaakhil28@gmail.com')
        .typeText('#password', 'Tinku@0023')
        .click('#login');

    await t.expect(successScreen.exists).ok();
});

test('Test with Invalid credentials', async t => {

    await t
        .maximizeWindow()
        .typeText('#username', 'gunnalaakhilgmail.com')
        .typeText('#password', 'Tinku')
        .click('#login');
    await t.expect(errorMessage.exists).ok();
});