# RPi-Temperature-Display
> Node.js and Raspberry Pi project.

## Table of contents
* [General info](#general-info)
* [Hardware](#hardware)
* [Screenshots and photos](#screenshots-and-photos)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Application that monitors the ambient temperature. Displays the value on the device console (on the Raspberry Pi) and on the display.

## Hardware
* Raspberry Pi (I'm using a Raspberry Pi 4 Model B 8GB)
* 7-segment display x2 - 10mm red - common cathode
* Temperature sensor DS18B20 - digital 1-wire THT
* Some resistors (I'm using 100Ω)
* Resistor 4700Ω

## Screenshots and photos
![Example screenshot](./img/screenshot.png)

## Setup

Setup software is simple. You have to clone the repo on your RPi and then in console:
```sh
cd RPi-Temperature-Display  
npm install  
node app.js
```

## Status
Project is: _finished_
