## no mirroring: scrcpy behaves as if it was a physical keyboard and/or mouse

```bash
scrcpy --otg
```

## shortcut modifier (MOD)

### By default, it's (left) Alt or (left) Super

```bash
scrcpy --shortcut-mod=lctrl
```

## super useful shortcuts

- Click on HOME MOD+h | Middle-click
- Click on BACK MOD+b | MOD+Backspace | Right-click²
- Click on APP_SWITCH MOD+s | 4th-click³

---

- Turn device screen off (keep mirroring) MOD+o
- Turn device screen on MOD+Shift+o

---

- Copy to clipboard⁵ MOD+c
- Cut to clipboard⁵ MOD+x
- Synchronize clipboards and paste⁵ MOD+v
- Inject computer clipboard text MOD+Shift+v

---

- Enable/disable FPS counter (on stdout) MOD+i

## performance

### resoltion (default: scrcpy attempts to mirror at the Android device resolution)

```bash
scrcpy --max-size=1024
```

### fps (default: same as resolution)

```bash
scrcpy --max-fps=15
```

### bitrate (default video bit rate is 8 Mbps)

```bash
scrcpy --video-bit-rate=2M
```

## connecting through wifi

1. connect device to local network
1. connect device with usb
1. find ip of connected device in local network with:

```bash
adb shell ip addr show wlan0
```

3. make adb daemon on android device listen over TCP/IP on port 5555:

```bash
adb tcpip 5555
```

4. unplug the device
5. connect to device wirelessly:

```bash
adb connect DEVICE_IP_HERE:5555
```

6. disconnect from device:

```bash
adb disconnect DEVICE_IP_HERE:5555
```

7. make adb daemon stop listening over TCP/IP (after connecting with usb):

```bash
adb usb
```

