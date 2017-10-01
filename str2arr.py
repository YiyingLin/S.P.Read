#!/usr/bin/env python
import json
import sys

if len(sys.argv) != 2:
    print("Requires one arguemnt <filename> to parse.")
    exit(1)

PARAGRAPH_DELIM = '_'
fname = sys.argv[1]
story = []
with open(fname, 'r') as f:
    for line in f:
        line = line.strip()
        if line:
            line_arr = line.split(' ')
            line_arr[-1] = line_arr[-1] + PARAGRAPH_DELIM
            story += line_arr

with open('sample.txt', 'w') as f:
    f.write('const NAME_THIS = ')
    json.dump(story, f)
    f.write(';')
