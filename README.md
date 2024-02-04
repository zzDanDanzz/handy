## unsilence
Library to remove silent parts of a media file

https://github.com/lagmoellertim/unsilence

```
unsilence 1-data-and-map.mkv out4.mkv -sl -27 -ss 16 -stt 0.2 -sit 0.1 -st 0.05 -t 16
```

## ffmpeg: join
run this command on `join-Title.ffmpeg`

```
ffmpeg  -loglevel info -f concat -safe 0  -i join-Title.ffmpeg -c copy   "Whole Title.mkv"
```

## ffmpeg: speed up by 1.5
```
ffmpeg -i input.mp4 -filter_complex "[0:v]setpts=0.67*PTS[v];[0:a]atempo=1.5[a]" -map "[v]" -map "[a]" output.mp4
```

## AutoHotKey
File: `fastaf.ahk`

Why: I like to use the Mouse4 and Mouse5 buttons for Ctrl and Alt respectively.

### Run on startup (on windows)
1. Press `Win+R` to open Run dialog
2. Type `shell:startup` and press enter
3. Paste the shortcut of the `fastaf.ahk`

## bash aliases on windows cmd

create a file and maybe call it `macros.doskey` with content like this: 

```
...
gp=git push $*
gpl=git pull $*
gc=git commit -m $*
...
```
take note of the conversion between a bash alias and cmd doskey thing:
```
alias gb="git branch" => gb=git branch $*
```

then run this in cmd:

```
reg add "HKCU\Software\Microsoft\Command Processor" /v Autorun /d "doskey /macrofile=\"C:\Users\Dan\Desktop\macros.doskey\"" /f
```

but replace `C:\Users\Dan\Desktop\macros.doskey\` with the path of wherever you put the `macros.doskey` file
