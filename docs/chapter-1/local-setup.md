# Local Setup

This training workshop is most effective when following along with the exercises. In an effort to provide a seamless and bug free development environment, we have put together an automated environment which will build everything for you including a container-based development environment running on [Lando](https://docs.devwithlando.io/), latest Drupal core and required modules, as well as all the front-end tools needed to compile code and other automated tasks.

{% hint style="warning" %}
#### VERY IMPORTANT!

Your local environment should be setup prior to arriving for training.
{% endhint %}

## 1. Install Lando and Docker

Lando is a free, open source, cross-platform, local development environment tool built on Docker container technology.

### System requirements

Sorry, this is only going to work if you have a fairly new computer. According to the [Lando documentation](https://docs.devwithlando.io/installation/system-requirements.html#operating-system) you will need one of the following:

* macOS 10.10+ \(May need to install command line tools\)
* Windows 10 Pro+ \(or equivalent\) with Hyper-V running
* Linux \(with kernel version 4.x or higher\)

  So far, we have tested only with macOS 10.13 \(High Sierra\) and 10.14 \(Mojave\).

### Run the installer

* [Install Lando and Docker](https://github.com/lando/lando/releases/tag/v3.0.0-beta.47)

At least on a Mac, this installs Lando along with Docker. Optionally, you can install Docker first: the Lando installer has not been updated with the latest version of Docker.

**IMPORTANT**

* **Docker is required**

  Docker makes it possible to build containers for any of the third party integrations required in your environment. If you already have Docker installed you don't need to install it again as part of Lando's installation.

## 2. Clone this repo anywhere in you local system
The clone we have put together includes everything you need to complete the training. This includes latest Drupal core with working theme, required modules \(See below\), and front-end building tools such as NodeJS, Gulp, KSS Node, Linters, and more.

1. Open the command line tool of your choice and change directory to any directory of your choice \(i.e. Desktop or Sites\).
2. Run `git clone git@github.com:mariohernandez/component-based-development.git`
  * If you experience issues with the command above, try this one:<br />
  `git clone https://github.com/mariohernandez/component-based-development.git`


## 3. Building the environment

Now that the repo has been cloned, let's build the local environment using the power of Lando.

1. In your command line, change directory to the newly cloned repo location:

   `cd component-based-development`

2. Run `lando start`

   This will set up Lando, plus pull down Drupal and required contrib modules. This process could take a few minutes to complete.

3. Run

   `lando drush si -y config_installer --account-name=admin --account-pass=admin --db-url='mysql://drupal8:drupal8@database/drupal8'`

   _This will do a basic installation of Drupal with some custom configuration._

4. Run `cp -r assets/imgs/. web/sites/default/files/.`

   _This will copy our sample image assets to the default files directory for your local installation of Drupal._

5. Run `lando db-import drupal8.export.gz`

   _This will import a custom database that includes placeholder content for the demo site we'll use in the training exercises._

6. Run `lando drush cr`

   _This will clear the Drupal caches._

   After following these steps, you should have an unstyled Drupal site available locally at: [http://nitflex.lndo.site](http://nitflex.lndo.site).

## 4. Install the Front-End tooling

* Run `cd web/themes/custom/nitflex_dev_theme`
* Run `lando npm install` _This will install the required front end tools \(Node, Gulp, etc.\)_

## 5. Login and Preview the site

Go to: [http://nitflex.lndo.site/user](http://nitflex.lndo.site/user) and log in with username: **admin**, pw: **admin**

**DONE** 🙌 👏 🍺

{% hint style="info" %}
#### Don't want to use Lando?

The environment we have put together has been extensively tested and we expect everyone to use it during this training workshop. If you wish to use your own development environment you are on your own and we will not support or provide assistance if issues arise.
{% endhint %}
