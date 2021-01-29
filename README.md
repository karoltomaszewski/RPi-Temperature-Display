# `RPi-Temperature-Display`
> Node.js and Raspberry Pi project.

## Table of contents
* [General info](#general-info)
* [Hardware](#hardware)
* [Photo](#photo)
* [Setup](#setup)
* [Default behavior](#default-behavior)
* [Status](#status)

## General info
Application that monitors the ambient temperature. Displays the value on the device console (on the Raspberry Pi) and on the 7-segment display x2.

## Hardware
* Raspberry Pi (I'm using a Raspberry Pi 4 Model B 8GB)
* 7-segment display x2 - 10mm red - common cathode
* Temperature sensor DS18B20 - digital 1-wire THT
* Some resistors (I'm using 100Ω)
* Resistor 4700Ω
* Breadboard

## Photo 
![Example screenshot](./img/screenshot.png)

## Setup

### Setup software
Setup software is simple. You have to clone the repo on your RPi and then in console:
```sh
cd RPi-Temperature-Display  
npm install  
node app.js
```

### Setup hardware
Setup hardware is more complex. Read about it in the file `RPi-Temperature-Display Setup Hardware.pdf`.

## Default behavior

The temperature is monitored every 5 seconds by default.  
You can change this by changing the value of the variable `time`.


## Status
Project is: _finished_
