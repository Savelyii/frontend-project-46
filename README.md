<h1>Difference Calculator</h1>

### Hexlet tests and linter status:

[![Actions Status](https://github.com/Savelyii/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Savelyii/frontend-project-46/actions) <a href="https://codeclimate.com/github/Savelyii/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/3f7526c789a4a6a6dddc/maintainability" /></a> <a href="https://codeclimate.com/github/Savelyii/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3f7526c789a4a6a6dddc/test_coverage" /></a>

<h2>Description</h2>
Difference Calculator is a program that determines the difference between two data structures.

**Utility Features:**
<li>Support for different input formats: yaml, json.</li>
<li>Generating a report in the form of plain text, stylish and json.</li>

<h2>System requirements</h2>
Node.js v18.12.1

<h2>Setup</h2>

```
git clone git@github.com:Savelyii/frontend-project-46.git
```
```
npm ci
```
```
npm link
```
<h2>Displaying reference information about the utility</h2>

```
gendiff -h
```
<h2>Usage</h2> 

**The stylish format is used by default**
```
gendiff <filepath1>, <filepath2>
```
**To select a format, use the -f flag and the format name.**

```
gendiff -f plain <filepath1>, <filepath2>
```
```
gendiff -f json <filepath1>, <filepath2>
```
<h2>Usage</h2>

**Differences between json files in the default stylish format.**

[![asciicast](https://asciinema.org/a/MhYBqa88asSrzZDAU6tiTV5iV.svg)](https://asciinema.org/a/MhYBqa88asSrzZDAU6tiTV5iV)

**Differences between yml files in the default stylish format.**

[![asciicast](https://asciinema.org/a/NoGe9GYnlEpAAhs93H7VFc7zo.svg)](https://asciinema.org/a/NoGe9GYnlEpAAhs93H7VFc7zo)

**Differences between plain text json files.**

[![asciicast](https://asciinema.org/a/43b9t6LVfwQmV0eumUws5M69u.svg)](https://asciinema.org/a/43b9t6LVfwQmV0eumUws5M69u)

**Differences between yml files in plain text format.**

[![asciicast](https://asciinema.org/a/Tm3U2YqIFIGK5X5BdwGE6YsSc.svg)](https://asciinema.org/a/Tm3U2YqIFIGK5X5BdwGE6YsSc)

**Differences between json files in json format.**

[![asciicast](https://asciinema.org/a/tCq95fwxN8n4UdqrEMUu1ImSX.svg)](https://asciinema.org/a/tCq95fwxN8n4UdqrEMUu1ImSX)

