/* jshint esversion: 6, moz: true */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const { Cc, Ci } = require("chrome");
const { quit, eForceQuit } = Cc['@mozilla.org/toolkit/app-startup;1'].
                             getService(Ci.nsIAppStartup);
const { setTimeout } = require("sdk/timers");
const exit = () => quit(eForceQuit);

setTimeout(exit, 1);

sadf
