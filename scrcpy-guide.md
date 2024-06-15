## no mirroring: scrcpy behaves as if it was a physical keyboard and/or mouse
``` bash
scrcpy --otg
```

## shortcut modifier (MOD)
### By default, it's (left) Alt or (left) Super 
scrcpy --shortcut-mod=lctrl

## super useful shortcuts
Click on HOME	MOD+h | Middle-click
Click on BACK	MOD+b | MOD+Backspace | Right-click²
Click on APP_SWITCH	MOD+s | 4th-click³

Turn device screen off (keep mirroring)	MOD+o
Turn device screen on	MOD+Shift+o

Copy to clipboard⁵	MOD+c
Cut to clipboard⁵	MOD+x
Synchronize clipboards and paste⁵	MOD+v
Inject computer clipboard text	MOD+Shift+v

Enable/disable FPS counter (on stdout)	MOD+i

## performance
### resoltion (default: scrcpy attempts to mirror at the Android device resolution)
scrcpy --max-size=1024
### fps (default: same as resolution)
scrcpy --max-fps=15
### bitrate (default video bit rate is 8 Mbps)
scrcpy --video-bit-rate=2M


## connecting through wifi 
1. connect device with usb
2. adb shell ip addr show wlan0
