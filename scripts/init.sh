#!/bin/sh
if [ ! -z $LANDO_MOUNT ]; then
  cd $LANDO_MOUNT

  # Copy asset files.
  if [ ! -d "web/sites/default/files" ]; then
    echo "Creating Drupal default files directory"
    chmod 755 web/sites/default
    mkdir web/sites/default/files
    chmod 777 web/sites/default/files
    chmod 555 web/sites/default
  fi
  cp -r assets/imgs/. web/sites/default/files/.

  # Check if the DB is empty before importing the gzipped backup.
  drush status bootstrap | grep Successful > /dev/null
  IMPORT_DATABASE=$?
  if [ $IMPORT_DATABASE -eq 1 ]; then
    echo "Importing Drupal database"
    gunzip -c drupal8.export.gz | drush sqlc
  fi
fi
