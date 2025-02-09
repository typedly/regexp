
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/regexp"
  />
</a>

## typedly/regexp

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **TypeScript** type definitions package for `RegExp`.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - **Core Types**
    - `Escaped`
    - `FromTo`
    - `NonCapturingRepetition`
    - `Quantifier`
    - `Range`
    - `RegExpPattern`
    - `Repetition`

  - **Character**
    - `CharacterRange`
    - `CharacterRangeRepetition`

  - **Flag**
    - `AppendFlag`
    - `FlagString`
    - `IncludeFlag`
    - `IncludeFlags`
    - `PrependFlag`
    - `RegExpFlag`
    - `RemoveFlag`

  - **Letter Ranges**
    - `LetterRange`
    - `LetterRangeExclusion`
    - `LetterRangeRepetition`
    - `LetterRangeRepetitionPattern`
    - `LetterRangeTuple`

  - **Lowercase Ranges**
    - `LowercaseLetterRange`
    - `LowercaseLetterRangePattern`

  - **Multiple Ranges**
    - `MultiLetterRange`
    - `MultiLetterRangeRepetition`

  - **Uppercase Ranges**
    - `UppercaseLetterRange`
    - `UppercaseLetterRangePattern`
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

### 1. Install Peer Dependencies

Before installing the package, ensure that all required peer dependencies are installed:

```bash
npm install @typedly/letter --save-peer
```

### 2. Install the package

Now, install the package:

```bash
npm install @typedly/regexp --save-peer
```

## Api

```typescript
import {
  Escaped,
  FromTo,
  NonCapturingRepetition,
  Quantifier,
  Range,
  RegExpPattern,
  Repetition,

  // Character
  CharacterRange,
  CharacterRangeRepetition,

  // Flag
  AppendFlag,
  FlagString,
  IncludeFlag,
  IncludeFlags,
  PrependFlag,
  RegExpFlag,
  RemoveFlag,

  // LetterRange
  LetterRange,
  LetterRangeExclusion,
  LetterRangeRepetition,
  LetterRangeRepetitionPattern,
  LetterRangeTuple,

  // Lowercase
  LowercaseLetterRange,
  LowercaseLetterRangePattern,

  // MultiLetter
  MultiLetterRange,
  MultiLetterRangeRepetition,

  // UpperLetter
  UppercaseLetterRange,
  UppercaseLetterRangePattern,
} from '@typedly/regexp';
```

### `Escaped`

```typescript
import { Escaped } from '@typedly/regexp';

const valid1: Escaped<'dws'> = '\\d\\w\\s'; // '\\d\\w\\s'
const valid2: Escaped<'*Dws'> = '\\*\\D\\w\\s'; // '\\*\\D\\w\\s'
const valid3: Escaped<'^d+*w$'> = '\\^\\d\\+\\*\\w\\$'; // '\\^\\d\\+\\*\\w\\$'
```

### `RegExpFlag`

```typescript
import { RegExpFlags } from '@typedly/regexp';

const g: RegExpFlag = 'g';
const i: RegExpFlag = 'i';
const m: RegExpFlag = 'm';
const u: RegExpFlag = 'u';
const y: RegExpFlag = 'y';
```

### `Repetition`

```typescript
import { Repetition } from '@typedly/regexp';

type ZeroOrMore = Repetition<'*'>; // Output: "*"
type OneOrMore = Repetition<'+'>; // Output: "+"
type ZeroOrOne = Repetition<'?'>; // Output: "?"
type ExactlyThree = Repetition<3>; // Output: "{3}"
type TwoToFourTimes = Repetition<2, 4>; // Output: "{2,4}"
type AtLeastFive = Repetition<5, ''>; // Output: "{5,}"

const zeroOrMore: ZeroOrMore = '*';
const oneOrMore: OneOrMore = '+';
const zeroOrOne: ZeroOrOne = '?';
const exactlyThree: ExactlyThree = '{3,}';
const twoToFourTimes: TwoToFourTimes = '{2,4}';
const atLeastFive: AtLeastFive = '{5,}';
```

### `LetterRangeExclusion`

```typescript
import { LetterRangeExclusion } from '@typedly/regexp';

type ExcludedLowercase = LetterRangeExclusion; // Resolves to "[^a-z]
type ExcludedVowels = LetterRangeExclusion<'a', 'u'>; // Resolves to "[^a-u]"
// Using the type in a variable
const pattern: ExcludedLowercase = "[^a-z]";  // This matches any character not in a-z
// If you log the pattern or use it in a RegExp, it will exclude lowercase letters:
const regex = new RegExp(pattern);
regex.test("B");  // true, because 'B' is not a lowercase letter
regex.test("b");  // false, because 'b' is a lowercase letter
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/regexp
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/regexp
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/regexp
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/regexp
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/regexp/issues
  [typedly-forks]: https://github.com/typedly/regexp/network
  [typedly-license]: https://github.com/typedly/regexp/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/regexp/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fregexp.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fregexp

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
