import backspaceTemplate from './backspace.svg';

export class KeypadConfigProvider {

    // Define defaults
    constructor() {

        // This should be a .svg
        this.backspaceTemplate = backspaceTemplate;

        // By default there is no max length
        // Integer
        this.maxLength = null;

        // Set a default theme: light|dark
        this.theme = 'light';

        /* eslint-disable no-magic-numbers */

        // Define the array of numbers that makes up the keypad
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        /* eslint-enable no-magic-numbers */
    }




    $get() {
        return this;
    }


}


