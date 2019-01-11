# dockerfile-generator

Generating Dockerfile from JSON and generate JSON document from a Dockerfile.

[![Build Status](https://travis-ci.org/tudvari/dockerfile-generator.svg?branch=master)](https://travis-ci.org/tudvari/dockerfile-generator)
[![Code Climate](https://codeclimate.com/github/tudvari/dockerfile-generator/badges/gpa.svg)](https://codeclimate.com/github/tudvari/dockerfile-generator)
[![Test Coverage](https://codeclimate.com/github/tudvari/dockerfile-generator/badges/coverage.svg)](https://codeclimate.com/github/tudvari/dockerfile-generator/coverage)
[![npm version](https://badge.fury.io/js/dockerfile-generator.svg)](https://badge.fury.io/js/dockerfile-generator)

## About the package

The main goal of this package is to support a Dockfile generation from Javascript. You are able to use all keyword from a Dockerfile reference.

Dockerfile reference is [HERE](https://docs.docker.com/engine/reference/builder/).

###  Changes of the Latest Release

#### Version 3.1.0 ( 2019.01.XX)

- Refactor of the Dockerfile generation functionality.
- Refactor of the JSON creation from a Dockerfile

You can find all Release Notes [HERE](https://github.com/tudvari/dockerfile-generator/blob/master/ReleaseNotes.md)

## Usage

```Javascript
var generator = require('dockerfile-generator')

let result = await generator.generate(inputJSON)
// Result is a generated Dockerfile.

let convertedJSON = generator.convertToJSON(inputDockerFile)
// Result is a generated JSON from Dockerfile.

let genereratedIgnore = await generator.generateIgnoreFile(ignoredElementsArray)
// generatedIgnore is a generated dockerignore file
```

### License

Copyright (c) 2015 Tibor Udvari. Released under the MIT license. See [LICENSE](https://github.com/tudvari/docker-composer/blob/master/LICENSE) for details.
