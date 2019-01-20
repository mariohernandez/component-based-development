---
layout: default
title: Local Setup
nav_order: 2
---

# Local Setup

This training workshop is most effective when following along with the exercises.  In an effort to provide a seamless and bug free development environment, we have put together an automated environment which will build everything for you including a container-based development environment running on [Lando](https://docs.devwithlando.io/), latest Drupal core and required modules, as well as all the front-end tools needed to compile code and other automated tasks.

## 1. Install Lando

Lando is a free, open source, cross-platform, local development environment tool built on Docker container technology.

* [Install Lando and Docker]*(https://docs.devwithlando.io/installation/installing.html)

**NOTE**
* **Docker is required**
  Docker makes it possible to build containers for any of the third party integrations required in your environment.  If you already have Docker installed you don't need to install it again as part of Lando's installation.

* **A word about OSX**
  If you are using Mac OS, you may need to install OSX's Command Line Tools.

## 2. Clone the repo

The clone we have put together includes everything you need to complete the training.  This includes latest Drupal core with working theme, required modules (See below), and front-end building tools such as NodeJS, Gulp, KSS Node, Linters, and more.

1. Open the command line tool of your choice and change directory to any directory  of your choice (i.e. Desktop or Sites).

2. Run `git clone git@github.com:mariohernandez/component-based-development.git`

## 3. Building the environment

Now that the repo has been cloned, let's build the local environment using the power of Lando.

1. In your command line, change directory to the newly cloned repo location ( cd component-based-development)

2. Run `lando start`
  This will set up Lando, plus pull down Drupal and required contrib modules. This process could take a few minutes to complete.

3. Run
  ```lando drush si -y config_installer --account-name=admin --account-pass=admin --db-url='mysql://drupal8:drupal8@database/drupal8'```
  _This will do a basic installation of Drupal with some custom configuration._

4. Run `cp -r assets/imgs/. web/sites/default/files/.`
  _This will copy our sample image assets to the default files directory for your local installation of Drupal._

5. Run `lando db-import drupal8.export.gz`
  _This will import a custom database that includes placeholder content for the demo site we'll use in the training exercises._

6. Run `lando drush cr`
  _This will clear the Drupal caches._

  After following these steps, you should have an unstyled Drupal site available locally at: http://nitflex.lndo.site.

## 4. Install the Front-End tooling

* Run `cd web/themes/custom/nitflex_dev_theme`
* Run `lando npm install`
  _This will install the required front end tools (Node, Gulp, etc.)_

## 5. Login and Preview the site

Go to: http://nitflex.lndo.site/user and log in with username: `admin`, pw: `admin`

# DONE 🙌 👏 🍺
