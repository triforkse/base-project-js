[![Build Status](https://travis-ci.org/triforkse/base-project-js.svg)](https://travis-ci.org/triforkse/base-project-js)

# Project Base for JavaScript

This is a base project that can be used to bootstrap new applications.

# Features

☑ Dockerfile  
☑ Unit Tests  
☑ Integration Tests  
☑ End to end Tests  
☑ Client-Side Analytics  
☑ Logging  
☑ HTTP Server  
☑ Simple SSL/HTTPS  
☐ WebSockets  
☑ Auth  
☑ Health checks  
☑ Rendering  
☑ Coverage

# TODO

☐ Enable Coverage even on JSX files.
☐ Integrate Travis with Coveralls.io.
☐ Write more README.

## Tests

### To Get Growl Test Notifications Working

#### MacOS X Dev Setup

```bash
$ sudo gem install terminal-notifier
```

#### Ubuntu Dev Setup

```bash
$ sudo apt-get install libnotify-bin
```

## HTTPS Security

The API is equipped with basic security and HTTPS enabled.
You need to provide SSL certificates yourself and put them
in the /api/certs folder.

The files should be called: `key.pem` and `cert.pem`.

If you want to scale out your service it is recommended that
you use `nginx` instead of letting NodeJS handle SSL.
