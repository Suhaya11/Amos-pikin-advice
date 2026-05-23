#!/usr/lib/env python3
import os
from cryptography.fernet import Fernet
files = []
for file in os.listdir():
    if file == 'decrypt.py' or file == 'encrypt.py'or file == 'thekey.key':
        continue
    if os.path.isfile(file):
        files.append(file)
key = Fernet.generate_key()
print(Fernet(key).encrypt('suhaya'))

print(files)

print(key)