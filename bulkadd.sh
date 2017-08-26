#!/bin/sh

while read -r a b; do
    node add.js $a $b
done < bulkadd