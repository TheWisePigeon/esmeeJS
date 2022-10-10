#!/usr/bin/env node

import Initializer from "./initializer.js"
import Engine from "./engine.js"

Initializer()
while(true){
    await Engine()
}