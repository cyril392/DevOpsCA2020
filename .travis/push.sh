#!/bin/sh
git remote add cleverapps
https://$CLEVER_TOKEN:$CLEVER_SECRET@push.clever-cloud.com/app_5c5194bd-3152-4fb5-8474-8856373e1281.git
git --verbose --force push cleverapps master
