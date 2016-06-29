### 3.0.0 (June 29th 2016)
- Completely new API: no more function-as-a-child. See Readme for the details
- No new DOM Nodes are created anymore when component gets rerendered.
- Requires React v0.14 or higher
- Both `RadioGroup` and `Radio` have a displayName

### 2.2.0 (November 30th 2015)
- `selectedValue` and `onChange` are optional

### 2.1.1 (August 17th 2015)
- Allow `selectedValue`'s type to be a boolean.

### 2.1.0 (July 26th 2015)
- Library now no longer wraps your children function return with a `div`. It now checks that you return a single component (or `null`) from the function. #18

### 2.0.2 (June 14th 2015)
- Make the library work with browser globals.

### 2.0.1 (June 14th 2015)
- Compile to UMD so you can import this hackily from a browser script.

## 2.0.0 (June 14th 2015)
- API overhaul. See README for the new, cleaner API!
- Drop Bower support.
- Add npm support.

## 1.0.0
- Initial release.
