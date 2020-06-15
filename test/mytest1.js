import {assert} from 'chai';
const expect = require('chai').expect;
describe('Test Complex Counter. General', () => {
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        //expect(actualTitle).toEqual(expectedTitle);
        assert.equal(actualTitle,expectedTitle);
    });
    it(' Verify  that the header is present', ()=> {
        const header = $('[class="header"]').isDisplayed()
        expect(header).eq(true)
    })
    it('verify that the header says counters', ()=> {
        const headerText = $('.header').getText();
        assert.equal('Counters',headerText);
    });
    it('verify that total result is present', function () {
        const totalRes =  $('h3').isDisplayed();
        expect(totalRes).eq(true)
    });
    it('verify total result says Total: ', function () {
        const totalText = $('h3').getText();
        assert.equal('Total: 0' ,totalText );
    });
    it('verify that Enter Counter Title is present', function () {
        const totalCounterTitle =  $('[name="name"]').isDisplayed()
        expect(totalCounterTitle).eq(true)
    });
    it('verify that the Enter Counter Title text is Enter Counter Title:', function () {
        const labelArr = $$('label');
        const labelArr1 = labelArr[1].getText()
        labelArr[1].isDisplayed()
        expect(labelArr1).eq('Enter Counter Title:')
    });
    it('verify that the Add Name Field button text is "Counter Name" ', function () {
        const addNameText = $('[name="name"]').getValue();
        $('[name="name"]').isDisplayed();
        assert.equal(addNameText, 'Counter Name')
    });
    it('verify that the New Counter Default Value Field is present ', function () {
        const defaultValue = $('[data-testid="counter-value-input"]').isDisplayed();
        expect(defaultValue).eq(true)
    });
    it('verify that Enter Initial Count text = 50 by default', function () {
        const enterInitialCount =  $$('label')[2].isDisplayed();
        expect(enterInitialCount).eq(true)
    });
    it('verify that Enter Initial Count text = 50 by default', function () {
        const textField = $('[name="value"]').getValue()
        assert.equal(textField,'50')
    });
    it('should display text Enter Initial Count', function () {
        const labelArr = $$('label');
        const labelArr2 = labelArr[2].getText();
        assert.equal(labelArr2 , 'Enter Initial Count:');
    });
    it('verify that the Add Counter Button is present ', function () {
        const addCounterButton = $(".btn-success.btn").isDisplayed()
        expect(addCounterButton).eq(true)
    });
    it('verify that Add Count Button Text ia "Add Counter" ', function () {
        const addCountButton = $(".btn-success.btn").getText()
        expect(addCountButton).eq('ADD COUNTER')
    });
});
describe('default counter', () => {
    it('verify that Counter Name is present ', function () {
        const defaultCounter = $$('h3')[1].isDisplayed()
        expect(defaultCounter).eq(true)
    });
    it('verify that Counter Name is present ', function () {
        const defaultCounter = $$('h3')[1].getText()
        expect(defaultCounter).eq('1. Default Counter')
    });
    it('verify that LF1 is present ', function () {
        const lF1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].isDisplayed()
        expect(lF1).eq(true)
    });
    it('verify that LF1 text = "Change Step Options?" ', function () {
        const lF1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].getText()
        expect(lF1).eq('CHANGE STEP OPTIONS?')
    });
    it('verify that LF1 text = "Change Step Options?" ', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click()
        const LF1 = $('[name="lower"]').getValue()
        expect(LF1).eq('1')
    });
    it('verify that red circle button \'x\' button shows by clicking ' +
        'on CHANGE STEP OPTIONS in lF1', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click()
        const redButton = $('[name="negative"]').isDisplayed()
        expect(redButton).eq(true)
    });
    it('verify that LF2 is present ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const lF2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].isDisplayed();
        expect(lF2).eq(true);
    });
    it('Verify that the LF2 text is CHANGE STEP OPTIONS?', function () {
        const lF2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].getText();
        expect(lF2).eq('CHANGE STEP OPTIONS?');


    });
    it('Verify that 3 shows up by clicking on CHANGE STEP OPTIONS? in LF2.', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].click()
        const lF2 = $('[name="upper"]').getValue()
        expect(lF2).eq('3')
        
    });
    it('Verify that red circle \'X\' button shows up in LF2. ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].click()
        const redButton = $('[name="positive"]').isExisting()
        expect(redButton ).eq(true)

    });
    it('Verify that the Sub Buttons of LF1 are present', function () {
        const blackNegButton1 = $('[step="-1"]').isDisplayed()
        expect(blackNegButton1).eq(true);
        const blackNegButton2 = $('[step="-2"]').isDisplayed()
        expect(blackNegButton2).eq(true);
        const blackNegButton3 = $('[step="-3"]').isDisplayed()
        expect(blackNegButton3).eq(true);

    });




});
describe('test delete Button functionality',()=> {
    it('Verify that the  red "DELETE" Button under (LF1) is present.', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const delButton = $$('[id="1"]')[0].isDisplayed()
        expect(delButton).eq(true)
    });
    it('Verify that click on DELETE button delete Default Counter.', function () {
        $$('[id="1"]')[0].click()
        const titleTotal = $$('[class="total-count"]')[0].isExisting()
        expect(titleTotal).eq(true)
    });

});
describe('Delete counter name',()=> {
    it('Verify that text (counter name) "Default counter" can clear from Edit counter title :', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const nameEdit = $('[name="edit"]')
         $('[name="edit"]').click()
        $('[name="edit"]').clearValue();
        $('[name="edit"]').setValue(' ')
        const nameCounter = $$('h3')[1].getText()
        expect(nameCounter).eq('1.')
        browser.pause(5000)




     });
    it('Verify that new name in Edit counter title \'Grocery count\'and Counter name - "1. Grocery count" appears.', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('[name="edit"]').clearValue();
        $('[name="edit"]').addValue('Grocery count');
        const titleName = $$('h3')[1].getText()
        expect(titleName).eq('1. Grocery count')


    });
    it('"Verify that user can ADD second counter by default.\n' +
        'Preconditions:\n' +
        '1. 1. Default Counter -> Count Value 0 TOTAL: 0\n' +
        '2. Enter Counter Title ->  \'Counter Name\', Initial Count -> 50 (by default)\n' +
        '3. Click ADD COUNTER\n' +
        'Expected Result:  2 counters ot the page TOTAL: 50;\n' +
        '                              New counter appears with name \'2. Counter Name\'\n' +
        '                              Count Value 50\n' +
        '                              Other fields on the default state" ', function () {
        browser.url('https://likejean.github.io/homework-5/')
        $$('[class="btn-black btn Ripple-parent"]')[1].click();
        browser.pause(1000);
        $$('[class="btn-black btn Ripple-parent"]')[5].click();
        const countValue = $('[class="badge primary badge-primary"]').getText();
        const total = $('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(countValue).eq(total)

    });
});
describe('LF1 & LF2',()=> {
    it('verify that 1 -9 values are acceptable when in LF1 when LF2 = 9', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].click()
        $('[name="upper"]').setValue(9)
        browser.pause(2000)
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click()
        for (let i = 0;i < 10; i++){
            $('[name="lower"]').setValue(i)
        }

    });

});
describe('Verify that correct set of Sub buttons and Add buttons is displayed for max and min range', () => {

    it('should open app and type LF2 "9" ', () => {
        browser.url('https://likejean.github.io/homework-5/');
        $('button[name="positive"]').click();
        $('input[name="upper"]').setValue(9);
    });

    it('verify add buttons from 1 to 9 present', () => {
        for (let i = 1; i < 10; i++) {
            expect($(`[step="${i}"]`).isExisting()).true;
        }
    });

    it('verify sub buttons from -1 to -9 present', () => {
        for (let i = 1; i < 10; i++) {
            expect($(`[step="${-i}"]`).isExisting()).true;
        }
    });
    it('should ', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $('[class="btn-success btn Ripple-parent add col-6"]').click();
        $$('[class="btn-black btn Ripple-parent"]')[2].click();
        const counterFirst = $$('[class="badge primary badge-primary"]')[0].getText();
        const counterSecond = $$('[class="badge primary badge-primary"]')[1].getText();
        const sumOfCounters = +counterFirst + +counterSecond;
        const total = +$('[class="total-count"]').getText().match(/\d+/g)[0];
        expect(total).eq(sumOfCounters);

    });

    });
