# unsilence
Library to remove silent parts of a media file

https://github.com/lagmoellertim/unsilence

`unsilence.exe in.mkv out.mkv -sl -30 -t 4 -ss 10`

`unsilence.exe in.mkv out.mkv -sl -18 -stt 0.3 -ss 10`

# join ffmpeg
run this command on `join-Title.ffmpeg`

`ffmpeg  -loglevel info -f concat -safe 0  -i join-Title.ffmpeg -c copy   "Whole Title.mkv"`
